/**
 * =========================================================================
 * SCG/JWD WANG NOI - OPTIMAL ROUTE ENGINE (PRODUCTION MASTER)
 * =========================================================================
 * ระบบคำนวณเส้นทางขนส่งและทำเบิกส่วนต่าง SCG/JWD วังน้อย (AppSheet Integrated)
 *
 * 🚨 [กฎเหล็กทางธุรกิจและเทคนิค]
 * 1. Business Contract (One-Way Milk Run):
 *    คัด Top 3 จุดที่ไกลจากคลังวังน้อยที่สุดมาแข่งกัน แล้วเลือกระยะรวมสั้นสุด
 *    ห้ามเปลี่ยนเป็น Centroid / วนกลับคลัง
 *
 * 2. Coordinate Standard = ทศนิยม 6 ตำแหน่ง (.toFixed(6)):
 *    - ใช้กับลิงก์ Google Maps, GoogleMapsRoutesAPI, และ Lat/Long_ปลายทาง_01..20
 *    - สอดคล้องกับพฤติกรรมที่ AppSheet บันทึกพิกัดปกติ (6 ตำแหน่ง)
 *    - กัน URL แผนที่ยาวเกินเมื่อมีจุดส่งหลายจุด
 *    - หมายเหตุ: หากในชีตต้นทางมีพิกัดที่แก้มือจนทศนิยมยาวกว่า 6
 *      ระบบจะ parse เป็นตัวเลขแล้วเขียนกลับด้วยมาตรฐาน 6 ตำแหน่ง
 *
 * 3. Type Safety:
 *    ห้ามใช้ TextFinder หา Shipment No / rowId
 *    ต้องเทียบใน RAM ด้วย String(...).trim() === target
 *
 * 4. Targeted Zone Write:
 *    เขียนเฉพาะคอลัมน์ผลลัพธ์ ห้าม setValues ทั้งแถว
 *    เพื่อไม่กระทบคอลัมน์ "เดือน" และคอลัมน์ 32-42
 *
 * 5. Instant UI Sync:
 *    ต้องมี SpreadsheetApp.flush() ท้ายการเขียน
 *    และตั้ง AppSheet Task เป็น Run asynchronously = OFF
 * =========================================================================
 */

const CONFIG = Object.freeze({
  SPREADSHEET_ID: "1CYtLpXn6gNYgbGu3oRF8CW5KkGYHQJ6D4jl9u2LiR6o",
  SHEET_COMPUTED: "SCGนครหลวงJWDภูมิภาค",
  SHEET_RESULT: "ทำเบิกส่วนต่างScgวังน้อย",

  // พิกัดคลังวังน้อย (ต้นทาง)
  DEPOT_COORDS: Object.freeze({
    lat: 14.164671,
    lng: 100.625358,
    name: "คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย"
  }),

  COLUMNS: Object.freeze({
    SOURCE_SHIPMENT: "Shipment No",
    SOURCE_DEST_LATLONG: "จุดส่งสินค้าปลายทาง",
    SOURCE_DEST_NAME: "ชื่อปลายทาง",
    SOURCE_DEPOT_DIST: "ระยะทางจากคลัง_Km",

    ID_RESULT_NAME: "ID_ทำเบิกส่วนต่างScgวังน้อย",
    RESULT_NAME: "GoogleMapsRoutesAPI",
    DISTANCE_NAME: "ระยะทาง_GoogleMapAPI_Km",
    LINK_NAME: "แสดงแผนที่_GoogleMapsRoutesAPI",

    // ต้องเรียงติดกันในชีต: DIST, LINK, DIST, LINK
    CANDIDATE_2_DIST: "Candidate_2_ระยะทาง_Km",
    CANDIDATE_2_LINK: "Candidate_2_แสดงแผนที่",
    CANDIDATE_3_DIST: "Candidate_3_ระยะทาง_Km",
    CANDIDATE_3_LINK: "Candidate_3_แสดงแผนที่"
  }),

  CANDIDATE_COUNT: 3,
  LOCK_TIMEOUT_MS: 60000,
  MAX_WAYPOINTS_DETAIL_COLS: 20
});

// =================================================================
// [ 1 ] MAIN ENTRY POINT
// =================================================================
function findOptimalRouteUsingExistingDistance(shipmentId, rowId) {
  const startTime = new Date().getTime();
  Logger.log("=================================================================");
  Logger.log(`🚀 [START] Route Engine | Shipment: ${shipmentId} | Row ID: ${rowId}`);
  Logger.log("=================================================================");

  if (!shipmentId || !rowId) {
    throw new Error("[Invalid Input] ต้องระบุ shipmentId และ rowId ให้ครบถ้วน");
  }

  const apiKey = PropertiesService.getScriptProperties().getProperty("GOOGLE_MAPS_API_KEY");
  if (!apiKey || apiKey.trim().length < 20) {
    throw new Error("[Security Error] ไม่พบ GOOGLE_MAPS_API_KEY ที่ถูกต้องใน Script Properties");
  }

  const lock = LockService.getScriptLock();
  let hasLock = false;

  try {
    hasLock = lock.tryLock(CONFIG.LOCK_TIMEOUT_MS);
    if (!hasLock) {
      throw new Error(
        `[Concurrency Error] เซิร์ฟเวอร์กำลังประมวลผลคำขออื่นอยู่ (รอนานเกิน ${CONFIG.LOCK_TIMEOUT_MS / 1000} วินาที) กรุณากดใหม่อีกครั้ง`
      );
    }

    const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);

    const waypoints = prepareWaypointsWithExistingDistance(ss, shipmentId);
    if (waypoints.length <= 1) {
      throw new Error(`[Data Error] ไม่พบจุดส่งสินค้าปลายทางที่สมบูรณ์สำหรับ Shipment: ${shipmentId}`);
    }

    const destinationCount = waypoints.length - 1;
    Logger.log(`📍 โหลดข้อมูลสำเร็จ: พบจุดส่งทั้งหมด ${destinationCount} จุด`);

    if (destinationCount > CONFIG.MAX_WAYPOINTS_DETAIL_COLS) {
      throw new Error(
        `[Limit Error] Shipment นี้มีจุดส่ง ${destinationCount} จุด ซึ่งเกินขีดจำกัดตาราง (${CONFIG.MAX_WAYPOINTS_DETAIL_COLS} ช่อง) กรุณาตรวจสอบ`
      );
    }

    let evaluationResult;
    if (destinationCount === 1) {
      Logger.log("⚡ [Fast-Path] มีจุดส่งเพียง 1 จุด ข้าม Candidate Engine");
      evaluationResult = executeSingleRoute(waypoints, apiKey);
    } else {
      const candidateTrials = buildCandidateTrials(waypoints, CONFIG.CANDIDATE_COUNT);
      Logger.log(`🔍 สร้าง ${candidateTrials.length} Candidates เพื่อเปรียบเทียบหาเส้นทางที่ดีที่สุด`);
      evaluationResult = evaluateCandidateRoutesParallelWithFallback(candidateTrials, apiKey);
    }

    const winner = evaluationResult.winner;
    const runnerUps = evaluationResult.runnerUps || [];
    const warnings = evaluationResult.warnings || [];

    Logger.log(`🏆 [ผู้ชนะ] ปลายทาง: ${winner.candidateName} | ระยะทางรวม: ${winner.totalDistance} กม.`);
    if (runnerUps.length > 0) {
      runnerUps.forEach((r, idx) => {
        Logger.log(`   🥈 [สำรองอันดับ ${idx + 1}] ปลายทาง: ${r.candidateName} | ระยะทาง: ${r.totalDistance} กม.`);
      });
    }

    const resultSheet = ss.getSheetByName(CONFIG.SHEET_RESULT);
    if (!resultSheet) {
      throw new Error(`[Sheet Error] ไม่พบแผ่นงาน '${CONFIG.SHEET_RESULT}'`);
    }

    writeResultsToSheetBatchSafely(resultSheet, rowId, winner, runnerUps);

    const totalTimeSec = ((new Date().getTime() - startTime) / 1000).toFixed(2);
    Logger.log(`✅ [SUCCESS] ประมวลผลเสร็จสิ้นใน ${totalTimeSec} วินาที`);

    return {
      Status: "Success",
      ShipmentId: shipmentId,
      CalculatedDistanceKm: winner.totalDistance,
      GoogleMapsLink: winner.googleMapsLink,
      SelectedDestination: winner.candidateName,
      ExecutionTimeSeconds: totalTimeSec,
      Warnings: warnings.length > 0 ? warnings : undefined
    };
  } catch (error) {
    Logger.log(`❌ [CRITICAL ERROR] ${error.message}\nStack: ${error.stack}`);
    throw new Error(error.message);
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

// =================================================================
// [ 2 ] DATA PREPARATION
// =================================================================
function prepareWaypointsWithExistingDistance(ss, shipmentId) {
  const computedSheet = ss.getSheetByName(CONFIG.SHEET_COMPUTED);
  if (!computedSheet) {
    throw new Error(`[Sheet Error] ไม่พบแผ่นงาน '${CONFIG.SHEET_COMPUTED}'`);
  }

  const lastRow = computedSheet.getLastRow();
  const lastCol = computedSheet.getLastColumn();
  if (lastRow < 2) return [];

  const header = computedSheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const shipmentColIdx = header.indexOf(CONFIG.COLUMNS.SOURCE_SHIPMENT);
  const latlngColIdx = header.indexOf(CONFIG.COLUMNS.SOURCE_DEST_LATLONG);
  const nameColIdx = header.indexOf(CONFIG.COLUMNS.SOURCE_DEST_NAME);
  const distanceColIdx = header.indexOf(CONFIG.COLUMNS.SOURCE_DEPOT_DIST);

  if (shipmentColIdx === -1 || latlngColIdx === -1) {
    throw new Error("[Schema Error] ไม่พบคอลัมน์ 'Shipment No' หรือ 'จุดส่งสินค้าปลายทาง' ในชีตต้นทาง");
  }

  const numRowsToSearch = lastRow - 1;

  // Type-safe in-memory search (ห้าม TextFinder)
  const shipmentColData = computedSheet
    .getRange(2, shipmentColIdx + 1, numRowsToSearch, 1)
    .getValues();
  const targetShipmentId = String(shipmentId).trim();
  const matchedRowIndices = [];

  for (let i = 0; i < shipmentColData.length; i++) {
    if (String(shipmentColData[i][0]).trim() === targetShipmentId) {
      matchedRowIndices.push(i + 2);
    }
  }

  if (matchedRowIndices.length === 0) return [];

  const minRow = Math.min(...matchedRowIndices);
  const maxRow = Math.max(...matchedRowIndices);
  const rowSpan = maxRow - minRow + 1;
  const chunkData = computedSheet.getRange(minRow, 1, rowSpan, lastCol).getValues();

  const allPoints = [
    {
      id: 0,
      name: CONFIG.DEPOT_COORDS.name,
      original: { lat: CONFIG.DEPOT_COORDS.lat, lng: CONFIG.DEPOT_COORDS.lng },
      forApi: {
        location: {
          latLng: {
            latitude: CONFIG.DEPOT_COORDS.lat,
            longitude: CONFIG.DEPOT_COORDS.lng
          }
        }
      },
      distance: 0,
      isDepot: true
    }
  ];

  let idCounter = 1;
  const invalidRows = [];

  matchedRowIndices.forEach((rowIdx) => {
    const rowValues = chunkData[rowIdx - minRow];
    const latlngRaw = rowValues[latlngColIdx];

    if (!latlngRaw) {
      invalidRows.push({ row: rowIdx, reason: "พิกัดว่างเปล่า" });
      return;
    }

    const rawString = String(latlngRaw).trim();
    const parsed = parseAndValidateLatLng(rawString);
    if (!parsed) {
      invalidRows.push({
        row: rowIdx,
        value: rawString,
        reason: "รูปแบบพิกัดไม่ถูกต้อง หรืออยู่นอกเขตพิกัดจริง"
      });
      return;
    }

    let distance =
      distanceColIdx !== -1 ? parseFloat(rowValues[distanceColIdx]) || 0 : 0;
    if (distance <= 0) {
      distance = calculateHaversineDistanceKm(
        CONFIG.DEPOT_COORDS.lat,
        CONFIG.DEPOT_COORDS.lng,
        parsed.lat,
        parsed.lng
      );
    }

    let name = `Point ${idCounter}`;
    if (nameColIdx !== -1 && rowValues[nameColIdx]) {
      name = String(rowValues[nameColIdx]).trim();
    }

    allPoints.push({
      id: idCounter++,
      name: name,
      original: parsed,
      forApi: {
        location: {
          latLng: {
            latitude: parsed.lat,
            longitude: parsed.lng
          }
        }
      },
      distance: distance,
      isDepot: false
    });
  });

  if (invalidRows.length > 0) {
    const details = invalidRows
      .map((r) => `[แถว ${r.row}: ${r.reason} (${r.value || "ว่าง"})]`)
      .join(", ");
    throw new Error(
      `[Data Integrity Error] Shipment ${shipmentId} พบจุดส่งข้อมูลเสียหาย ${invalidRows.length} จุด: ${details}`
    );
  }

  return allPoints;
}

function parseAndValidateLatLng(rawString) {
  if (!rawString) return null;
  const cleaned = rawString
    .trim()
    .replace(/[\t\r\n]/g, "")
    .replace(/[^\d.,-]/g, "");
  const parts = cleaned.split(",");
  if (parts.length !== 2) return null;

  const lat = parseFloat(parts[0].trim());
  const lng = parseFloat(parts[1].trim());
  if (isNaN(lat) || isNaN(lng)) return null;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;
  return { lat, lng };
}

function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 100) / 100;
}

function buildCandidateTrials(allPoints, maxCandidates) {
  const limit = maxCandidates || CONFIG.CANDIDATE_COUNT;
  const depot = allPoints[0];
  const destinations = allPoints.slice(1);
  const sortedByDepotDistance = [...destinations].sort(
    (a, b) => b.distance - a.distance
  );
  const candidateDestinations = sortedByDepotDistance.slice(
    0,
    Math.min(limit, sortedByDepotDistance.length)
  );

  return candidateDestinations.map((candidate) => {
    const intermediates = destinations.filter((p) => p.id !== candidate.id);
    return {
      origin: depot,
      destination: candidate,
      intermediates: intermediates
    };
  });
}

// =================================================================
// [ 3 ] API EXECUTION
// =================================================================
function executeSingleRoute(waypoints, apiKey) {
  const origin = waypoints[0];
  const destination = waypoints[1];
  const payload = {
    origin: origin.forApi,
    destination: destination.forApi,
    travelMode: "DRIVE",
    routingPreference: "TRAFFIC_UNAWARE"
  };

  const responseJson = callRoutesApiSingleWithBackoff(payload, apiKey);
  if (!responseJson || !responseJson.routes || responseJson.routes.length === 0) {
    throw new Error(
      "[API Error] Google Maps API ไม่พบเส้นทางเชื่อมต่อระหว่างคลังกับจุดส่งนี้"
    );
  }

  const distanceMeters = responseJson.routes[0].distanceMeters;
  if (typeof distanceMeters !== "number" || isNaN(distanceMeters)) {
    throw new Error("[API Error] ข้อมูลระยะทางจาก Google API ไม่ถูกต้อง");
  }

  const totalDistance = Math.round((distanceMeters / 1000) * 100) / 100;
  const googleMapsLink = createGoogleMapsUrl([origin, destination]);

  return {
    winner: {
      orderedWaypoints: [origin, destination],
      totalDistance: totalDistance,
      googleMapsLink: googleMapsLink,
      winningCandidateId: destination.id,
      candidateName: destination.name
    },
    runnerUps: [],
    warnings: []
  };
}

function evaluateCandidateRoutesParallelWithFallback(candidateTrials, apiKey) {
  const apiUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";

  const fetchRequests = candidateTrials.map((trial) => {
    const shouldOptimize = trial.intermediates.length > 1;
    const payload = {
      origin: trial.origin.forApi,
      destination: trial.destination.forApi,
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_UNAWARE",
      optimizeWaypointOrder: shouldOptimize
    };
    if (trial.intermediates.length > 0) {
      payload.intermediates = trial.intermediates.map((p) => p.forApi);
    }

    return {
      url: apiUrl,
      method: "post",
      contentType: "application/json",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "routes.distanceMeters,routes.optimizedIntermediateWaypointIndex"
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
  });

  let rawResponses = null;
  try {
    rawResponses = UrlFetchApp.fetchAll(fetchRequests);
  } catch (netErr) {
    Logger.log(
      `⚠️ [Network Error in fetchAll] ${netErr.message} -> สลับสู่โหมด Sequential Fallback`
    );
  }

  const validResults = [];
  const failedTrials = [];

  candidateTrials.forEach((trial, index) => {
    let resultJson = null;

    if (rawResponses && rawResponses[index]) {
      const resp = rawResponses[index];
      if (resp.getResponseCode() === 200) {
        try {
          resultJson = JSON.parse(resp.getContentText());
        } catch (e) {
          resultJson = null;
        }
      }
    }

    if (!resultJson || !resultJson.routes || resultJson.routes.length === 0) {
      try {
        const payload = JSON.parse(fetchRequests[index].payload);
        resultJson = callRoutesApiSingleWithBackoff(payload, apiKey);
      } catch (err) {
        failedTrials.push(`${trial.destination.name} (${err.message})`);
        return;
      }
    }

    if (!resultJson || !resultJson.routes || resultJson.routes.length === 0) {
      failedTrials.push(`${trial.destination.name} (No Route Found)`);
      return;
    }

    const route = resultJson.routes[0];
    const distanceMeters = route.distanceMeters;
    if (typeof distanceMeters !== "number" || isNaN(distanceMeters)) {
      failedTrials.push(`${trial.destination.name} (Invalid Distance)`);
      return;
    }

    const totalDistance = Math.round((distanceMeters / 1000) * 100) / 100;
    const orderedWaypoints = [trial.origin];
    const intermediates = trial.intermediates;

    if (
      intermediates.length > 1 &&
      Array.isArray(route.optimizedIntermediateWaypointIndex)
    ) {
      const indices = route.optimizedIntermediateWaypointIndex;
      if (isValidPermutation(indices, intermediates.length)) {
        indices.forEach((idx) => orderedWaypoints.push(intermediates[idx]));
      } else {
        Logger.log(
          `⚠️ Waypoint index ผิดปกติสำหรับ Candidate: ${trial.destination.name} -> กลับไปใช้ลำดับเดิม`
        );
        orderedWaypoints.push(...intermediates);
      }
    } else {
      orderedWaypoints.push(...intermediates);
    }
    orderedWaypoints.push(trial.destination);

    const googleMapsLink = createGoogleMapsUrl(orderedWaypoints);
    validResults.push({
      orderedWaypoints: orderedWaypoints,
      totalDistance: totalDistance,
      googleMapsLink: googleMapsLink,
      winningCandidateId: trial.destination.id,
      candidateName: trial.destination.name
    });
  });

  if (validResults.length === 0) {
    throw new Error(
      "[API Error] การทดสอบ Candidate ทุกเส้นทางล้มเหลว ไม่สามารถคำนวณเส้นทางได้"
    );
  }

  validResults.sort((a, b) => a.totalDistance - b.totalDistance);

  const warnings = [];
  if (failedTrials.length > 0) {
    warnings.push(
      `มี ${failedTrials.length} Candidates ที่คำนวณไม่สำเร็จ: ${failedTrials.join(", ")}`
    );
    Logger.log(`⚠️ Warning: ${warnings[0]}`);
  }

  return {
    winner: validResults[0],
    runnerUps: validResults.slice(1),
    warnings: warnings
  };
}

function isValidPermutation(indices, expectedLength) {
  if (!Array.isArray(indices) || indices.length !== expectedLength) return false;
  const seen = new Set();
  for (let i = 0; i < indices.length; i++) {
    const val = indices[i];
    if (
      typeof val !== "number" ||
      val < 0 ||
      val >= expectedLength ||
      seen.has(val)
    ) {
      return false;
    }
    seen.add(val);
  }
  return true;
}

function callRoutesApiSingleWithBackoff(payload, apiKey, maxRetries) {
  const retries = maxRetries || 3;
  const apiUrl = "https://routes.googleapis.com/directions/v2:computeRoutes";
  const options = {
    method: "post",
    contentType: "application/json",
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "routes.distanceMeters,routes.optimizedIntermediateWaypointIndex"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const code = response.getResponseCode();

    if (code === 200) {
      return JSON.parse(response.getContentText());
    }
    if (code !== 429 && code < 500) {
      throw new Error(
        `API Rejected [HTTP ${code}]: ${response.getContentText()}`
      );
    }
    if (attempt < retries) {
      const delayMs =
        Math.pow(2, attempt) * 1000 + Math.floor(Math.random() * 500);
      Logger.log(
        `⚠️ [Backoff Retry] ติดขัด HTTP ${code} -> รอ ${delayMs}ms ก่อนลองใหม่ (ครั้งที่ ${attempt}/${retries})`
      );
      Utilities.sleep(delayMs);
    } else {
      throw new Error(`API Failed after ${retries} attempts [HTTP ${code}]`);
    }
  }
}

function createGoogleMapsUrl(orderedWaypoints) {
  const linkCoordinates = orderedWaypoints.map(
    (p) => `${p.original.lat.toFixed(6)},${p.original.lng.toFixed(6)}`
  );
  return `https://www.google.com/maps/dir/${linkCoordinates.join("/")}`;
}

/** มาตรฐานแสดงผลพิกัดในชีตผลลัพธ์: ทศนิยม 6 ตำแหน่ง */
function formatCoord6(point) {
  return `${point.original.lat.toFixed(6)}, ${point.original.lng.toFixed(6)}`;
}

// =================================================================
// [ 4 ] WRITE RESULTS
// =================================================================
function writeResultsToSheetBatchSafely(resultSheet, rowId, winner, runnerUps) {
  const lastCol = resultSheet.getLastColumn();
  const lastRow = resultSheet.getLastRow();
  if (lastRow < 2) {
    throw new Error("[Data Error] แผ่นงานผลลัพธ์ไม่มีแถวข้อมูล");
  }

  const header = resultSheet.getRange(1, 1, 1, lastCol).getValues()[0];

  const idIndex = header.indexOf(CONFIG.COLUMNS.ID_RESULT_NAME);
  const mainResultColIndex = header.indexOf(CONFIG.COLUMNS.RESULT_NAME);
  const distanceColIndex = header.indexOf(CONFIG.COLUMNS.DISTANCE_NAME);
  const linkColIndex = header.indexOf(CONFIG.COLUMNS.LINK_NAME);
  const c2DistIdx = header.indexOf(CONFIG.COLUMNS.CANDIDATE_2_DIST);

  if (idIndex === -1) {
    throw new Error(
      `[Schema Error] ไม่พบคอลัมน์ '${CONFIG.COLUMNS.ID_RESULT_NAME}' ในแผ่นงานผลลัพธ์`
    );
  }

  // Type-safe row find
  const idData = resultSheet.getRange(2, idIndex + 1, lastRow - 1, 1).getValues();
  const targetRowId = String(rowId).trim();
  let rowIndexInSheet = -1;
  for (let i = 0; i < idData.length; i++) {
    if (String(idData[i][0]).trim() === targetRowId) {
      rowIndexInSheet = i + 2;
      break;
    }
  }
  if (rowIndexInSheet === -1) {
    throw new Error(`[Data Error] ไม่พบแถวที่มี ID: ${rowId}`);
  }

  // 1) ผลหลัก
  const resultString = winner.orderedWaypoints.map(formatCoord6).join(" | ");
  if (mainResultColIndex !== -1) {
    resultSheet
      .getRange(rowIndexInSheet, mainResultColIndex + 1)
      .setValue(resultString);
  }
  if (distanceColIndex !== -1) {
    resultSheet
      .getRange(rowIndexInSheet, distanceColIndex + 1)
      .setValue(winner.totalDistance);
  }
  if (linkColIndex !== -1) {
    resultSheet
      .getRange(rowIndexInSheet, linkColIndex + 1)
      .setValue(winner.googleMapsLink);
  }

  // 2) Lat/Long_ปลายทาง_01..20 มาตรฐาน 6 ตำแหน่ง
  const customersOnly = winner.orderedWaypoints.slice(1);
  const firstDestColIndex = header.indexOf("Lat/Long_ปลายทาง_01");
  if (firstDestColIndex !== -1) {
    const valuesToWrite = new Array(CONFIG.MAX_WAYPOINTS_DETAIL_COLS).fill("");
    for (let i = 0; i < CONFIG.MAX_WAYPOINTS_DETAIL_COLS; i++) {
      const point = customersOnly[i];
      if (point) valuesToWrite[i] = formatCoord6(point);
    }
    resultSheet
      .getRange(
        rowIndexInSheet,
        firstDestColIndex + 1,
        1,
        CONFIG.MAX_WAYPOINTS_DETAIL_COLS
      )
      .setValues([valuesToWrite]);
  }

  // 3) Candidate 2/3 (ต้องเรียง 4 คอลัมน์ติดกัน)
  if (c2DistIdx !== -1) {
    const backupValues = [
      runnerUps[0] ? runnerUps[0].totalDistance : "",
      runnerUps[0] ? runnerUps[0].googleMapsLink : "",
      runnerUps[1] ? runnerUps[1].totalDistance : "",
      runnerUps[1] ? runnerUps[1].googleMapsLink : ""
    ];
    resultSheet
      .getRange(rowIndexInSheet, c2DistIdx + 1, 1, 4)
      .setValues([backupValues]);
  }

  SpreadsheetApp.flush();
  Logger.log(
    `💾 [Safe Write Success] แถว ${rowIndexInSheet} | มาตรฐาน 6 ตำแหน่ง | ไม่แตะคอลัมน์อื่น`
  );
}
