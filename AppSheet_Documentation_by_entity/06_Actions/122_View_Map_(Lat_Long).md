# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A122. View Map (Lat/Long)

*Source page: p.1866*

| Property | Value |
|---|---|
| Action name | View Map (Lat/Long) |
| Do this | NAVIGATE_APP |
| For a record of this table | แจ้งปัญหาระหว่างวัน |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | Lat/Long |
| Set this column | Lat/Long |
| Only if this condition is true | NOT(ISBLANK([Lat/Long])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 398 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=map&table=%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99&mapcolumn=Lat%2FLong&row=\",ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

