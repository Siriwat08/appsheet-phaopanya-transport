# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# S8. SM_Today_User 2

*Source page: p.1720*

| Property | Value |
|---|---|
| Slice Name | SM_Today_User 2 |
| Source Table | ตารางงานประจำวัน |
| Update mode | ADDS_AND_UPDATES |
| Row filter condition | ชื่อ - นามสกุล ทะเบียนรถ รหัสผู้รับเหมา ชื่อผู้รับเหมา รหัสลูกค้า ชื่อเจ้าของสินค้า ชื่อปลายทาง ที่อยู่ปลายทาง ที่อยู่ปลายทาง_LatLong ชื่อวัสดุ จำนวนสินค้า หน่วย ItemWeight DeliveryNo จำนวนปลายทาง_System ลำดับแรก จำนวนจุดที่ส่งจริง Related แจ้งปัญหาระหว่างวันs รายชื่อปลายทาง_System ScanStatus จำนวนปลายทาง DeliveryStatus เดือน Related SCGนครหลวงJWDภูมิภาคs Email พนักงาน จำนวนสินค้ารวมของร้านนี้ น้ำหนักสินค้ารวมของร้านนี้ จำนวน_Invoice_ที่ต้องสแกน LatLong_Actual ชื่อเจ้าของสินค้า_Invoice_ที่ต้องสแกน ShopKey Related ScanDocs MATCH_KEY MD_ID LatLong_Actual_Status =IF(USERROLE() = "ADMIN",true, AND( [Plan Delivery] = TODAY(), [Email พนักงาน] = USEREMAIL() ) ) |
| Slice Columns | _RowNumber ID_งานประจำวัน Plan Delivery Invoice No Shipment No |
| Slice Actions | **auto** |
| Visible? | ALWAYS |

