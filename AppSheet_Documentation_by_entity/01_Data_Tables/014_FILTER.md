# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 14. FILTER

*Category: **Data Table** · Source pages: table properties p.9, columns p.261–272 · **14 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | FILTER |
| Visible? | ALWAYS |
| Shared? | Yes |
| Data locale | en-GB |
| Are updates allowed? | ALL_CHANGES |
| Expression for update mode | `=SWITCH(USERROLE(), "ADMIN", "ALL_CHANGES", "USER", "READ_ONLY", "READ_ONLY")` |
| Source Path | เผ่าปัญญา ทรานสปอร์ต |
| Worksheet Name/Qualifier | FILTER |
| Data Source | google |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | FILTER_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | FILTER_Schema |
| Visible? | ALWAYS |

### Columns (14)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | ID_เบิกค่าเข้ารับสินค้าคืนคลัง | Text | Yes | No | No |
| 3 | STARTDATE | Date | No | No | No |
| 4 | ENDDATE | Date | No | No | No |
| 5 | วันที่ออกเอกสาร | Date | No | No | No |
| 6 | EXPORT TO PDF | Yes/No | No | No | No |
| 7 | EXPORT TO Excel(สรุปจำนวนจุดส่งงาน) | Yes/No | No | No | No |
| 8 | ราคา_ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง | Price | No | No | No |
| 9 | ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง | List | No | Yes | No |
| 10 | สรุปจำนวนจุดส่งงาน | List | No | Yes | No |
| 11 | ทำเบิกค่ายกขึ้นชั้น | List | No | Yes | No |
| 12 | ราคา_ทำเบิกค่ายกขึ้นชั้น | Price | No | Yes | No |
| 13 | ได้เพิ่ม50%ของค่าเที่ยว | List | No | Yes | No |
| 14 | ราคา_ได้เพิ่ม50%ของค่าเที่ยว | Price | No | Yes | No |

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


#### Column 2: ID_เบิกค่าเข้ารับสินค้าคืนคลัง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_เบิกค่าเข้ารับสินค้าคืนคลัง |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | UNIQUEID() |
| Read-Only | No |
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


#### Column 3: STARTDATE

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | STARTDATE |
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


#### Column 4: ENDDATE

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ENDDATE |
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


#### Column 5: วันที่ออกเอกสาร

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่ออกเอกสาร |
| Type | Date |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=TODAY()` |
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


#### Column 6: EXPORT TO PDF

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | EXPORT TO PDF |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 169 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: EXPORT TO Excel(สรุปจำนวนจุดส่งงาน)

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | EXPORT TO Excel(สรุปจำนวนจุดส่งงาน) |
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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 169 chars, click to expand)</summary>

```json
{"YesLabel":"","NoLabel":"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: ราคา_ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคา_ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง |
| Type | Price |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=SUM(SELECT( รับงานคืนได้เงิน200[ราคา], AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW]. [STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], IN( [สถานะการเข้ารับสินค้า], LIST( "(ได้เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้าน ปิด", "(ได้เพิ่ม200) ไม่มีในจุด ที่ส่งงานวันนี้" ) ) ) ))` |
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
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 308 chars, click to expand)</summary>

```json
{"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ได้เพิ่ม200_ไม่มีสินค้าคืน_ร้านปิด_ไม่มีในจุดส่ง |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=FILTER( รับงานคืนได้เงิน200, AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW].[STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], IN( [สถานะการเข้ารับสินค้า], LIST( "(ได้ เพิ่ม200) ไม่มีสินค้าคืน หรือ ร้านปิด", "(ได้เพิ่ม200) ไม่มีในจุด ที่ส่ง งานวันนี้" ) ) ) )` |
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
<summary><code>Type Qualifier</code> (JSON — 952 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedRootTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_รับงานคืนได้เงิน200\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: สรุปจำนวนจุดส่งงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สรุปจำนวนจุดส่งงาน |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=SELECT( ตารางงานประจำวัน[ID_งานประจำวัน], AND( [ลำดับแรก] = TRUE, ISNOTBLANK([Plan Delivery]), [Plan Delivery] >= [_THISROW].[STARTDATE], [Plan Delivery] <= [_THISROW]. [ENDDATE] ) )` |
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
<summary><code>Type Qualifier</code> (JSON — 509 chars, click to expand)</summary>

```json
{"ElementType":"Number","ElementTypeQualifier":"{\"MaxValue\":null,\"MinValue\":null,\"StepValue\":null,\"NumericDigits\":null,\"ShowThousandsSeparator\":true,\"NumberDisplayMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: ทำเบิกค่ายกขึ้นชั้น

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ทำเบิกค่ายกขึ้นชั้น |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=FILTER( รับงานคืนได้เงิน200, AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW].[STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], [สถานะการเข้ารับสินค้า]="ทำเบิกค่ายก ขึ้นชั้น"))` |
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
<summary><code>Type Qualifier</code> (JSON — 952 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedRootTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_รับงานคืนได้เงิน200\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: ราคา_ทำเบิกค่ายกขึ้นชั้น

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคา_ทำเบิกค่ายกขึ้นชั้น |
| Type | Price |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=SUM(SELECT( รับงานคืนได้เงิน200[ราคา], AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW]. [STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], [สถานะ การเข้ารับสินค้า] = "ทำเบิกค่ายกขึ้นชั้น")))` |
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
<summary><code>Type Qualifier</code> (JSON — 308 chars, click to expand)</summary>

```json
{"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 13: ได้เพิ่ม50%ของค่าเที่ยว

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ได้เพิ่ม50%ของค่าเที่ยว |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=FILTER( รับงานคืนได้เงิน200, AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW].[STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], [สถานะการเข้ารับสินค้า] = "(ได้เพิ่ม50%) ของค่าเที่ยว"))` |
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
<summary><code>Type Qualifier</code> (JSON — 952 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedRootTableName\":\"รับงานคืนได้เงิน200\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_รับงานคืนได้เงิน200\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 14: ราคา_ได้เพิ่ม50%ของค่าเที่ยว

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคา_ได้เพิ่ม50%ของค่าเที่ยว |
| Type | Price |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=SUM(SELECT( รับงานคืนได้เงิน200[ราคา], AND( ISNOTBLANK([วันที่เข้ารับ]), [วันที่เข้ารับ] >= [_THISROW]. [STARTDATE], [วันที่เข้ารับ] <= [_THISROW].[ENDDATE], [สถานะ การเข้ารับสินค้า] = "(ได้เพิ่ม50%) ของค่าเที่ยว")))` |
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
<summary><code>Type Qualifier</code> (JSON — 308 chars, click to expand)</summary>

```json
{"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

