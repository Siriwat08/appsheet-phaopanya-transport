# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A162. New Action

*Source page: p.1892*

| Property | Value |
|---|---|
| Action name | New Action |
| Do this | REF_ACTION |
| For a record of this table | แจ้งปัญหาระหว่างวัน |
| Bulk action? | Yes |
| Modifies data? | No |
| Needs confirmation? | No |
| Prominence | Do_Not_Display |
| Action order | 1 |
| Action icon |  |
| Only if this condition is true | true |
| Disable automatic updates? | No |
| Does this action apply to the whole table? | No |
| Visible? | ALWAYS |
| With these properties | *(JSON — see details below)* |

<details>
<summary><code>With these properties</code> (JSON — 362 chars, click to expand)</summary>

```json
{"ReferencedTable":"ตารางงานประจำวัน","ReferencedRows":"=SELECT(ตารางงานประจำวัน[ID_งานประจำวัน], \n IN([Invoice No], [_THISROW].[InvoiceNo])\n)","ReferencedAction":"Mark_As_Delivered_not","InputAssignments":[],"InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":true}
```

</details>

