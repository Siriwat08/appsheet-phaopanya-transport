# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# S5. Slice_Monitor_Today

*Source page: p.1717*

| Property | Value |
|---|---|
| Slice Name | Slice_Monitor_Today |
| Source Table | ตารางงานประจำวัน |
| Update mode | ALL_CHANGES |
| Row filter condition | น้ำหนักสินค้ารวมของร้านนี้ จำนวน_Invoice_ที่ต้องสแกน LatLong_Actual ชื่อเจ้าของสินค้า_Invoice_ที่ต้องสแกน ShopKey Related ScanDocs MATCH_KEY MD_ID LatLong_Actual_Status =[ID_งานประจำวัน] = LOOKUP( MIN( SELECT( ตารางงานประจำ วัน[_ROWNUMBER], AND( [Shipment No] = [_THISROW].[Shipment No], [Invoice No] = [_THISROW].[Invoice No] ) ) ), ตารางงานประจำวัน, "_ROWNUMBER", "ID_งานประจำวัน" ) |
| Slice Columns | _RowNumber ScanStatus Invoice No DeliveryNo ชื่อเจ้าของสินค้า Plan Delivery ชื่อปลายทาง Shipment No ชื่อ - นามสกุล ทะเบียนรถ รหัสลูกค้า ที่อยู่ปลายทาง จำนวนสินค้า จำนวนปลายทาง จำนวนจุดที่ส่งจริง ที่อยู่ปลายทาง_LatLong ชื่อวัสดุ หน่วย ItemWeight ลำดับแรก ID_งานประจำวัน รหัสผู้รับเหมา ชื่อผู้รับเหมา Related แจ้งปัญหาระหว่างวันs DeliveryStatus Related SCGนครหลวงJWDภูมิภาคs Email พนักงาน จำนวนสินค้ารวมของร้านนี้ |
| Slice Actions | **auto** |
| Visible? | ALWAYS |

