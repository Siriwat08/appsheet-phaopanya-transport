# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 26. PriceOverride

*Category: **Data Table** · Source pages: table properties p.15, columns p.487–491 · **7 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | PriceOverride |
| Visible? | ALWAYS |
| Shared? | Yes |
| Data locale | en-GB |
| Are updates allowed? | ALL_CHANGES |
| Expression for update mode | `=SWITCH(USERROLE(), "ADMIN", "ALL_CHANGES", "USER", "READ_ONLY", "READ_ONLY")` |
| Source Path | เผ่าปัญญา ทรานสปอร์ต |
| Worksheet Name/Qualifier | PriceOverride |
| Data Source | google |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | PriceOverride_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | PriceOverride_Schema |
| Visible? | ALWAYS |

### Columns (7)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | ID_PriceOverride | Text | Yes | No | No |
| 3 | StartDate | Date | No | No | No |
| 4 | EndDate | Date | No | No | No |
| 5 | UsePriceDate | Date | No | No | No |
| 6 | JobName | Text | No | No | No |
| 7 | Note | LongText | No | No | No |

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


#### Column 2: ID_PriceOverride

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_PriceOverride |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=UNIQUEID()` |
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
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 3: StartDate

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | StartDate |
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


#### Column 4: EndDate

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | EndDate |
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


#### Column 5: UsePriceDate

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | UsePriceDate |
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


#### Column 6: JobName

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | JobName |
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
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 288 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":"=SELECT(\n ข้อมูลชื่องานต้นทางปลายทาง[ชื่องาน],\nTRUE\n)","Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: Note

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Note |
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
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

