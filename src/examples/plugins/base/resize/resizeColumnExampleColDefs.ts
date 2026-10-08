import { AlchemyRow } from "@/src/data/types";
import { DangerLevelRenderer } from "@/src/examples/common/renderers/DangerLevelRenderer";
import { ColumnDef } from "@omnigrid/react";

export const resizeColumnExampleColDefs: ColumnDef<AlchemyRow>[] = [
    { id: "id", field: "id", header: "ID", width: 100, pinned: "left" },
    { id: "id2", field: "id", header: "ID", width: 100, resizable: false },
    { id: "category", field: "category", header: "Category", flex: 1, minWidth: 150 },
    { id: "subCategory", field: "subCategory", header: "Sub Category", flex: 1, minWidth: 150 },
    { id: "itemName", field: "itemName", header: "Item Name", flex: 1, minWidth: 150 },
    { id: "dangerLevel", field: "dangerLevel", header: "Danger Level", width: 150, cellRenderer: DangerLevelRenderer },
    { id: "stockQuantity", field: "stockQuantity", header: "Qty.", width: 60, align: "right", pinned: "right" },
    { id: "stockQuantity2", field: "stockQuantity", header: "Qty.", width: 60, align: "right", pinned: "right" },
];
