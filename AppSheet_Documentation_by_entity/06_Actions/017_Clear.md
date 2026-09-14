# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A17. Clear

*Source page: p.1799*

| Property | Value |
|---|---|
| Action name | Clear |
| Do this | SET_COLUMN_VALUE |
| For a record of this table | ปริ๊นใบวางบิล |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| Action icon |  |
| Attach to column | ชื่องาน |
| Set this column | ชื่องาน |
| To this value | `=""` |
| Only if this condition is true | `=USERROLE() = ADMIN` |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 340 chars, click to expand)</summary>

```json
{"Assignments":[{"ColumnToEdit":"ชื่องาน","NewColumnValue":"=\"\""},{"ColumnToEdit":"ปริ๊นใบวางบิลแยกตามชื่องาน","NewColumnValue":"=\"\""}],"ColumnToEdit":"ชื่องาน","NewColumnValue":"=\"\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true}
```

</details>

