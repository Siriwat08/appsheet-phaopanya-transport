# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A18. CLEAR 2

*Source page: p.1800*

| Property | Value |
|---|---|
| Action name | CLEAR 2 |
| Do this | SET_COLUMN_VALUE |
| For a record of this table | PDFพนักงาน |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Display_Prominently |
| Action order | 1 |
| Action icon |  |
| Attach to column | ชื่องาน |
| Set this column | ชื่อ - นามสกุล |
| To this value | `=""` |
| Only if this condition is true | `=USERROLE() = ADMIN` |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 504 chars, click to expand)</summary>

```json
{"Assignments":[{"ColumnToEdit":"ชื่อ -นามสกุล","NewColumnValue":"=\"\""},{"ColumnToEdit":"StartDate","NewColumnValue":"=\"\""},{"ColumnToEdit":"EndDate","NewColumnValue":"=\"\""},{"ColumnToEdit":"Export to XLSX","NewColumnValue":"=\"\""},{"ColumnToEdit":"ชื่อไฟล์","NewColumnValue":"=\"\""}],"ColumnToEdit":"ชื่อ -นามสกุล","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Display_Prominently","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true}
```

</details>

