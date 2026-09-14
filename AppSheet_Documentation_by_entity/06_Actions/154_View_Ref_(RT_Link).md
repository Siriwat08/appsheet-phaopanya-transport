# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A154. View Ref (RT_Link)

*Source page: p.1887*

| Property | Value |
|---|---|
| Action name | View Ref (RT_Link) |
| Do this | NAVIGATE_APP |
| For a record of this table | แจ้งปัญหาระหว่างวัน |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | RT_Link |
| Set this column | RT_Link |
| Only if this condition is true | NOT(ISBLANK([RT_Link])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 291 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=detail&table=%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%87%E0%B8%B2%E0%B8%99RT&row=\",ENCODEURL([RT_Link]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

