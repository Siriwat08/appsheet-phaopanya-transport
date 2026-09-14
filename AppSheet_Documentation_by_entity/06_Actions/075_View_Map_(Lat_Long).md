# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A75. View Map (Lat / Long)

*Source page: p.1834*

| Property | Value |
|---|---|
| Action name | View Map (Lat / Long) |
| Do this | NAVIGATE_APP |
| For a record of this table | รับงานคืนได้เงิน200 |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | Lat / Long |
| Set this column | Lat / Long |
| Only if this condition is true | NOT(ISBLANK([Lat / Long])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 380 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=map&table=%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%B7%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99200&mapcolumn=Lat%20%2F%20Long&row=\",ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

