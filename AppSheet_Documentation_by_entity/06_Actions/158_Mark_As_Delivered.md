# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A158. Mark_As_Delivered

*Source page: p.1889*

| Property | Value |
|---|---|
| Action name | Mark_As_Delivered |
| Do this | SET_COLUMN_VALUE |
| For a record of this table | ตารางงานประจำวัน |
| Bulk action? | Yes |
| Modifies data? | Yes |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| Action icon |  |
| Attach to column | DeliveryStatus |
| Set this column | DeliveryStatus |
| To this value | `="จัดส่งเรียบร้อย"` |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 313 chars, click to expand)</summary>

```json
{"Assignments":[{"ColumnToEdit":"DeliveryStatus","NewColumnValue":"=\"จัดส่งเรียบร้อย\""}],"ColumnToEdit":"DeliveryStatus","NewColumnValue":"=\"จัดส่งเรียบร้อย\"","InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":true,"BulkApplicable":true}
```

</details>

