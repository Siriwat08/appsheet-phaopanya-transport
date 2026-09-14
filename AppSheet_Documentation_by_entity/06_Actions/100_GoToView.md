# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A100. GoToView

*Source page: p.1850*

| Property | Value |
|---|---|
| Action name | GoToView |
| Do this | NAVIGATE_APP |
| For a record of this table | หน้าหลัก |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| Action icon |  |
| Attach to column | Link |
| Only if this condition is true | `=COUNT( SELECT( Announcements[ID_ประกาศ], NOT(IN([ID_ประกาศ], SELECT(Acknowledge_Logs[ID_ประกาศ],` |
| Disable automatic updates? | [Email พนักงาน] = USEREMAIL()))) ) ) = 0No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 165 chars, click to expand)</summary>

```json
{"NavigateTarget":"=LINKTOVIEW([Link])","Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

