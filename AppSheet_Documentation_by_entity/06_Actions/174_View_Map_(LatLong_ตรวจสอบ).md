# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A174. View Map (LatLong_ตรวจสอบ)

*Source page: p.1900*

| Property | Value |
|---|---|
| Action name | View Map (LatLong_ตรวจสอบ) |
| Do this | NAVIGATE_APP |
| For a record of this table | แจ้งปัญหาระหว่างวัน |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | LatLong_ตรวจสอบ |
| Set this column | LatLong_ตรวจสอบ |
| Only if this condition is true | NOT(ISBLANK([LatLong_ตรวจสอบ])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 459 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=map&table=%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99&mapcolumn=LatLong_%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A&row=\",ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

