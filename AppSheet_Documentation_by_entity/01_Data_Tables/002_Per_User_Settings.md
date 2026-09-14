# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 2. _Per User Settings

*Category: **Data Table** · Source pages: table properties p.2, columns p.48–58 · **15 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | _Per User Settings |
| Visible? | NEVER |
| Shared? | No |
| Data locale | th-TH |
| Are updates allowed? | UPDATES_ONLY |
| Source Path | _Per User Settings |
| Data Source | native |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | _Per User Settings_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | _Per User Settings_Schema |
| Visible? | ALWAYS |

### Columns (15)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | _EMAIL | Email | No | No | Yes |
| 3 | _NAME | Name | No | No | Yes |
| 4 | _LOCATION | LatLong | No | No | Yes |
| 5 | Options Heading | Show | No | No | Yes |
| 6 | Option 1 | Text | No | No | Yes |
| 7 | Option 2 | Text | No | No | Yes |
| 8 | Option 3 | Text | No | No | Yes |
| 9 | Option 4 | Text | No | No | Yes |
| 10 | Option 5 | Text | No | No | Yes |
| 11 | Option 6 | Number | No | No | Yes |
| 12 | Option 7 | Text | No | No | Yes |
| 13 | Option 8 | Text | No | No | Yes |
| 14 | Option 9 | Text | No | No | Yes |
| 15 | _THISUSER | Text | Yes | No | Yes |

#### Column 1: _RowNumber

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _RowNumber |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
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
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 2: _EMAIL

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _EMAIL |
| Type | Email |
| Type Qualifier | *(JSON — see details below)* |
| App formula | USEREMAIL() |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 142 chars, click to expand)</summary>

```json
{"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 3: _NAME

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _NAME |
| Type | Name |
| Type Qualifier | *(JSON — see details below)* |
| App formula | USERNAME() |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: _LOCATION

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _LOCATION |
| Type | LatLong |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 200 chars, click to expand)</summary>

```json
{"RealTime":false,"PublishIfRowKey":null,"KMLFileUrl":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 5: Options Heading

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Options Heading |
| Type | Show |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | Yes |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 232 chars, click to expand)</summary>

```json
{"Category":"Text","Content":"\"These options control thecontent and behavior of theapp\"","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 6: Option 1

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 1 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: Option 2

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 2 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 8: Option 3

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 3 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: Option 4

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 4 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: Option 5

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 5 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: Option 6

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 6 |
| Type | Number |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 269 chars, click to expand)</summary>

```json
{"MaxValue":null,"MinValue":null,"StepValue":null,"NumericDigits":null,"ShowThousandsSeparator":true,"NumberDisplayMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 12: Option 7

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 7 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 13: Option 8

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 8 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 14: Option 9

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Option 9 |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 15: _THISUSER

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | _THISUSER |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | onlyvalue |
| Read-Only | No |
| Hidden | Yes |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | No |
| Key | Yes |
| Part of Key? | Yes |
| Fixed definition? | Yes |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | th-TH |
| Searchable | No |
| Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 234 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

