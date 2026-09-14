# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A118. View Map (ต้นทาง)

*Source page: p.1863*

| Property | Value |
|---|---|
| Action name | View Map (ต้นทาง) |
| Do this | NAVIGATE_APP |
| For a record of this table | ทำเบิกส่วนต่างScgวังน้อย |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | ต้นทาง |
| Set this column | ต้นทาง |
| Only if this condition is true | NOT(ISBLANK([ต้นทาง])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 463 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=map&table=%E0%B8%97%E0%B8%B3%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87Scg%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2&mapcolumn=%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87&row=\",ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

