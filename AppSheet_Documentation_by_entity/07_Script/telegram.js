/**
 * =========================================================================
 * TELEGRAM NOTIFICATION (APPSHEET PRODUCTION MASTER)
 * =========================================================================
 * ทำงานร่วมกับไฟล์ env.gs (ENV.TOKEN, ENV.CHAT_IDS)
 * 
 * ✔ 1-Photo Bug Fixed: มี 1 รูปใช้ sendPhoto / มี 2-10 รูปใช้ sendMediaGroup
 * ✔ HTML Parse Guard: มีฟังก์ชัน escapeHtml() ป้องกันแครชจากเครื่องหมาย <, >, &
 * ✔ Caption Length Guard: ป้องกันข้อความใต้รูปภาพเกินโควตา 1,024 ตัวอักษร
 * ✔ Multi-ID Deduplication: ป้องกันส่งซ้ำด้วย CacheService ราย ID แยกอิสระ (10 นาที)
 * ✔ Flexible Photo Input: รองรับทั้ง String คั่นจุลภาค และ Array จาก AppSheet
 * =========================================================================
 */
// === [ 1 ] HELPER FUNCTIONS ===
// ป้องกัน Telegram พังจากอักขระพิเศษในข้อความ
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
// ยิงคำขอไปที่ Telegram API
function sendTelegramRequest(method, payload) {
  try {
    const url = "https://api.telegram.org/bot" + ENV.TOKEN + "/" + method;
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    if (!result.ok) {
      Logger.log("⚠️ Telegram API Error [" + method + "]: " + result.description);
    }
    return result;
  } catch (error) {
    Logger.log("❌ Network Error [" + method + "]: " + error.message);
    return null;
  }
}
// ส่งข้อความตัวอักษรล้วน (รองรับได้สูงสุด 4,096 ตัวอักษร)
function sendTelegramNotification(message) {
  ENV.CHAT_IDS.forEach(chat_id => {
    sendTelegramRequest("sendMessage", { 
      chat_id: chat_id, 
      text: message, 
      parse_mode: "HTML" 
    });
  });
}
// ส่งรูปภาพเดี่ยว 1 รูป (Telegram กำหนด Caption สูงสุด 1,024 ตัวอักษร)
function sendTelegramSinglePhoto(photoUrl, caption) {
  const safeCaption = caption && caption.length > 1024 
    ? caption.substring(0, 1020) + "..." 
    : (caption || "");
  ENV.CHAT_IDS.forEach(chat_id => {
    sendTelegramRequest("sendPhoto", {
      chat_id: chat_id,
      photo: photoUrl,
      caption: safeCaption,
      parse_mode: "HTML"
    });
  });
}
// ส่งรูปภาพเป็นอัลบั้ม (Telegram บังคับต้องมี 2 - 10 รูปเท่านั้น)
function sendTelegramPhotosGroup(photos, caption) {
  const safeCaption = caption && caption.length > 1024 
    ? caption.substring(0, 1020) + "..." 
    : (caption || "");
  ENV.CHAT_IDS.forEach(chat_id => {
    const media = photos.slice(0, 10).map((url, index) => ({
      type: "photo",
      media: url,
      caption: index === 0 ? safeCaption : "",
      parse_mode: "HTML" // จำเป็นต้องใส่ เพื่อให้ Caption รองรับ HTML
    }));
    sendTelegramRequest("sendMediaGroup", {
      chat_id: chat_id,
      media: media
    });
  });
}
// === [ 2 ] MAIN FUNCTION FOR APPSHEET ===
/**
 * @param {string|number} id - [ID_แจ้งปัญหาระหว่างวัน]
 * @param {string} caption - ข้อความที่ต้องการส่ง
 * @param {string|Array} photoUrls - [LINK_Image_แจ้งปัญหา] (คอลัมน์ลำดับที่ 29)
 */
function sendTelegramFromAppSheet(id, caption, photoUrls) {
  if (!id) {
    Logger.log("⚠️ ข้ามการทำงาน: ไม่มี ID ส่งเข้ามา");
    return;
  }
  // 1. ป้องกันการส่งซ้ำด้วย CacheService แยกราย ID (อายุ 10 นาที)
  const cache = CacheService.getScriptCache();
  const cacheKey = "TG_NOTI_SENT_" + String(id).trim();
  if (cache.get(cacheKey)) {
    Logger.log("⏭️ Skip Duplicate: ID " + id + " เพิ่งถูกส่งไปแล้วภายใน 10 นาที");
    return;
  }
  // 2. แปลงรายการรูปภาพให้เป็น Array (รองรับทั้ง Array และ String คั่นด้วยจุลภาค)
  let imagesArray = [];
  if (Array.isArray(photoUrls)) {
    imagesArray = photoUrls.map(u => String(u).trim()).filter(u => u !== "");
  } else if (typeof photoUrls === "string" && photoUrls.trim() !== "") {
    imagesArray = photoUrls.split(",").map(u => u.trim()).filter(u => u !== "");
  }
  // 3. ปรับแต่งข้อความให้ปลอดภัยจากอักขระพิเศษ HTML (<, >, &)
  const safeCaption = caption ? escapeHtml(caption) : "";
  // 4. เลือกวิธีการส่งให้ตรงตามข้อกำหนดของ Telegram อย่างแม่นยำ
  if (imagesArray.length === 0) {
    // ไม่มีรูป -> ส่งข้อความล้วน
    if (safeCaption) sendTelegramNotification(safeCaption);
  } else if (imagesArray.length === 1) {
    // 🚨 แก้บั๊กวิกฤต: มีรูปเดียว -> ส่งด้วย sendPhoto (ห้ามใช้ sendMediaGroup)
    sendTelegramSinglePhoto(imagesArray[0], safeCaption);
  } else {
    // มี 2 ถึง 10 รูป -> ส่งเป็นอัลบั้มด้วย sendMediaGroup
    sendTelegramPhotosGroup(imagesArray, safeCaption);
  }
  // 5. บันทึกจำ ID ลง Cache เป็นเวลา 10 นาที (600 วินาที)
  cache.put(cacheKey, "SUCCESS", 600);
  Logger.log("✅ ส่งแจ้งเตือนสำเร็จสำหรับ ID: " + id + " (รูปภาพ: " + imagesArray.length + " รูป)");
}
