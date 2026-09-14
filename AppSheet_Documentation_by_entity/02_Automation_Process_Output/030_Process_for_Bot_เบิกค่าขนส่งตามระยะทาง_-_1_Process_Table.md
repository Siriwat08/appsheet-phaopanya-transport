# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 87. Process for Bot_เบิกค่าขนส่งตามระยะทาง - 1 Process Table

*Category: **Process Table** · Source pages: table properties p.46, columns p.1427–1522 · **135 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Process for Bot_เบิกค่าขนส่งตามระยะทาง - 1 Process Table |
| Visible? | NEVER |
| Shared? | Yes |
| Are updates allowed? | READ_ONLY /ProcessStateTables/70999aca-5a1f-4dfc-907b- |
| Source Path | 417bc046f574/5465f1e5-0de2-4ca2-9fb5-0dbb5c7d0fa7/State |
| Data Source | Table native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Process for Bot_เบิกค่าขนส่งตามระยะทาง - 1 Process Table_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Process for Bot_เบิกค่าขนส่งตามระยะทาง - 1 Process Table_Schema |
| Visible? | NEVER |

### Columns (135)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | Instance Id | Text | Yes | No | No |
| 2 | ID_ทำเบิกส่วนต่างScgวังน้อย | Text | No | No | No |
| 3 | ID_SCGนครหลวงJWDภูมิภาค | Ref | No | No | No |
| 4 | Shipment No | Number | No | No | No |
| 5 | วันที่ส่งสินค้า | Date | No | No | No |
| 6 | ชื่อ - นามสกุล | Text | No | No | No |
| 7 | ต้นทาง | LatLong | No | No | No |
| 8 | GoogleMapsRoutesAPI | LongText | No | No | No |
| 9 | แสดงแผนที่_GoogleMapsRoutesAPI | Url | No | No | No |
| 10 | ระยะทาง_GoogleMapAPI_Km | Decimal | No | No | No |
| 11 | Email พนักงาน | Email | No | No | No |
| 12 | Lat/Long_ปลายทาง_01 | Text | No | No | No |
| 13 | Lat/Long_ปลายทาง_02 | Text | No | No | No |
| 14 | Lat/Long_ปลายทาง_03 | Text | No | No | No |
| 15 | Lat/Long_ปลายทาง_04 | Text | No | No | No |
| 16 | Lat/Long_ปลายทาง_05 | Text | No | No | No |
| 17 | Lat/Long_ปลายทาง_06 | Text | No | No | No |
| 18 | Lat/Long_ปลายทาง_07 | Text | No | No | No |
| 19 | Lat/Long_ปลายทาง_08 | Text | No | No | No |
| 20 | Lat/Long_ปลายทาง_09 | Text | No | No | No |
| 21 | Lat/Long_ปลายทาง_10 | Text | No | No | No |
| 22 | Lat/Long_ปลายทาง_11 | Text | No | No | No |
| 23 | Lat/Long_ปลายทาง_12 | Text | No | No | No |
| 24 | Lat/Long_ปลายทาง_13 | Text | No | No | No |
| 25 | Lat/Long_ปลายทาง_14 | Text | No | No | No |
| 26 | Lat/Long_ปลายทาง_15 | Text | No | No | No |
| 27 | Lat/Long_ปลายทาง_16 | Text | No | No | No |
| 28 | Lat/Long_ปลายทาง_17 | Text | No | No | No |
| 29 | Lat/Long_ปลายทาง_18 | Text | No | No | No |
| 30 | Lat/Long_ปลายทาง_19 | Text | No | No | No |
| 31 | Lat/Long_ปลายทาง_20 | Text | No | No | No |
| 32 | ชื่องาน | Text | No | No | No |
| 33 | จำนวนจุดส่งก่อนเริ่มงาน | Number | No | No | No |
| 34 | จำนวนจุดส่งงานจริง | Number | No | No | No |
| 35 | ตรวจสอบข้อมูล | Number | No | No | No |
| 36 | ราคาในระบบก่อนส่งสินค้า | Decimal | No | No | No |
| 37 | ระยะทางในระบบก่อนส่งสินค้า | Decimal | No | No | No |
| 38 | สร้างPDFเบิกส่วนต่าง | Yes/No | No | No | No |
| 39 | สถานะ | Enum | No | No | No |
| 40 | เดือน | Text | No | No | No |
| 41 | ID_พนักงาน | Ref | No | No | No |
| 42 | สร้างPDFเบิกตามระยะทาง | Yes/No | No | No | No |
| 43 | เรทน้ำมันดีเซล | Decimal | No | No | No |
| 44 | ราคาตามระยะทาง | Decimal | No | No | No |
| 45 | ราคาจุดเพิ่ม | Decimal | No | No | No |
| 46 | ทะเบียนรถ | Text | No | No | No |
| 47 | 01เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 48 | รูปบิลส่งสินค้า_01 | Image | No | No | No |
| 49 | รูปหน้าร้าน_บ้าน01 | Image | No | No | No |
| 50 | รูปส่งสินค้า01 | Image | No | No | No |
| 51 | 02เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 52 | รูปบิลส่งสินค้า_02 | Image | No | No | No |
| 53 | รูปหน้าร้าน_บ้าน02 | Image | No | No | No |
| 54 | รูปส่งสินค้า02 | Image | No | No | No |
| 55 | 03เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 56 | รูปบิลส่งสินค้า_03 | Image | No | No | No |
| 57 | รูปหน้าร้าน_บ้าน03 | Image | No | No | No |
| 58 | รูปส่งสินค้า03 | Image | No | No | No |
| 59 | 04เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 60 | รูปบิลส่งสินค้า_04 | Image | No | No | No |
| 61 | รูปหน้าร้าน_บ้าน04 | Image | No | No | No |
| 62 | รูปส่งสินค้า04 | Image | No | No | No |
| 63 | 05เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 64 | รูปบิลส่งสินค้า_05 | Image | No | No | No |
| 65 | รูปหน้าร้าน_บ้าน05 | Image | No | No | No |
| 66 | รูปส่งสินค้า05 | Image | No | No | No |
| 67 | 06เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 68 | รูปบิลส่งสินค้า_06 | Image | No | No | No |
| 69 | รูปหน้าร้าน_บ้าน06 | Image | No | No | No |
| 70 | รูปส่งสินค้า06 | Image | No | No | No |
| 71 | 07เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 72 | รูปบิลส่งสินค้า_07 | Image | No | No | No |
| 73 | รูปหน้าร้าน_บ้าน07 | Image | No | No | No |
| 74 | รูปส่งสินค้า07 | Image | No | No | No |
| 75 | 08เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 76 | รูปบิลส่งสินค้า_08 | Image | No | No | No |
| 77 | รูปหน้าร้าน_บ้าน08 | Image | No | No | No |
| 78 | รูปส่งสินค้า08 | Image | No | No | No |
| 79 | 09เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 80 | รูปบิลส่งสินค้า_09 | Image | No | No | No |
| 81 | รูปหน้าร้าน_บ้าน09 | Image | No | No | No |
| 82 | รูปส่งสินค้า09 | Image | No | No | No |
| 83 | 10เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 84 | รูปบิลส่งสินค้า_10 | Image | No | No | No |
| 85 | รูปหน้าร้าน_บ้าน10 | Image | No | No | No |
| 86 | รูปส่งสินค้า10 | Image | No | No | No |
| 87 | 11เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 88 | รูปบิลส่งสินค้า_11 | Image | No | No | No |
| 89 | รูปหน้าร้าน_บ้าน11 | Image | No | No | No |
| 90 | รูปส่งสินค้า11 | Image | No | No | No |
| 91 | 12เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 92 | รูปบิลส่งสินค้า_12 | Image | No | No | No |
| 93 | รูปหน้าร้าน_บ้าน12 | Image | No | No | No |
| 94 | รูปส่งสินค้า12 | Image | No | No | No |
| 95 | 13เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 96 | รูปบิลส่งสินค้า_13 | Image | No | No | No |
| 97 | รูปหน้าร้าน_บ้าน13 | Image | No | No | No |
| 98 | รูปส่งสินค้า13 | Image | No | No | No |
| 99 | 14เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 100 | รูปบิลส่งสินค้า_14 | Image | No | No | No |
| 101 | รูปหน้าร้าน_บ้าน14 | Image | No | No | No |
| 102 | รูปส่งสินค้า14 | Image | No | No | No |
| 103 | 15เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 104 | รูปบิลส่งสินค้า_15 | Image | No | No | No |
| 105 | รูปหน้าร้าน_บ้าน15 | Image | No | No | No |
| 106 | รูปส่งสินค้า15 | Image | No | No | No |
| 107 | 16เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 108 | รูปบิลส่งสินค้า_16 | Image | No | No | No |
| 109 | รูปหน้าร้าน_บ้าน16 | Image | No | No | No |
| 110 | รูปส่งสินค้า16 | Image | No | No | No |
| 111 | 17เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 112 | รูปบิลส่งสินค้า_17 | Image | No | No | No |
| 113 | รูปหน้าร้าน_บ้าน17 | Image | No | No | No |
| 114 | รูปส่งสินค้า17 | Image | No | No | No |
| 115 | 18เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 116 | รูปบิลส่งสินค้า_18 | Image | No | No | No |
| 117 | รูปหน้าร้าน_บ้าน18 | Image | No | No | No |
| 118 | รูปส่งสินค้า18 | Image | No | No | No |
| 119 | 19เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 120 | รูปบิลส่งสินค้า_19 | Image | No | No | No |
| 121 | รูปหน้าร้าน_บ้าน19 | Image | No | No | No |
| 122 | รูปส่งสินค้า19 | Image | No | No | No |
| 123 | 20เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No | LongText | No | No | No |
| 124 | รูปบิลส่งสินค้า_20 | Image | No | No | No |
| 125 | รูปหน้าร้าน_บ้าน20 | Image | No | No | No |
| 126 | รูปส่งสินค้า20 | Image | No | No | No |
| 127 | ราคาที่สมควรได้ | Decimal | No | No | No |
| 128 | ราคาหลังส่งสินค้า | Decimal | No | No | No |
| 129 | ขออนุมัติเบิกค่าขนส่งส่วนเพิ่ม | Decimal | No | No | No |
| 130 | QR code เส้นทางรวม | Image | No | No | No |
| 131 | จุดส่งงานลำดับสุดท้าย | LongText | No | No | No |
| 132 | ชื่อปลายทาง_INV_จุดสุดท้าย | LongText | No | No | No |
| 133 | เบิกตามระยะทาง | Ref | No | No | No |
| 134 | New step4 | Ref | No | No | No |
| 135 | New step3 | Ref | No | No | No |

#### Column 1: Instance Id

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Instance Id |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | Yes |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 2: ID_ทำเบิกส่วนต่างScgวังน้อย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_ทำเบิกส่วนต่างScgวังน้อย |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 3: ID_SCGนครหลวงJWDภูมิภาค

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_SCGนครหลวงJWDภูมิภาค |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 656 chars, click to expand)</summary>

```json
{"ReferencedTableName":"SCGนครหลวงJWDภูมิภาค","ReferencedRootTableName":"SCGนครหลวงJWDภูมิภาค","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_SCGนครหลวงJWDภูมิภาค","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: Shipment No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Shipment No |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 750 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(USERROLE() = \"ADMIN\",\n SORT(\nUNIQUE(\n LIST([_THIS]) + \n SELECT(\nSCGนครหลวงJWDภูมิภาค[Shipment No],\n AND(\n [วันที่ส่งสินค้า]>= EOMONTH(TODAY(), -2) + 1,\n NOT(IN([Shipment No], ทำเบิกส่วนต่างScgวังน้อย[Shipment No]))\n )\n )\n )\n ),\n SORT(\nUNIQUE(\n LIST([_THIS]) + \n SELECT(\nSCGนครหลวงJWDภูมิภาค[Shipment No],\n AND(\n [Emailพนักงาน] = USEREMAIL(),\n [วันที่ส่งสินค้า] >= TODAY() - 1,\nNOT(IN([Shipment No], ทำเบิกส่วนต่างScgวังน้อย[ShipmentNo]))\n )\n )\n )\n)\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 5: วันที่ส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่ส่งสินค้า |
| Type | Date |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 250 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":"=[ตรวจสอบข้อมูล]=1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 6: ชื่อ - นามสกุล

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อ - นามสกุล |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 316 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=[ตรวจสอบข้อมูล]=1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: ต้นทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ต้นทาง |
| Type | LatLong |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 200 chars, click to expand)</summary>

```json
{"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: GoogleMapsRoutesAPI

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | GoogleMapsRoutesAPI |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: แสดงแผนที่_GoogleMapsRoutesAPI

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | แสดงแผนที่_GoogleMapsRoutesAPI |
| Type | Url |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"LaunchExternal":false,"IsHyperLink":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: ระยะทาง_GoogleMapAPI_Km

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ระยะทาง_GoogleMapAPI_Km |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 288 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: Email พนักงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Email พนักงาน |
| Type | Email |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 252 chars, click to expand)</summary>

```json
{"Valid_If":"=IF(\n\n USERROLE() = \"ADMIN\",\n\n ข้อมูลพนักงาน[Email พนักงาน],\n\nLIST(USEREMAIL())\n\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: Lat/Long_ปลายทาง_01

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_01 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 329 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n [ShipmentNo] = [_THISROW].[ShipmentNo]\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 13: Lat/Long_ปลายทาง_02

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_02 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 469 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_01])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 14: Lat/Long_ปลายทาง_03

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_03 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 517 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] \n ),\" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_02])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 15: Lat/Long_ปลายทาง_04

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_04 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 564 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_03])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 16: Lat/Long_ปลายทาง_05

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_05 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 611 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_04])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 17: Lat/Long_ปลายทาง_06

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_06 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 659 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_05])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 18: Lat/Long_ปลายทาง_07

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_07 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 708 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_06])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 19: Lat/Long_ปลายทาง_08

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_08 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 755 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_07])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 20: Lat/Long_ปลายทาง_09

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_09 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 803 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_08])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 21: Lat/Long_ปลายทาง_10

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_10 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 852 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_09])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 22: Lat/Long_ปลายทาง_11

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_11 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 899 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_10])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 23: Lat/Long_ปลายทาง_12

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_12 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 947 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_11])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 24: Lat/Long_ปลายทาง_13

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_13 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 996 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_12])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 25: Lat/Long_ปลายทาง_14

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_14 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,044 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_13])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 26: Lat/Long_ปลายทาง_15

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_15 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,092 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_14])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 27: Lat/Long_ปลายทาง_16

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_16 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,139 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_15]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_15])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 28: Lat/Long_ปลายทาง_17

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_17 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,188 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_15] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_16] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_16])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 29: Lat/Long_ปลายทาง_18

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_18 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,236 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_15] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_16] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_17] \n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_17])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 30: Lat/Long_ปลายทาง_19

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_19 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,283 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_15] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_16] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_17] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_18]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_18])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 31: Lat/Long_ปลายทาง_20

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long_ปลายทาง_20 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 1,331 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\nSCGนครหลวงJWDภูมิภาค[จุดส่งสินค้าปลายทาง], \n AND(\n[Shipment No] = [_THISROW].[Shipment No], \n NOT(IN([จุดส่งสินค้าปลายทาง], SPLIT(TEXT(\n [_THISROW].[Lat/Long_ปลายทาง_01] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_02] & \" ,\" & \n [_THISROW].[Lat/Long_ปลายทาง_03] & \" , \" & \n[_THISROW].[Lat/Long_ปลายทาง_04] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_05] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_06] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_07] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_08] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_09] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_10] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_11] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_12] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_13] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_14] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_15] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_16] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_17] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_18] & \" , \" & \n [_THISROW].[Lat/Long_ปลายทาง_19]\n ), \" , \"))\n)\n))","Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Lat/Long_ปลายทาง_19])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 32: ชื่องาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่องาน |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 317 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=[ตรวจสอบข้อมูล] =1","Error_Message_If_Invalid":"=\"Shipment นี้มีจุดส่งที่ไม่ผ่านการตรวจสอบ กรุณาติดต่อผู้ดูแลระบบ\"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 33: จำนวนจุดส่งก่อนเริ่มงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวนจุดส่งก่อนเริ่มงาน |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 34: จำนวนจุดส่งงานจริง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวนจุดส่งงานจริง |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 270 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 35: ตรวจสอบข้อมูล

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ตรวจสอบข้อมูล |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 265 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":"","Error_Message_If_Invalid":"","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 36: ราคาในระบบก่อนส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคาในระบบก่อนส่งสินค้า |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 37: ระยะทางในระบบก่อนส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ระยะทางในระบบก่อนส่งสินค้า |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 288 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 38: สร้างPDFเบิกส่วนต่าง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สร้างPDFเบิกส่วนต่าง |
| Type | Yes/No |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 188 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 39: สถานะ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สถานะ |
| Type | Enum |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 603 chars, click to expand)</summary>

```json
{"EnumValues":["รอตรวจสอบ","ผ่านการตรวจสอบ","ไม่ผ่านการตรวจสอบ"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 40: เดือน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เดือน |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 41: ID_พนักงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_พนักงาน |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 669 chars, click to expand)</summary>

```json
{"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE() =\"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 42: สร้างPDFเบิกตามระยะทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สร้างPDFเบิกตามระยะทาง |
| Type | Yes/No |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 169 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 43: เรทน้ำมันดีเซล

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เรท น้ำมันดีเซล |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 44: ราคาตามระยะทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคาตามระยะทาง |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 45: ราคาจุดเพิ่ม

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคาจุดเพิ่ม |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 46: ทะเบียนรถ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ทะเบียนรถ |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 47: 01เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 01เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 48: รูปบิลส่งสินค้า_01

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_01 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 49: รูปหน้าร้าน_บ้าน01

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน01 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 50: รูปส่งสินค้า01

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า01 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 51: 02เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 02เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 52: รูปบิลส่งสินค้า_02

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_02 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 53: รูปหน้าร้าน_บ้าน02

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน02 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 54: รูปส่งสินค้า02

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า02 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 55: 03เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 03เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 56: รูปบิลส่งสินค้า_03

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_03 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 57: รูปหน้าร้าน_บ้าน03

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน03 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 58: รูปส่งสินค้า03

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า03 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 59: 04เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 04เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 60: รูปบิลส่งสินค้า_04

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_04 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 61: รูปหน้าร้าน_บ้าน04

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน04 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 62: รูปส่งสินค้า04

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า04 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 63: 05เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 05เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 64: รูปบิลส่งสินค้า_05

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_05 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 65: รูปหน้าร้าน_บ้าน05

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน05 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 66: รูปส่งสินค้า05

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า05 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 67: 06เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 06เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 68: รูปบิลส่งสินค้า_06

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_06 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 69: รูปหน้าร้าน_บ้าน06

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน06 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 70: รูปส่งสินค้า06

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า06 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 71: 07เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 07เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 72: รูปบิลส่งสินค้า_07

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_07 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 73: รูปหน้าร้าน_บ้าน07

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน07 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 74: รูปส่งสินค้า07

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า07 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 75: 08เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 08เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 76: รูปบิลส่งสินค้า_08

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_08 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 77: รูปหน้าร้าน_บ้าน08

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน08 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 78: รูปส่งสินค้า08

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า08 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 79: 09เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 09เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 80: รูปบิลส่งสินค้า_09

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_09 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 81: รูปหน้าร้าน_บ้าน09

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน09 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 82: รูปส่งสินค้า09

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า09 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 83: 10เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 10เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 84: รูปบิลส่งสินค้า_10

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_10 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 85: รูปหน้าร้าน_บ้าน10

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน10 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 86: รูปส่งสินค้า10

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า10 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 87: 11เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 11เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 88: รูปบิลส่งสินค้า_11

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_11 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 89: รูปหน้าร้าน_บ้าน11

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน11 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 90: รูปส่งสินค้า11

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า11 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 91: 12เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 12เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 92: รูปบิลส่งสินค้า_12

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_12 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 93: รูปหน้าร้าน_บ้าน12

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน12 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 94: รูปส่งสินค้า12

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า12 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 95: 13เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 13เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 96: รูปบิลส่งสินค้า_13

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_13 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 97: รูปหน้าร้าน_บ้าน13

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน13 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 98: รูปส่งสินค้า13

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า13 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 99: 14เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 14เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 100: รูปบิลส่งสินค้า_14

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_14 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 101: รูปหน้าร้าน_บ้าน14

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน14 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 102: รูปส่งสินค้า14

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า14 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 103: 15เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 15เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 104: รูปบิลส่งสินค้า_15

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_15 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 105: รูปหน้าร้าน_บ้าน15

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน15 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 106: รูปส่งสินค้า15

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า15 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 107: 16เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 16เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 108: รูปบิลส่งสินค้า_16

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_16 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 109: รูปหน้าร้าน_บ้าน16

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน16 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 110: รูปส่งสินค้า16

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า16 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 111: 17เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 17เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 112: รูปบิลส่งสินค้า_17

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_17 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 113: รูปหน้าร้าน_บ้าน17

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน17 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 114: รูปส่งสินค้า17

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า17 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 115: 18เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 18เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 116: รูปบิลส่งสินค้า_18

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_18 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 117: รูปหน้าร้าน_บ้าน18

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน18 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 118: รูปส่งสินค้า18

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า18 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 119: 19เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 19เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 120: รูปบิลส่งสินค้า_19

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_19 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 121: รูปหน้าร้าน_บ้าน19

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน19 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 122: รูปส่งสินค้า19

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า19 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 123: 20เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | 20เจ้าของสินค้า // ชื่อปลายทาง // Lat_Long // Inv No |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 124: รูปบิลส่งสินค้า_20

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลส่งสินค้า_20 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 125: รูปหน้าร้าน_บ้าน20

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน_บ้าน20 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 126: รูปส่งสินค้า20

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปส่งสินค้า20 |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 127: ราคาที่สมควรได้

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคาที่สมควรได้ |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 128: ราคาหลังส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคาหลังส่งสินค้า |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 129: ขออนุมัติเบิกค่าขนส่งส่วนเพิ่ม

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ขออนุมัติเบิกค่าขนส่งส่วนเพิ่ม |
| Type | Decimal |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 287 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 130: QR code เส้นทางรวม

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | QR code เส้นทางรวม |
| Type | Image |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 185 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 131: จุดส่งงานลำดับสุดท้าย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จุดส่งงานลำดับสุดท้าย |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 132: ชื่อปลายทาง_INV_จุดสุดท้าย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อปลายทาง_INV_จุดสุดท้าย |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 133: เบิกตามระยะทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เบิกตามระยะทาง |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 625 chars, click to expand)</summary>

```json
{"ReferencedTableName":"เบิกตามระยะทางOutput","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"InstanceId","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 134: New step4

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | New step4 |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 620 chars, click to expand)</summary>

```json
{"ReferencedTableName":"New step4Output","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"InstanceId","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 135: New step3

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | New step3 |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 620 chars, click to expand)</summary>

```json
{"ReferencedTableName":"New step3Output","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"InstanceId","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

