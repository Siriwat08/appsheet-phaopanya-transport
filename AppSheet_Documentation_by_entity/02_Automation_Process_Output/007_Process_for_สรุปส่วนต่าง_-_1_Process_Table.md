# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 42. Process for สรุปส่วนต่าง - 1 Process Table

*Category: **Process Table** · Source pages: table properties p.23, columns p.631–639 · **12 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Process for สรุปส่วนต่าง - 1 Process Table |
| Visible? | NEVER |
| Shared? | Yes |
| Are updates allowed? | READ_ONLY /ProcessStateTables/70999aca-5a1f-4dfc-907b- |
| Source Path | 417bc046f574/b35f630e-1153-4085-82e6-fa7a689eb8ad/State |
| Data Source | Table native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Process for สรุปส่วนต่าง - 1 Process Table_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Process for สรุปส่วนต่าง - 1 Process Table_Schema |
| Visible? | NEVER |

### Columns (12)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | Instance Id | Text | Yes | No | No |
| 2 | ID_สรุปเบิกส่วนต่าง | Text | No | No | No |
| 3 | ID_Optimization | Text | No | No | No |
| 4 | ID_เบิกส่วนต่างSCGวังน้อย | Text | No | No | No |
| 5 | _ComputedKey_ID_SCGนครหลวงJWDภูมิภาค | Ref | No | No | No |
| 6 | วันที่เริ่มต้น | Date | No | No | No |
| 7 | วันที่สิ้นสุด | Date | No | No | No |
| 8 | รวมค่าขนส่งส่วนเพิ่ม | Decimal | No | No | No |
| 9 | วันที่ออกเอกสาร | Date | No | No | No |
| 10 | Export to Excel | Yes/No | No | No | No |
| 11 | สรุป_ทำเบิกส่วนต่างScgวังน้อย | List | No | No | No |
| 12 | ราคารวม_ทำเบิกส่วนต่างScgวังน้อย | Price | No | No | No |

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


#### Column 2: ID_สรุปเบิกส่วนต่าง

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_สรุปเบิกส่วนต่าง |
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


#### Column 3: ID_Optimization

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_Optimization |
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


#### Column 4: ID_เบิกส่วนต่างSCGวังน้อย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_เบิกส่วนต่างSCGวังน้อย |
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


#### Column 5: _ComputedKey_ID_SCGนครหลวงJWDภูมิภาค

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _ComputedKey_ID_SCGนครหลวงJWDภูมิภาค |
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


#### Column 6: วันที่เริ่มต้น

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่เริ่มต้น |
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
<summary><code>Type Qualifier</code> (JSON — 168 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: วันที่สิ้นสุด

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่สิ้นสุด |
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
<summary><code>Type Qualifier</code> (JSON — 168 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: รวมค่าขนส่งส่วนเพิ่ม

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | รวมค่าขนส่งส่วนเพิ่ม |
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


#### Column 9: วันที่ออกเอกสาร

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่ออกเอกสาร |
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
<summary><code>Type Qualifier</code> (JSON — 168 chars, click to expand)</summary>

```json
{"UseLongDateFormat":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: Export to Excel

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Export to Excel |
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


#### Column 11: สรุป_ทำเบิกส่วนต่างScgวังน้อย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | สรุป_ทำเบิกส่วนต่างScgวังน้อย |
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
<summary><code>Type Qualifier</code> (JSON — 967 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedRootTableName\":\"ทำเบิกส่วนต่างScgวังน้อย\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_ทำเบิกส่วนต่างScgวังน้อย\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: ราคารวม_ทำเบิกส่วนต่างScgวังน้อย

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ราคารวม_ทำเบิกส่วนต่างScgวังน้อย |
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
<summary><code>Type Qualifier</code> (JSON — 308 chars, click to expand)</summary>

```json
{"CurrencySymbol":"฿","MaxValue":null,"MinValue":null,"StepValue":null,"DecimalDigits":2,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

