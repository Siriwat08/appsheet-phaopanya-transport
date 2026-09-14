# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 18. Doc_Return

*Category: **Data Table** · Source pages: table properties p.11, columns p.304–309 · **7 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Doc_Return |
| Visible? | ALWAYS |
| Shared? | Yes |
| Data locale | en-GB |
| Are updates allowed? | ALL_CHANGES |
| Expression for update mode | `=SWITCH(USERROLE(), "ADMIN", "ALL_CHANGES", "USER", "READ_ONLY", "READ_ONLY")` |
| Source Path | เผ่าปัญญา ทรานสปอร์ต |
| Worksheet Name/Qualifier | Doc_Return |
| Data Source | google |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Doc_Return_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Doc_Return_Schema |
| Visible? | ALWAYS |

### Columns (7)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | ID_Doc_Return | Text | Yes | No | No |
| 3 | รหัสลูกค้า | Text | No | No | No |
| 4 | ชื่อเจ้าของสินค้า | Text | No | No | No |
| 5 | ข้อความอธิบาย_Document_Return | LongText | No | No | No |
| 6 | Related Image_Doc_Returns | List | No | Yes | No |
| 7 | Related SCGนครหลวงJWDภูมิภาคs | List | No | Yes | No |

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


#### Column 2: ID_Doc_Return

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_Doc_Return |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | UNIQUEID() |
| Read-Only | No |
| Hidden | No |
| Label | No |
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


#### Column 3: รหัสลูกค้า

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


#### Column 4: ชื่อเจ้าของสินค้า

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อเจ้าของสินค้า |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Read-Only | No |
| Hidden | No |
| Label | Yes |
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


#### Column 5: ข้อความอธิบาย_Document_Return

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ข้อความอธิบาย_Document_Return |
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


#### Column 6: Related Image_Doc_Returns

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Related Image_Doc_Returns |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| Description | Image_Doc_Return entries that reference this entry in the ID_Doc_Return column |
| App formula | REF_ROWS("Image_Doc_Return", "ID_Doc_Return") |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| NFC Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 943 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"Image_Doc_Return\",\"ReferencedRootTableName\":\"Image_Doc_Return\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_Image_Doc_Return\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 7: Related SCGนครหลวงJWDภูมิภาคs

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Related SCGนครหลวงJWDภูมิภาคs |
| Type | List |
| Type Qualifier | *(JSON — see details below)* |
| Description | SCGนครหลวงJWDภูมิภาค entries that reference this entry in the ID_เอกสารนำกลับคืนคลัง column |
| App formula | REF_ROWS("SCGนครหลวงJWDภูมิภาค", "ID_Doc_Return") |
| Read-Only | Yes |
| Hidden | No |
| Label | No |
| Formula version | 0 |
| Reset on edit? | No |
| System Defined? | Yes |
| Key | No |
| Part of Key? | No |
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | Yes |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| NFC Scannable | No |
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 955 chars, click to expand)</summary>

```json
{"ElementType":"Ref","ElementTypeQualifier":"{\"ReferencedTableName\":\"SCGนครหลวงJWDภูมิภาค\",\"ReferencedRootTableName\":\"SCGนครหลวงJWDภูมิภาค\",\"ReferencedType\":\"Text\",\"ReferencedTypeQualifier\":\"{\\\"MaxLength\\\":null,\\\"MinLength\\\":null,\\\"LongTextFormatting\\\":\\\"PlainText\\\",\\\"IsMulticolumnKey\\\":false,\\\"Valid_If\\\":null,\\\"Error_Message_If_Invalid\\\":null,\\\"Show_If\\\":null,\\\"Required_If\\\":null,\\\"Editable_If\\\":null,\\\"Reset_If\\\":null,\\\"Suggested_Values\\\":null}\",\"ReferencedKeyColumn\":\"ID_SCGนครหลวงJWDภูมิภาค\",\"IsAPartOf\":false,\"RelationshipName\":null,\"InputMode\":\"Auto\",\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ItemSeparator":" ,","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

