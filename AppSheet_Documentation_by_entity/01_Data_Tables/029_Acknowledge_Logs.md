# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# 29. Acknowledge_Logs

*Category: **Data Table** · Source pages: table properties p.17, columns p.508–516 · **11 columns***

### Table properties

| Property | Value |
|---|---|
| Table name | Acknowledge_Logs |
| Visible? | ALWAYS |
| Shared? | Yes |
| Data locale | en-GB |
| Are updates allowed? | ALL_CHANGES |
| Expression for update mode | `=SWITCH(USERROLE(), "ADMIN", "ALL_CHANGES", "USER", "ADDS_ONLY", "READ_ONLY")` |
| Source Path | เผ่าปัญญา ทรานสปอร์ต |
| Worksheet Name/Qualifier | Acknowledge_Logs |
| Data Source | google |
| Store for image and file capture | _Default |
| Column Order List | _RowNumber |
| Partitioned across many files/sources? | No |
| Partitioned across many worksheets? | No |
| Schema | Acknowledge_Logs_Schema |

### Schema properties

| Property | Value |
|---|---|
| Schema Name | Acknowledge_Logs_Schema |
| Visible? | ALWAYS |

### Columns (11)

| # | Column name | Type | Key | Virtual | Hidden |
|---|---|---|---|---|---|
| 1 | _RowNumber | Number | No | No | Yes |
| 2 | ID_รับทราบ | Text | Yes | No | No |
| 3 | ID_ประกาศ | Ref | No | No | No |
| 4 | วันที่และเวลารับทราบ | DateTime | No | No | No |
| 5 | Email พนักงาน | Email | No | No | No |
| 6 | ชื่อ - นามสกุล | Text | No | No | No |
| 7 | ทะเบียนรถ | Text | No | No | No |
| 8 | เลือกเพื่อยืนยัน | Enum | No | No | No |
| 9 | หมายเหตุ | LongText | No | No | No |
| 10 | ลงชื่อพนักงาน | Signature | No | No | No |
| 11 | ข้อความประกาศ | Show | No | Yes | No |

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


#### Column 2: ID_รับทราบ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_รับทราบ |
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


#### Column 3: ID_ประกาศ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ID_ประกาศ |
| Type | Ref |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=MAXROW( "Announcements", "วันที่ประกาศ", NOT(IN([ID_ประกาศ], SELECT(Acknowledge_Logs[ID_ประกาศ], [Email พนักงาน] = USEREMAIL()))) )` |
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
<summary><code>Type Qualifier</code> (JSON — 628 chars, click to expand)</summary>

```json
{"ReferencedTableName":"Announcements","ReferencedRootTableName":"Announcements","ReferencedType":"Text","ReferencedTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","ReferencedKeyColumn":"ID_ประกาศ","IsAPartOf":false,"RelationshipName":null,"InputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 4: วันที่และเวลารับทราบ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | วันที่และเวลารับทราบ |
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


#### Column 5: Email พนักงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | Email พนักงาน |
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
| Sensitive data | No |

<details>
<summary><code>Type Qualifier</code> (JSON — 142 chars, click to expand)</summary>

```json
{"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 6: ชื่อ - นามสกุล

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ชื่อ - นามสกุล |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=LOOKUP(USEREMAIL(), "ข้อมูลพนักงาน", "Email พนักงาน", "ชื่อ - นามสกุล")` |
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


#### Column 7: ทะเบียนรถ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ทะเบียนรถ |
| Type | Text |
| Type Qualifier | *(JSON — see details below)* |
| Initial value | `=LOOKUP(USEREMAIL(), "ข้อมูลพนักงาน", "Email พนักงาน", "ทะเบียนรถ")` |
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


#### Column 8: เลือกเพื่อยืนยัน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | เลือกเพื่อยืนยัน |
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
<summary><code>Type Qualifier</code> (JSON — 612 chars, click to expand)</summary>

```json
{"EnumValues":["ข้าพเจ้าได้อ่านและเข้าใจประกาศนี้แล้ว","ติดขัดปัญหา ไม่สามารถปฏิบัติตามได้"],"AllowOtherValues":false,"AutoCompleteOtherValues":true,"BaseType":"Text","BaseTypeQualifier":"{\"MaxLength\":null,\"MinLength\":null,\"LongTextFormatting\":\"PlainText\",\"IsMulticolumnKey\":false,\"Valid_If\":null,\"Error_Message_If_Invalid\":null,\"Show_If\":null,\"Required_If\":null,\"Editable_If\":null,\"Reset_If\":null,\"Suggested_Values\":null}","EnumInputMode":"Auto","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 9: หมายเหตุ

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
| Fixed definition? | No |
| Editable Initial Value? | Yes |
| Virtual? | No |
| LocaleName | en-GB |
| Searchable | Yes |
| Scannable | No |
| Sensitive data | No |
| Display name | `=IFS( [ID_ประกาศ].[หัวข้อประกาศ] = "สอบถามและรับฟังความคิด เห็น", "ตอบคำถาม / แสดงความคิดเห็น", [เลือกเพื่อยืนยัน] = "ติดขัด ปัญหา ไม่สามารถปฏิบัติตามได้", "อธิบายเหตุผลที่ ไม่สามารถปฏิบัติ ตามได้", TRUE, "หมายเหตุ" )` |

<details>
<summary><code>Type Qualifier</code> (JSON — 368 chars, click to expand)</summary>

```json
{"MaxLength":null,"MinLength":null,"LongTextFormatting":"PlainText","IsMulticolumnKey":false,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=OR(\n\n [เลือกเพื่อยืนยัน] = \"ติดขัดปัญหาไม่สามารถปฏิบัติตามได้\",\n\n [ID_ประกาศ].[หัวข้อประกาศ] =\"สอบถามและรับฟังความคิดเห็น\"\n\n)","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 10: ลงชื่อพนักงาน

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ลงชื่อพนักงาน |
| Type | Signature |
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
<summary><code>Type Qualifier</code> (JSON — 184 chars, click to expand)</summary>

```json
{"SaveExternal":true,"FolderLocation":null,"Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":null,"Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>


#### Column 11: ข้อความประกาศ

| Property | Value |
|---|---|
| Visible? | ALWAYS |
| Column name | ข้อความประกาศ |
| Type | Show |
| Type Qualifier | *(JSON — see details below)* |
| App formula | `=CONCATENATE( "📢 ประกาศ/แจ้งเตือน" "เรื่อง: ", [ID_ประกาศ]. [หัวข้อประกาศ], " ---------------------- ", [ID_ประกาศ].[เนื้อหาประกาศ], " -- -------------------- ", [ID_ประกาศ].[Note], )` |
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
<summary><code>Type Qualifier</code> (JSON — 226 chars, click to expand)</summary>

```json
{"Category":"Page_Header","Content":"=[ข้อความประกาศ]","Valid_If":null,"Error_Message_If_Invalid":null,"Show_If":"=CONTEXT(\"ViewType\") =\"Form\"","Required_If":null,"Editable_If":null,"Reset_If":null,"Suggested_Values":null}
```

</details>

