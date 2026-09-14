# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A131. View Map (ที่อยู่ปลายทาง_LatLong_Api)

*Source page: p.1873*

| Property | Value |
|---|---|
| Action name | View Map (ที่อยู่ปลายทาง_LatLong_Api) |
| Do this | NAVIGATE_APP |
| For a record of this table | SCGนครหลวงJWDภูมิภาค |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | ที่อยู่ปลายทาง_LatLong_Api |
| Set this column | ที่อยู่ปลายทาง_LatLong_Api |
| Only if this condition is true | NOT(ISBLANK([ที่อยู่ปลายทาง_LatLong_Api])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 487 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=map&table=SCG%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87JWD%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84&mapcolumn=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B2%E0%B8%87_LatLong_Api&row=\",ENCODEURL([_THISROW]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

