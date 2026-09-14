# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A87. View Ref (ID_เอกสารนำกลับคืนคลัง)

*Source page: p.1842*

| Property | Value |
|---|---|
| Action name | View Ref (ID_เอกสารนำกลับคืนคลัง) |
| Do this | NAVIGATE_APP |
| For a record of this table | SCGนครหลวงJWDภูมิภาค |
| Bulk action? | No |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Display_Inline |
| Action order | 1 |
| Action icon |  |
| Attach to column | ID_Doc_Return |
| Set this column | ID_Doc_Return |
| Only if this condition is true | NOT(ISBLANK([ID_Doc_Return])) |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 225 chars, click to expand)</summary>

```json
{"NavigateTarget":"CONCATENATE(\"#page=detail&table=Doc_Return&row=\", ENCODEURL([ID_Doc_Return]))","Prominence":"Display_Inline","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":false}
```

</details>

