import { MinionRow } from "@/src/data/types";
import { CellRenderParams, ColumnDef } from "@omnigrid/react";

export const getCellStyleExampleColDefs: ColumnDef<MinionRow>[] = [
    { id: "id", field: "id", header: "ID", width: 90 },
    { id: "name", field: "name", header: "Name", flex: 1, minWidth: 180 },
    { id: "boss", field: "boss", header: "Boss", flex: 1, minWidth: 160 },
    {
        id: "salaryGold",
        field: "salaryGold",
        header: "Salary (Gold)",
        width: 120,
        align: "right",
        getCellStyle: ({ data }: CellRenderParams<MinionRow>) => (data.salaryGold >= 3000 ? { backgroundColor: "rgba(255, 215, 0, 0.15)" } : undefined),
    },
    {
        id: "unionComplaints",
        field: "unionComplaints",
        header: "Complaints",
        width: 150,
        align: "center",
        getCellStyle: ({ data }: CellRenderParams<MinionRow>) => (data.unionComplaints >= 20 ? { backgroundColor: "rgba(255, 99, 71, 0.12)" } : undefined),
    },
    { id: "healthStatus", field: "healthStatus", header: "Health", width: 150 },
];
