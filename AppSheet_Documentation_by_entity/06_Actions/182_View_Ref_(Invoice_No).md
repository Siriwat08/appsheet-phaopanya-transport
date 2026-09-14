# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A182. View Ref (Invoice_No)

*Source page: p.1905*

| Property | Value |
|---|---|
| Action name | View Ref (Invoice_No) |
| Do this | NAVIGATE_APP |
| For a record of this table | ScanDocs |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | Invoice_No |
| Set this column | Invoice_No |
| Only if this condition is true | NOT(ISBLANK([Invoice_No])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 356 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=detail&table=%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%A7%E0%B8%B1%E0%B8%99&row=\", ENCODEURL([Invoice_No]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

