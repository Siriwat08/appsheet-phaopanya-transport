# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A211. View Ref (ID_ประกาศ)

*Source page: p.1923*

| Property | Value |
|---|---|
| Action name | View Ref (ID_ประกาศ) |
| Do this | NAVIGATE_APP |
| For a record of this table | Acknowledge_Logs |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | ID_ประกาศ |
| Set this column | ID_ประกาศ |
| Only if this condition is true | NOT(ISBLANK([ID_ประกาศ])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 224 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=detail&table=Announcements&row=\", ENCODEURL([ID_ประกาศ]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

