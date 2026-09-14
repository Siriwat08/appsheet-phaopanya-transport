# เผ่าปัญญาทรานสปอร์ต-915154893 — Application Documentation (Full)

> Source: `Application Documentation(2).PDF` (1,924 pages, Google AppSheet documentation export) · Generated at: 6/9/2569 16:31:50 · App version: 1.004631


# A181. ScanStatus

*Source page: p.1905*

| Property | Value |
|---|---|
| Action name | ScanStatus |
| Do this | REF_ACTION |
| For a record of this table | ScanDocs |
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
<summary><code>With these properties</code> (JSON — 396 chars, click to expand)</summary>

```json
{"ReferencedTable":"ตารางงานประจำวัน","ReferencedRows":"=SELECT(\n ตารางงานประจำวัน[ID_งานประจำวัน],\n IN([Invoice No], LIST([_THISROW].[Scan_Invoice],[_THISROW].[Select_Invoice]))\n)","ReferencedAction":"UpdateScanStatus","InputAssignments":[],"InputParametersUsed":null,"Prominence":"Do_Not_Display","NeedsConfirmation":false,"ConfirmationMessage":"","ModifiesData":false,"BulkApplicable":true}
```

</details>

