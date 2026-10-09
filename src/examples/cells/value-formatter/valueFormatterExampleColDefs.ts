import { MinionRow } from "@/src/data/types";
import { ColumnDef } from "@omnigrid/react";

export const valueFormatterExampleColDefs: ColumnDef<MinionRow>[] = [
    { id: "id", field: "id", header: "ID", width: 90 },
    { id: "name", field: "name", header: "Name", flex: 1, minWidth: 180 },
    { id: "boss", field: "boss", header: "Boss", flex: 1, minWidth: 160 },
    {
        id: "salaryGold",
        field: "salaryGold",
        header: "Salary",
        width: 120,
        align: "right",
        valueFormatter: (value) => `$${(value as number).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
    },
    { id: "unionComplaints", field: "unionComplaints", header: "Complaints", width: 120, align: "center" },
    { id: "healthStatus", field: "healthStatus", header: "Health", width: 120 },
];
