# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 74. New step Output 2

*Category: **Output Table** · Source pages: table properties p.39, columns p.1257–1291 · **49 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | New step Output 2 |
| Visible? | NEVER |
| Shared? | Yes |
| Are updates allowed? | READ_ONLY /ProcessStateTables/70999aca-5a1f-4dfc-907b- |
| Source Path | 417bc046f574/261d0ba4-8cde-454c-bb42- |
| Data Source | cbd0b03b5c66/StepOutput_New step native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | New step Output 2_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | New step Output 2_Schema |
| Visible? | NEVER |

### Columns (49)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | Instance Id | Text | Yes | No | No |
| 2 | head | LongText | No | No | No |
| 3 | ID_SCGนครหลวงJWDภูมิภาค | Text | No | No | No |
| 4 | วันที่ส่งสินค้า | Date | No | No | No |
| 5 | เวลาที่ส่งสินค้า | Time | No | No | No |
| 6 | จุดส่งสินค้าปลายทาง | LatLong | No | No | No |
| 7 | ชื่อ - นามสกุล | Text | No | No | No |
| 8 | ทะเบียนรถ | Text | No | No | No |
| 9 | Shipment No | Number | No | No | No |
| 10 | Invoice No | EnumList | No | No | No |
| 11 | รูปถ่ายบิลส่งสินค้า | Image | No | No | No |
| 12 | รหัสลูกค้า | Text | No | No | No |
| 13 | ชื่อเจ้าของสินค้า | Text | No | No | No |
| 14 | ชื่อปลายทาง | Text | No | No | No |
| 15 | Email พนักงาน | Email | No | No | No |
| 16 | LAT | Decimal | No | No | No |
| 17 | LONG | Decimal | No | No | No |
| 18 | ID_Doc_Return | Ref | No | No | No |
| 19 | คลังสินค้าเอสซีจีเจดับเบิ้ลยูดีวังน้อย | LatLong | No | No | No |
| 20 | ที่อยู่ปลายทาง | LongText | No | No | No |
| 21 | รูปสินค้าตอนส่ง | Image | No | No | No |
| 22 | รูปหน้าร้าน / บ้าน | Image | No | No | No |
| 23 | หมายเหตุ | LongText | No | No | No |
| 24 | เดือน | Text | No | No | No |
| 25 | ระยะทางจากคลัง_Km | Decimal | No | No | No |
| 26 | ชื่อที่อยู่จาก_LatLong | LongText | No | No | No |
| 27 | SM_Link_SCG | Ref | No | No | No |
| 28 | ID_พนักงาน | Ref | No | No | No |
| 29 | พิกัดตอนกดบันทึกงาน | LatLong | No | No | No |
| 30 | เวลาเริ่มกรอกงาน | Time | No | No | No |
| 31 | เวลาบันทึกงานสำเร็จ | Time | No | No | No |
| 32 | ระยะขยับจากจุดเริ่มต้น_เมตร | Decimal | No | No | No |
| 33 | ระยะเวลาใช้งาน_นาที | Duration | No | No | No |
| 34 | ความเร็วการเคลื่อนที่_เมตร_นาที | Decimal | No | No | No |
| 35 | ผลการตรวจสอบงานส่ง | Enum | No | No | No |
| 36 | เหตุผิดปกติที่ตรวจพบ | EnumList | No | No | No |
| 37 | เวลาถ่ายรูปหน้าร้าน_หน้าบ้าน | Time | No | No | No |
| 38 | SYNC_STATUS | Text | No | No | No |
| 39 | MD_LINK | Text | No | No | No |
| 40 | MATCH_KEY | Text | No | No | No |
| 41 | POINTS_AT_TIME | Number | No | No | No |
| 42 | STATUS | Text | No | No | No |
| 43 | เจ้าของสินค้า//ชื่อปลายทาง//Lat_Long//Inv No | LongText | No | No | No |
| 44 | Document_Return | LongText | No | No | No |
| 45 | Image_Document_Return | List | No | No | No |
| 46 | ที่อยู่ปลายทาง_LatLong_Api | LatLong | No | No | No |
| 47 | Related สรุปเบิกส่วนต่างs | List | No | No | No |
| 48 | Related ทำเบิกส่วนต่างScgวังน้อยs | List | No | No | No |
| 49 | พิกัดตอนกดบันทึก_เปลี่ยนแล้ว | Yes/No | No | No | No |

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
| Fixed definition? | No |
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


#### Column 2: head

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | head |
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


#### Column 3: ID_SCGนครหลวงJWDภูมิภาค

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_SCGนครหลวงJWDภูมิภาค |
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


#### Column 4: วันที่ส่งสินค้า

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
<summary><code>Type Qualifier</code> (JSON — 187 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 5: เวลาที่ส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เวลาที่ส่งสินค้า |
| Type | Time |
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
<summary><code>Type Qualifier</code> (JSON — 215 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 6: จุดส่งสินค้าปลายทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จุดส่งสินค้าปลายทาง |
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
<summary><code>Type Qualifier</code> (JSON — 350 chars, click to expand)</summary>

```json
{"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":"=AND(\n ISNOTBLANK([_THIS]),\n [_THIS] <> \"0.000000,0.000000\",\n [_THIS] <> \"0,0\"\n)","Error_Message_If_Invalid":"=\"ไม่สามารถให้บันทึกข้อมูลได้ ไม่มีสัญญาณGPS\"","Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: ชื่อ - นามสกุล

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
<summary><code>Type Qualifier</code> (JSON — 232 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: ทะเบียนรถ

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


#### Column 9: Shipment No

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
<summary><code>Type Qualifier</code> (JSON — 352 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=SORT(\n UNIQUE(\n LIST([_THISROW].[Shipment No])\n + SM_Today_User[Shipment No]\n)\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""}
```

</details>


#### Column 10: Invoice No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Invoice No |
| Type | EnumList |
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
<summary><code>Type Qualifier</code> (JSON — 976 chars, click to expand)</summary>

```json
{"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=IF(ISBLANK([Shipment No]),\nLIST(),\n UNIQUE(\n IF(USERROLE() = \"ADMIN\",\nSELECT(ตารางงานประจำวัน[Invoice No], [Shipment No] =[_THISROW].[Shipment No]),\n SELECT(SM_Today_User[InvoiceNo],\n AND(\n [Shipment No] = [_THISROW].[Shipment No],\n \nNOT(IN([Invoice No], SCGนครหลวงJWDภูมิภาค[Invoice No]))\n)\n )\n )\n + [_THISROW].[Invoice No]\n ) -LIST(\"\")\n)","Error_Message_If_Invalid":null,"Show_If":"","Required_If":null,"Editable_If":"=OR(\n USERROLE() = \"ADMIN\",\nISBLANK([_THISROW].[InvoiceNo])\n)","Reset_If":null,"Suggested_Values":""}
```

</details>


#### Column 11: รูปถ่ายบิลส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปถ่ายบิลส่งสินค้า |
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


#### Column 12: รหัสลูกค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รหัสลูกค้า |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=[_THISROW_BEFORE].[Invoice No] <> [_THISROW].[Invoice No]` |
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
<summary><code>Type Qualifier</code> (JSON — 331 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] <>[_THISROW].[Invoice No]","Suggested_Values":null}
```

</details>


#### Column 13: ชื่อเจ้าของสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อเจ้าของสินค้า |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=[_THISROW_BEFORE].[Invoice No] <> [_THISROW].[Invoice No]` |
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
<summary><code>Type Qualifier</code> (JSON — 331 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] <>[_THISROW].[Invoice No]","Suggested_Values":null}
```

</details>


#### Column 14: ชื่อปลายทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อปลายทาง |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=[_THISROW_BEFORE].[Invoice No] <> [_THISROW].[Invoice No]` |
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
<summary><code>Type Qualifier</code> (JSON — 331 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] <>[_THISROW].[Invoice No]","Suggested_Values":null}
```

</details>


#### Column 15: Email พนักงาน

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
<summary><code>Type Qualifier</code> (JSON — 161 chars, click to expand)</summary>

```json
{"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 16: LAT

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | LAT |
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
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":6,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 17: LONG

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | LONG |
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
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":6,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 18: ID_Doc_Return

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_Doc_Return |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=[_THISROW_BEFORE].[Invoice No] <> [_THISROW].[Invoice No]` |
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
<summary><code>Type Qualifier</code> (JSON — 700 chars, click to expand)</summary>

```json
{"ReferencedTableName":"Doc_Return","ReferencedRootTableName":"Doc_Return","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_Doc_Return","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No]<> [_THISROW].[Invoice No]","Suggested_Values":null}
```

</details>


#### Column 19: คลังสินค้าเอสซีจีเจดับเบิ้ลยูดีวังน้อย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | คลังสินค้า เอสซีจี เจดับเบิ้ลยูดี วังน้อย |
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


#### Column 20: ที่อยู่ปลายทาง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ที่อยู่ปลายทาง |
| Type | LongText |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=[_THISROW_BEFORE].[Invoice No] <> [_THISROW].[Invoice No]` |
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
<summary><code>Type Qualifier</code> (JSON — 331 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":"=[_THISROW_BEFORE].[Invoice No] <>[_THISROW].[Invoice No]","Suggested_Values":null}
```

</details>


#### Column 21: รูปสินค้าตอนส่ง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปสินค้าตอนส่ง |
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


#### Column 22: รูปหน้าร้าน / บ้าน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปหน้าร้าน / บ้าน |
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


#### Column 23: หมายเหตุ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | หมายเหตุ |
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
<summary><code>Type Qualifier</code> (JSON — 344 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=AND(\n ISNOTBLANK([รูปถ่ายบิลส่งสินค้า]),\n ISNOTBLANK([รูปสินค้าตอนส่ง]),\n ISNOTBLANK([รูปหน้าร้าน /บ้าน])\n)","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 24: เดือน

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


#### Column 25: ระยะทางจากคลัง_Km

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ระยะทางจากคลัง_Km |
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


#### Column 26: ชื่อที่อยู่จาก_LatLong

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อที่อยู่จาก_LatLong |
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


#### Column 27: SM_Link_SCG

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | SM_Link_SCG |
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
<summary><code>Type Qualifier</code> (JSON — 639 chars, click to expand)</summary>

```json
{"ReferencedTableName":"ตารางงานประจำวัน","ReferencedRootTableName":"ตารางงานประจำวัน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_งานประจำวัน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 28: ID_พนักงาน

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
<summary><code>Type Qualifier</code> (JSON — 667 chars, click to expand)</summary>

```json
{"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE()=\"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE()=\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 29: พิกัดตอนกดบันทึกงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | พิกัดตอนกดบันทึกงาน |
| Type | LatLong |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=ISNOTBLANK([หมายเหตุ])` |
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
<summary><code>Type Qualifier</code> (JSON — 221 chars, click to expand)</summary>

```json
{"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([หมายเหตุ])","Suggested_Values":null}
```

</details>


#### Column 30: เวลาเริ่มกรอกงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เวลาเริ่มกรอกงาน |
| Type | Time |
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
<summary><code>Type Qualifier</code> (JSON — 196 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 31: เวลาบันทึกงานสำเร็จ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เวลาบันทึกงานสำเร็จ |
| Type | Time |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=ISNOTBLANK([หมายเหตุ])` |
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
<summary><code>Type Qualifier</code> (JSON — 217 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([หมายเหตุ])","Suggested_Values":null}
```

</details>


#### Column 32: ระยะขยับจากจุดเริ่มต้น_เมตร

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ระยะขยับจากจุดเริ่มต้น_เมตร |
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
<summary><code>Type Qualifier</code> (JSON — 285 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"","Suggested_Values":null}
```

</details>


#### Column 33: ระยะเวลาใช้งาน_นาที

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ระยะเวลาใช้งาน_นาที |
| Type | Duration |
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
<summary><code>Type Qualifier</code> (JSON — 164 chars, click to expand)</summary>

```json
{"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 34: ความเร็วการเคลื่อนที่_เมตร_นาที

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ความเร็วการเคลื่อนที่_เมตร_นาที |
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


#### Column 35: ผลการตรวจสอบงานส่ง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ผลการตรวจสอบงานส่ง |
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
<summary><code>Type Qualifier</code> (JSON — 559 chars, click to expand)</summary>

```json
{"EnumValues":["PASS","WARNING","FAIL"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 36: เหตุผิดปกติที่ตรวจพบ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เหตุผิดปกติที่ตรวจพบ |
| Type | EnumList |
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
<summary><code>Type Qualifier</code> (JSON — 555 chars, click to expand)</summary>

```json
{"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 37: เวลาถ่ายรูปหน้าร้าน_หน้าบ้าน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เวลาถ่ายรูปหน้าร้าน_หน้าบ้าน |
| Type | Time |
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
<summary><code>Type Qualifier</code> (JSON — 196 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 38: SYNC_STATUS

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | SYNC_STATUS |
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


#### Column 39: MD_LINK

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | MD_LINK |
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


#### Column 40: MATCH_KEY

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | MATCH_KEY |
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


#### Column 41: POINTS_AT_TIME

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | POINTS_AT_TIME |
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


#### Column 42: STATUS

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | STATUS |
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


#### Column 43: เจ้าของสินค้า//ชื่อปลายทาง//Lat_Long//Inv No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เจ้าของสินค้า//ชื่อปลายทาง//Lat_Long//Inv No |
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


#### Column 44: Document_Return

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Document_Return |
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


#### Column 45: Image_Document_Return

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Image_Document_Return |
| Type | List |
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
<summary><code>Type Qualifier</code> (JSON — 943 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"Image_Doc_Return\",\"ReferencedRootTableName\":\"Image_Doc_Return\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_Image_Doc_Return\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 46: ที่อยู่ปลายทาง_LatLong_Api

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ที่อยู่ปลายทาง_LatLong_Api |
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


#### Column 47: Related สรุปเบิกส่วนต่างs

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Related สรุปเบิกส่วนต่างs |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 943 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"สรุปเบิกส่วนต่าง\",\"ReferencedRootTableName\":\"สรุปเบิกส่วนต่าง\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_สรุปเบิกส่วนต่าง\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 48: Related ทำเบิกส่วนต่างScgวังน้อยs

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Related ทำเบิกส่วนต่างScgวังน้อยs |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 967 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedRootTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_ทำเบิกส่วนต่างScgวังน้อย\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 49: พิกัดตอนกดบันทึก_เปลี่ยนแล้ว

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | พิกัดตอนกดบันทึก_เปลี่ยนแล้ว |
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

