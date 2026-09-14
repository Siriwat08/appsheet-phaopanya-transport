# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 23. ScanDocs

*Category: **Data Table** · Source pages: table properties p.14, columns p.451–464 · **18 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | ScanDocs |
| Visible? | ALWAYS |
| Shared? | Yes |
| Data locale | en-GB |
| Are updates allowed? | ALL_CHANGES |
| Source Path | เผ่าปัญญา ทรานสปอร์ต |
| Worksheet Name/Qualifier | ScanDocs |
| Data Source | google |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | ScanDocs_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | ScanDocs_Schema |
| Visible? | ALWAYS |

### Columns (18)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | ID_ScanDocs | Text | Yes | No | No |
| 3 | Scan_Invoice | Text | No | No | No |
| 4 | Select_Invoice | Enum | No | No | No |
| 5 | Scan_DateTime | DateTime | No | No | No |
| 6 | Scan_By | Email | No | No | No |
| 7 | Scan_Method | Enum | No | No | No |
| 8 | Invoice_No | Ref | No | No | No |
| 9 | ชื่อเจ้าของสินค้า | Text | No | No | No |
| 10 | ทะเบียนรถ | Text | No | No | No |
| 11 | Shipment No | Text | No | No | No |
| 12 | วันที่ส่งสินค้า | Date | No | No | No |
| 13 | หมายเหตุการรับเอกสาร | LongText | No | No | No |
| 14 | จำนวน_ทั้งหมด | Number | No | Yes | No |
| 15 | จำนวน_สแกนแล้ว | Number | No | Yes | No |
| 16 | จำนวน_รอสแกน | Number | No | Yes | No |
| 17 | สรุปยอด | Text | No | Yes | No |
| 18 | เลือกวันที่ | Date | No | Yes | No |

#### Column 1: _RowNumber

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _RowNumber |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Description | Number of this row |
| Read-Only | Yes |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 2: ID_ScanDocs

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_ScanDocs |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | UNIQUEID() |
| Read-Only | Yes |
| Hidden | No |
| Label | Yes |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | Yes |
| Part of Key? | Yes |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 3: Scan_Invoice

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Scan_Invoice |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | Yes |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 674 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=AND(\n IN([_THIS],ตารางงานประจำวัน[Invoice No]),\n LOOKUP([_THIS], \"ตารางงานประจำวัน\", \"Invoice No\", \"Plan Delivery\") = [_THISROW].[เลือกวันที่],\n LOOKUP([_THIS], \"ตารางงานประจำวัน\", \"Invoice No\",\"จำนวน_Invoice_ที่ต้องสแกน\") > 0,\n ISBLANK(\nSELECT(ScanDocs[ID_ScanDocs], \n OR([Scan_Invoice] =[_THIS], [Select_Invoice] = [_THIS])\n )\n)\n)","Error_Message_If_Invalid":"=\"Invoice นี้ไม่ถูกต้อง, ไม่ใช่งานวันที่เลือก หรือสแกนรับไปแล้ว\"","Show_If":"=ISBLANK([Select_Invoice])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: Select_Invoice

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Select_Invoice |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 875 chars, click to expand)</summary>

```json
{"EnumValues":[],"AllowOtherValues":true,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":"=SELECT(\n ตารางงานประจำวัน[InvoiceNo],\n AND(\n [Plan Delivery] = [_THISROW].[เลือกวันที่],\nOR(ISBLANK([ScanStatus]), [ScanStatus] <> \"สแกนรับแล้ว\"),\n[จำนวน_Invoice_ที่ต้องสแกน] > 0 \n )\n)\n-ScanDocs[Scan_Invoice]\n-ScanDocs[Select_Invoice]","Error_Message_If_Invalid":"=\"เลขInvoice ไม่ถูกต้อง, ไม่ใช่งานของวันนี้/เมื่อวาน หรือถูกสแกนรับไปแล้ว\"","Show_If":"=ISBLANK([Scan_Invoice])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 5: Scan_DateTime

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Scan_DateTime |
| Type | DateTime |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=NOW()` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 222 chars, click to expand)</summary>

```json
{"MinValue":null,"MaxValue":null,"UseLongDateFormat":false,"IgnoreSeconds":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 6: Scan_By

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Scan_By |
| Type | Email |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=USEREMAIL()` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | Yes |

<details>
<summary><code>Type Qualifier</code> (JSON — 142 chars, click to expand)</summary>

```json
{"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: Scan_Method

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Scan_Method |
| Type | Enum |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=IF(ISNOTBLANK([Select_Invoice]), "Manual", "Barcode")` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | `=ISBLANK([_THIS])` |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 569 chars, click to expand)</summary>

```json
{"EnumValues":["Barcode","Manual"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":"=ISBLANK([_THIS])","Suggested_Values":null}
```

</details>


#### Column 8: Invoice_No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Invoice_No |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `= IF(ISNOTBLANK([Scan_Invoice]), [Scan_Invoice], [Select_Invoice]) ) )` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 976 chars, click to expand)</summary>

```json
{"ReferencedTableName":"ตารางงานประจำวัน","ReferencedRootTableName":"ตารางงานประจำวัน","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_งานประจำวัน","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":"=AND(\n ISNOTBLANK([_THIS]),\n IN(\nLOOKUP([_THIS], \"ตารางงานประจำวัน\", \"ID_งานประจำวัน\",\"Plan Delivery\"),\n LIST(TODAY(), TODAY() - 1)\n ),\nISBLANK(\n SELECT(ScanDocs[ID_ScanDocs], \n AND(\n[Invoice_No] = [_THIS], \n [ID_ScanDocs] <> [_THISROW].[ID_ScanDocs]\n )\n )\n)\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}=ANY( SELECT(ตารางงานประจำวัน[ID_งานประจำวัน], [Invoice No]
```

</details>


#### Column 9: ชื่อเจ้าของสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อเจ้าของสินค้า |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=[Invoice_No].[ชื่อเจ้าของสินค้า]` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: ทะเบียนรถ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ทะเบียนรถ |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=[Invoice_No].[ทะเบียนรถ]` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: Shipment No

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Shipment No |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=[Invoice_No].[Shipment No]` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: วันที่ส่งสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่ส่งสินค้า |
| Type | Date |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=[Invoice_No].[Plan Delivery]` |
| Read-Only | No |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 168 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 13: หมายเหตุการรับเอกสาร

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | หมายเหตุการรับเอกสาร |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 257 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=ISNOTBLANK([Invoice_No])","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 14: จำนวน_ทั้งหมด

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวน_ทั้งหมด |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=COUNT( UNIQUE( SELECT( ตารางงานประจำวัน[Invoice No], [Plan Delivery] = [_THISROW].[เลือกวันที่] ) ) )` |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 15: จำนวน_สแกนแล้ว

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวน_สแกนแล้ว |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=COUNT( UNIQUE( SELECT( ตารางงานประจำวัน[Invoice No], AND( [Plan Delivery] = [_THISROW].[เลือกวันที่], [ScanStatus] = "สแกนรับแล้ว" ) ) ) )` |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 16: จำนวน_รอสแกน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | จำนวน_รอสแกน |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=[จำนวน_ทั้งหมด] - [จำนวน_สแกนแล้ว]` |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 17: สรุปยอด

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สรุปยอด |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `= "📋 " & [จำนวน_ทั้งหมด] & " ✅ " & [จำนวน_สแกนแล้ว] & " ⏳ " & [จำนวน_รอสแกน]` |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 18: เลือกวันที่

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เลือกวันที่ |
| Type | Date |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=IF( TOTALHOURS(NOW() - TODAY()) >= 16, TODAY(), TODAY() - 1 )` |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 168 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

