import { MinionRow } from "@/src/data/types";
import { MinionHealthRenderer } from "@/src/examples/common/renderers/MinionHealthRenderer";
import { MinionSalaryRenderer } from "@/src/examples/common/renderers/MinionSalaryRenderer";
import { CellRenderParams, ColumnDef } from "@omnigrid/react";


export const customCellRendererColDefs: ColumnDef<MinionRow>[] = [
    { 
        id: "id", 
        field: "id", 
        header: "ID", 
        width: 90, 
        // Inline cell renderer
        cellRenderer: ({ value }: CellRenderParams<MinionRow>) => (
            <span 
                style={{ 
                    backgroundColor: "#F3F4F6", 
                    borderRadius: "4px", 
                    color: "#4B5563", 
                    fontFamily: "ui-monospace, monospace", 
                    fontSize: "12px", 
                    fontWeight: 500, 
                    padding: "2px 6px",
                }}
            >
                #{value as string}
            </span>
        ),
    },
    { id: "name", field: "name", header: "Name", flex: 1, minWidth: 180 },
    { id: "boss", field: "boss", header: "Boss", flex: 1, minWidth: 160 },
    { id: "specialty", field: "specialty", header: "Specialty", flex: 1, minWidth: 160 },
    {
        id: "salaryGold",
        field: "salaryGold",
        header: "Salary (Gold)",
        width: 130,
        align: "right",
        // Component cell renderer
        cellRenderer: MinionSalaryRenderer,
    },
    {
        id: "healthStatus",
        field: "healthStatus",
        header: "Health",
        width: 150,
        // Component cell renderer
        cellRenderer: MinionHealthRenderer,
    },
    { id: "unionComplaints", field: "unionComplaints", header: "Complaints", width: 150, align: "center" },
];
