import { MinionRow } from "@/src/data/types";
import { CellRenderParams, ColumnDef } from "@omnigrid/react";

export const getCellClassRulesExampleColDefs = (highlightHighSalary: boolean): ColumnDef<MinionRow>[] => [
    { id: "id", field: "id", header: "ID", width: 90 },
    { id: "name", field: "name", header: "Name", flex: 1, minWidth: 180 },
    { id: "boss", field: "boss", header: "Boss", flex: 1, minWidth: 160 },
    {
        id: "salaryGold",
        field: "salaryGold",
        header: "Salary (Gold)",
        width: 120,
        align: "right",
        cellClassRules: {
            "demo-cell-high-salary": ({ data }: CellRenderParams<MinionRow>) => highlightHighSalary && data.salaryGold >= 3000,
            "demo-cell-low-salary": ({ data }: CellRenderParams<MinionRow>) => data.salaryGold < 100,
        },
    },
    {
        id: "unionComplaints",
        field: "unionComplaints",
        header: "Complaints",
        width: 150,
        align: "center",
        cellClassRules: {
            "demo-cell-complainer": ({ data }: CellRenderParams<MinionRow>) => data.unionComplaints >= 20,
        },
    },
    { id: "healthStatus", field: "healthStatus", header: "Health", width: 150 },
];
