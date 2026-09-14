# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A178. Compose Email (Scan_By)

*Source page: p.1903*

| Property | Value |
|---|---|
| Action name | Compose Email (Scan_By) |
| Do this | EMAIL |
| For a record of this table | ScanDocs |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | Scan_By |
| Set this column | Scan_By |
| Only if this condition is true | NOT(ISBLANK([Scan_By])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 175 chars, click to expand)</summary>

```json
{"EmailTo":"[Scan_By]","Subject":null,"Body":null,"Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

