import { MinionRow } from "@/src/data/types";
import { CellRenderParams, ColumnDef } from "@omnigrid/react";

export const getCellClassExampleColDefs: ColumnDef<MinionRow>[] = [
    { id: "id", field: "id", header: "ID", width: 90 },
    { id: "name", field: "name", header: "Name", flex: 1, minWidth: 180 },
    { id: "boss", field: "boss", header: "Boss", flex: 1, minWidth: 160 },
    {
        id: "salaryGold",
        field: "salaryGold",
        header: "Salary (Gold)",
        width: 120,
        align: "right",
        getCellClass: ({ data }: CellRenderParams<MinionRow>) => (data.salaryGold >= 3000 ? "demo-cell-high-salary" : undefined),
    },
    {
        id: "unionComplaints",
        field: "unionComplaints",
        header: "Complaints",
        width: 150,
        align: "center",
        getCellClass: ({ data }: CellRenderParams<MinionRow>) => (data.unionComplaints >= 20 ? "demo-cell-complainer" : undefined),
    },
    { id: "healthStatus", field: "healthStatus", header: "Health", width: 150 },
];
