# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A5. Compose Email (Email ผู้อนุมัติ)

*Source page: p.1792*

| Property | Value |
|---|---|
| Action name | Compose Email (Email ผู้อนุมัติ) |
| Do this | EMAIL |
| For a record of this table | ข้อมูลการวางบิล |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | Email ผู้อนุมัติ |
| Set this column | Email ผู้อนุมัติ |
| Only if this condition is true | NOT(ISBLANK([Email ผู้อนุมัติ])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 184 chars, click to expand)</summary>

```json
{"EmailTo":"[Email ผู้อนุมัติ]","Subject":null,"Body":null,"Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

