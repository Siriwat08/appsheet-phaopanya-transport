# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 37. Process for เพิ่มรูปรับคืน - 1 Process Table

*Category: **Process Table** · Source pages: table properties p.21, columns p.584–605 · **30 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Process for เพิ่มรูปรับคืน - 1 Process Table |
| Visible? | NEVER |
| Shared? | Yes |
| Are updates allowed? | READ_ONLY /ProcessStateTables/70999aca-5a1f-4dfc-907b- |
| Source Path | 417bc046f574/6a9a1d20-ee25-4d69-b293- |
| Data Source | 8c9d135af46e/State Table native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Process for เพิ่มรูปรับคืน - 1 Process Table_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Process for เพิ่มรูปรับคืน - 1 Process Table_Schema |
| Visible? | NEVER |

### Columns (30)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | Instance Id | Text | Yes | No | No |
| 2 | ID_รับงานคืนได้เงิน200 | Text | No | No | No |
| 3 | สถานะการเข้ารับสินค้า | Enum | No | No | No |
| 4 | วันที่เข้ารับ | Date | No | No | No |
| 5 | ชื่อ - นามสกุล | Text | No | No | No |
| 6 | ทะเบียนรถ | Text | No | No | No |
| 7 | Shipment (หลัก) | Number | No | No | No |
| 8 | Shipment (รับคืน) | Number | No | No | No |
| 9 | เลขที่เอกสารรับคืน | Text | No | No | No |
| 10 | จำนวนสินค้า | Number | No | No | No |
| 11 | Shipment No | Number | No | No | No |
| 12 | Invoice No | EnumList | No | No | No |
| 13 | ชื่อเจ้าของสินค้า | Text | No | No | No |
| 14 | รหัสลูกค้า | Text | No | No | No |
| 15 | ชื่อลูกค้าที่เข้ารับ | Text | No | No | No |
| 16 | รูปสินค้า | Image | No | No | No |
| 17 | รูปบิลรับคืน | Image | No | No | No |
| 18 | หมายเหตุ | LongText | No | No | No |
| 19 | รูปจุดที่ส่งงาน | Image | No | No | No |
| 20 | Lat / Long | LatLong | No | No | No |
| 21 | Email พนักงาน | Email | No | No | No |
| 22 | ราคา | Price | No | No | No |
| 23 | สร้างPDFรับคืน | Yes/No | No | No | No |
| 24 | TimeChange | ChangeCounter | No | No | No |
| 25 | ตรวจสอบก่อนบันทึกข้อมูล | Number | No | No | No |
| 26 | เดือน | Text | No | No | No |
| 27 | ID_พนักงาน | Ref | No | No | No |
| 28 | LINK_IMAGE | Text | No | No | No |
| 29 | รายชื่อจุดส่งในตารางงานประจำวัน | LongText | No | No | No |
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


#### Column 2: ID_รับงานคืนได้เงิน200

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_รับงานคืนได้เงิน200 |
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


#### Column 3: สถานะการเข้ารับสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สถานะการเข้ารับสินค้า |
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
<summary><code>Type Qualifier</code> (JSON — 738 chars, click to expand)</summary>

```json
{"EnumValues":["(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้","(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้","(ได้เพิ่ม50%) ของค่าเที่ยว","(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด","ทำเบิกค่ายกขึ้นชั้น","เบิกค่าขนส่งตามระยะทาง"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: วันที่เข้ารับ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่เข้ารับ |
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
<summary><code>Type Qualifier</code> (JSON — 189 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":"=USERROLE() = \"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 5: ชื่อ - นามสกุล

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


#### Column 6: ทะเบียนรถ

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


#### Column 7: Shipment (หลัก)

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Shipment (หลัก) |
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
<summary><code>Type Qualifier</code> (JSON — 691 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=IF(\n\nUSERROLE()= \"ADMIN\",\n SELECT(\nข้อมูลงานRT[Shipment (หลัก)],\n TRUE\n ),\n SELECT(\n ข้อมูลงานRT[Shipment (หลัก)],\n AND(\n [ชื่อ - นามสกุล] =[_THISROW].[ID_พนักงาน].[ชื่อ - นามสกุล],\n [วันที่เข้ารับ] = TODAY()\n )\n)\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม)มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200)ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: Shipment (รับคืน)

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Shipment (รับคืน) |
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
<summary><code>Type Qualifier</code> (JSON — 461 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: เลขที่เอกสารรับคืน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เลขที่เอกสารรับคืน |
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
<summary><code>Type Qualifier</code> (JSON — 871 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=IF( \nUSERROLE() =\"ADMIN\",\n SELECT(\n ข้อมูลงานRT[เลขที่เอกสารรับคืน],\nIN([Shipment (รับคืน)], LIST([_THISROW].[Shipment (รับคืน)])) \n),\n\n SELECT(\n ข้อมูลงานRT[เลขที่เอกสารรับคืน],\n AND(\nIN([Shipment (รับคืน)], LIST([_THISROW].[Shipment (รับคืน)])),\n[ชื่อ - นามสกุล] = [_THISROW].[ID_พนักงาน].[ชื่อ - นามสกุล],\n [วันที่เข้ารับ] = TODAY(),\n NOT(IN([เลขที่เอกสารรับคืน], SELECT(รับงานคืนได้เงิน200[เลขที่เอกสารรับคืน], TRUE)))\n )\n)\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม)มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200)ไม่มีสินค้าคืน หรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: จำนวนสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวนสินค้า |
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
<summary><code>Type Qualifier</code> (JSON — 467 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"(ไม่ได้เพิ่ม) มีในจุดที่ ส่งงานวันนี้\", \"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: Shipment No

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
<summary><code>Type Qualifier</code> (JSON — 375 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":false,"NumberDisplayMode":"Auto","Valid_If":"=SM_Today_User 2[ShipmentNo]","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: Invoice No

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
<summary><code>Type Qualifier</code> (JSON — 903 chars, click to expand)</summary>

```json
{"ItemSeparator":",","EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Dropdown","Valid_If":"=IF(\n ISBLANK([ShipmentNo]),\n LIST(),\n UNIQUE(\n SELECT(\n SM_Today_User2[Invoice No],\n AND(\n [Shipment No] = [_THISROW].[Shipment No],\n NOT(\n IN(\n [Invoice No],\n รับงานคืนได้เงิน200[Invoice No]\n )\n )\n )\n )\n + [_THISROW].[InvoiceNo]\n )\n -LIST(\"\")\n)","Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
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


#### Column 14: รหัสลูกค้า

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
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 15: ชื่อลูกค้าที่เข้ารับ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อลูกค้าที่เข้ารับ |
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


#### Column 16: รูปสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปสินค้า |
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


#### Column 17: รูปบิลรับคืน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปบิลรับคืน |
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


#### Column 18: หมายเหตุ

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
<summary><code>Type Qualifier</code> (JSON — 358 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า],{\"ทำเบิกค่ายกขึ้นชั้น\",\"เบิกค่าขนส่งตามระยะทาง\",\"(ได้เพิ่ม200) ไม่มีสินค้าคืนหรือ ร้านปิด\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 19: รูปจุดที่ส่งงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รูปจุดที่ส่งงาน |
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
<summary><code>Type Qualifier</code> (JSON — 387 chars, click to expand)</summary>

```json
{"AllowDrawing":false,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า] ,{\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\",\"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 20: Lat / Long

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Lat / Long |
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


#### Column 21: Email พนักงาน

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


#### Column 22: ราคา

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคา |
| Type | Price |
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
<summary><code>Type Qualifier</code> (JSON — 530 chars, click to expand)</summary>

```json
{"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=IN([สถานะการเข้ารับสินค้า] ,{\"(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด\",\"(ได้เพิ่ม50%) ของค่าเที่ยว\",\"(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้\",\"เบิกค่าขนส่งตามระยะทาง\",\"ทำเบิกค่ายกขึ้นชั้น\"})","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 23: สร้างPDFรับคืน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สร้างPDFรับคืน |
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
<summary><code>Type Qualifier</code> (JSON — 209 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=USERROLE() =\"ADMIN\"","Required_If":null,"Editable_If":"=USERROLE() =\"ADMIN\"","Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 24: TimeChange

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | TimeChange |
| Type | ChangeCounter |
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
<summary><code>Type Qualifier</code> (JSON — 205 chars, click to expand)</summary>

```json
{"UpdateMode":"Accumulate","ChangeColumns":[],"ChangeValues":[],"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 25: ตรวจสอบก่อนบันทึกข้อมูล

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ตรวจสอบก่อนบันทึกข้อมูล |
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
<summary><code>Type Qualifier</code> (JSON — 345 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":"=[ตรวจสอบก่อนบันทึกข้อมูล]>0","Error_Message_If_Invalid":"=บันทึกข้อมูลไม่สำเร็จ กรุณาติดต่อแอดมินเพื่อตรวจสอบ","Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 26: เดือน

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


#### Column 27: ID_พนักงาน

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


#### Column 28: LINK_IMAGE

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | LINK_IMAGE |
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


#### Column 29: รายชื่อจุดส่งในตารางงานประจำวัน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รายชื่อจุดส่งในตารางงานประจำวัน |
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
<summary><code>Type Qualifier</code> (JSON — 619 chars, click to expand)</summary>

```json
{"ReferencedTableName":"New stepOutput","ReferencedRootTableName":null,"ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"InstanceId","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

