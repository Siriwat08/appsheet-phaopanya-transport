# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 75. Process for New bot - 1 Process Table

*Category: **Process Table** · Source pages: table properties p.40, columns p.1292–1313 · **30 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Process for New bot - 1 Process Table |
| Visible? | NEVER |
| Shared? | Yes |
| Are updates allowed? | READ_ONLY /ProcessStateTables/70999aca-5a1f-4dfc-907b- |
| Source Path | 417bc046f574/175bb876-5ac2-498d-8587- |
| Data Source | 13e27591d256/State Table native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Process for New bot - 1 Process Table_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Process for New bot - 1 Process Table_Schema |
| Visible? | NEVER |

### Columns (30)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | Instance Id | Text | Yes | No | No |
| 2 | ID_แจ้งปัญหาระหว่างวัน | Text | No | No | No |
| 3 | กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา | Yes/No | No | No | No |
| 4 | ข้อมูลการแจ้งปัญหา | Enum | No | No | No |
| 5 | รูป1 | Image | No | No | No |
| 6 | รูป2 | Image | No | No | No |
| 7 | รูป3 | Image | No | No | No |
| 8 | หมายเหตุ | LongText | No | No | No |
| 9 | วันที่+เวลา | DateTime | No | No | No |
| 10 | ชื่อ - นามสกุล | Text | No | No | No |
| 11 | ทะเบียนรถ | Text | No | No | No |
| 12 | รหัสผู้รับเหมา | Text | No | No | No |
| 13 | ชื่อผู้รับเหมา | Text | No | No | No |
| 14 | Shipment No | Number | No | No | No |
| 15 | Invoice No | EnumList | No | No | No |
| 16 | รหัสลูกค้า | Text | No | No | No |
| 17 | ชื่อปลายทาง | Text | No | No | No |
| 18 | ใส่ข้อมูลการแจ้งปัญหาเพื่อนับจุดส่งงาน | LongText | No | No | No |
| 19 | เพิ่มรูปแคปหน้าจอนำกลับคืนคลัง | Image | No | No | No |
| 20 | อัพเดตข้อมูลการแจ้งปัญหาไปตารางส่งงานSCG | Yes/No | No | No | No |
| 21 | Lat/Long | LatLong | No | No | No |
| 22 | LatLong_ตรวจสอบ | LatLong | No | No | No |
| 23 | Email พนักงาน | Email | No | No | No |
| 24 | เดือน | Text | No | No | No |
| 25 | SM_Link | Ref | No | No | No |
| 26 | RT_Link | Ref | No | No | No |
| 27 | SCGนครหลวงJWDภูมิภาค_ID | Text | No | No | No |
| 28 | ID_พนักงาน | Ref | No | No | No |
| 29 | LINK_Image_แจ้งปัญหา | Text | No | No | No |
| 30 | New step | Ref | No | No | No |

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


#### Column 2: ID_แจ้งปัญหาระหว่างวัน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_แจ้งปัญหาระหว่างวัน |
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


#### Column 3: กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา |
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
<summary><code>Type Qualifier</code> (JSON — 375 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":"=OR(\n ISBLANK([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา]),\n NOT([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา])\n)","Error_Message_If_Invalid":null,"Show_If":"=AND(\nISNOTBLANK([รูป1]),\n ISNOTBLANK([รูป2]),\nISNOTBLANK([รูป3]),\n NOT([กดปุ่มนี้เพื่อส่งข้อมูลแจ้งปัญหา])\n)","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: ข้อมูลการแจ้งปัญหา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ข้อมูลการแจ้งปัญหา |
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
<summary><code>Type Qualifier</code> (JSON — 1,150 chars, click to expand)</summary>

```json
{"EnumValues":["สินค้าชำรุด ตอนขึ้นงาน แจ้งคลังตรวจสอบแล้วทางคลังไม่เซ็นรับทราบให้ แจ้งเพื่อทราบครับ","ถังน้ำมัน 200 ลิตรสินค้ามีน้ำหนักเกินกลัวจะเสียหายตอนจัดส่ง สอบถามลูกค้าแล้วไม่มีรถตักสินค้าให้ครับ ","ติดต่อลูกค้าไม่ได้ ปิดเครื่อง","ลูกค้าไม่รับสายติดต่อ 3 ครั้งแล้ว","ร้านปิด","เบอร์โทรผิด ขอเบอร์ติดต่อลูกค้าใหม่ครับ","เข้าหน้างานไม่ถูกครับ ขอโลเคชั่นพร้อมเบอร์โทรติดต่อด้วยครับ","ที่อยู่หน้าเอกสารกับที่อยู่หน้ากล่องไม่ตรงกัน ให้จัดส่งที่ใหนครับ","ที่อยู่ผิด ","สินค้าเสียหาย / ชำรุด","ลูกค้าไม่สะดวกรับสินค้า","จัดส่งสินค้าไม่ทัน","ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้","ปัญหาอื่นๆๆ *ใส่ปัญหาในหมายเหตุ*"],"AllowOtherValues":false,"AutoCompleteOtherValues":false,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""}
```

</details>


#### Column 5: รูป1

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูป1 |
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


#### Column 6: รูป2

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูป2 |
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


#### Column 7: รูป3

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูป3 |
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


#### Column 8: หมายเหตุ

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
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: วันที่+เวลา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่+เวลา |
| Type | DateTime |
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
<summary><code>Type Qualifier</code> (JSON — 242 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"UseLongDateFormat":false,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: ชื่อ - นามสกุล

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


#### Column 11: ทะเบียนรถ

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


#### Column 12: รหัสผู้รับเหมา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รหัสผู้รับเหมา |
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
<summary><code>Type Qualifier</code> (JSON — 256 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 13: ชื่อผู้รับเหมา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อผู้รับเหมา |
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
<summary><code>Type Qualifier</code> (JSON — 256 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 14: Shipment No

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
<summary><code>Type Qualifier</code> (JSON — 624 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(USERROLE() = \"ADMIN\",\n(SM_Today_User[Shipment No] + \n SELECT(ข้อมูลงานRT[Shipment (รับคืน)], [วันที่เข้ารับ] = TODAY())),\n IF([ข้อมูลการแจ้งปัญหา] = \"ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้\",\n SELECT(ข้อมูลงานRT[Shipment (รับคืน)], \n AND([Emailพนักงาน] = USEREMAIL(), [วันที่เข้ารับ] = TODAY())\n ),\nSM_Today_User[Shipment No]\n)\n)","Error_Message_If_Invalid":null,"Show_If":"","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 15: Invoice No

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
<summary><code>Type Qualifier</code> (JSON — 1,309 chars, click to expand)</summary>

```json
{"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=UNIQUE(\n IF(USERROLE() =\"ADMIN\",\n SELECT(ตารางงานประจำวัน[Invoice No], [ShipmentNo] = [_THISROW].[Shipment No]) +\n SELECT(ข้อมูลงานRT[เลขที่เอกสารรับคืน], [Shipment (รับคืน)] = [_THISROW].[ShipmentNo]),\n IF([ข้อมูลการแจ้งปัญหา] = \"ไม่มีในจุดส่งงานวันนี้ ไม่สามารถเข้ารับงานคืนให้ได้\",\n SELECT(ข้อมูลงานRT[เลขที่เอกสารรับคืน],\n AND(\n [Shipment (รับคืน)] = [_THISROW].[ShipmentNo],\n [Email พนักงาน] = USEREMAIL(),\n [วันที่เข้ารับ] =TODAY()\n )\n ),\n SELECT(SM_Today_User[Invoice No], \nAND(\n [Shipment No] = [_THISROW].[Shipment No],\n[DeliveryStatus] <> \"จัดส่งเรียบร้อย\",\n NOT(IN([Invoice No],SELECT(แจ้งปัญหาระหว่างวัน[Invoice No], [Shipment No] =[_THISROW].[Shipment No])))\n )\n )\n )\n ) \n + [_THISROW].[Invoice No]\n) -LIST(\"\")","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":""}
```

</details>


#### Column 16: รหัสลูกค้า

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
<summary><code>Type Qualifier</code> (JSON — 256 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 17: ชื่อปลายทาง

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
<summary><code>Type Qualifier</code> (JSON — 256 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([InvoiceNo])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 18: ใส่ข้อมูลการแจ้งปัญหาเพื่อนับจุดส่งงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ใส่ข้อมูลการแจ้งปัญหา เพื่อนับจุดส่งงาน |
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
<summary><code>Type Qualifier</code> (JSON — 278 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 19: เพิ่มรูปแคปหน้าจอนำกลับคืนคลัง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง |
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


#### Column 20: อัพเดตข้อมูลการแจ้งปัญหาไปตารางส่งงานSCG

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG |
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
<summary><code>Type Qualifier</code> (JSON — 441 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":"=OR(\n ISBLANK([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG]),\n NOT([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG])\n)","Error_Message_If_Invalid":"","Show_If":"=AND(\nISNOTBLANK([ใส่ข้อมูลการแจ้งปัญหา เพื่อนับจุดส่งงาน]),\nISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง]),\n NOT([อัพเดตข้อมูลการแจ้งปัญหา ไป ตารางส่งงานSCG])\n)","Required_If":null,"Editable_If":"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 21: Lat/Long

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat/Long |
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


#### Column 22: LatLong_ตรวจสอบ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | LatLong_ตรวจสอบ |
| Type | LatLong |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง])` |
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
<summary><code>Type Qualifier</code> (JSON — 238 chars, click to expand)</summary>

```json
{"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":"","Error_Message_If_Invalid":"","Show_If":"","Required_If":null,"Editable_If":null,"Reset_If":"=ISNOTBLANK([เพิ่มรูปแคปหน้าจอ นำกลับคืนคลัง])","Suggested_Values":null}
```

</details>


#### Column 23: Email พนักงาน

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
<summary><code>Type Qualifier</code> (JSON — 162 chars, click to expand)</summary>

```json
{"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
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


#### Column 25: SM_Link

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | SM_Link |
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


#### Column 26: RT_Link

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | RT_Link |
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
{"ReferencedTableName":"ข้อมูลงานRT","ReferencedRootTableName":"ข้อมูลงานRT","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_RT","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 27: SCGนครหลวงJWDภูมิภาค_ID

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | SCGนครหลวงJWDภูมิภาค_ID |
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
<summary><code>Type Qualifier</code> (JSON — 668 chars, click to expand)</summary>

```json
{"ReferencedTableName":"ข้อมูลพนักงาน","ReferencedRootTableName":"ข้อมูลพนักงาน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_พนักงาน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE()=\"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 29: LINK_Image_แจ้งปัญหา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | LINK_Image_แจ้งปัญหา |
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


#### Column 30: New step

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | New step |
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
<summary><code>Type Qualifier</code> (JSON — 621 chars, click to expand)</summary>

```json
{"ReferencedTableName":"New step Output3","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"InstanceId","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

