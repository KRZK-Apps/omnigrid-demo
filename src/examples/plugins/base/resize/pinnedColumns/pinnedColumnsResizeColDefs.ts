import { AlchemyRow } from "@/src/data/types";
import { DangerLevelRenderer } from "@/src/examples/common/renderers/DangerLevelRenderer";
import { ColumnDef } from "@omnigrid/react";

export const pinnedColumnsResizeColDefs: ColumnDef<AlchemyRow>[] = [
    // Pinned left — resize handle stays on the column's right edge.
    { id: "id", field: "id", header: "ID", width: 110, pinned: "left" },
    { id: "category", field: "category", header: "Category", width: 170, minWidth: 120, pinned: "left" },
    // Scrollable centre.
    { id: "subCategory", field: "subCategory", header: "Sub Category", flex: 1, minWidth: 180 },
    { id: "itemName", field: "itemName", header: "Item Name", flex: 1, minWidth: 180 },
    { id: "dangerLevel", field: "dangerLevel", header: "Danger Level", width: 150, cellRenderer: DangerLevelRenderer },
    { id: "stockQuantity", field: "stockQuantity", header: "Qty.", width: 90, align: "right" },
    // Pinned right — resize handle sits on the column's left edge.
    {
        id: "pricePerUnit",
        field: "pricePerUnit",
        header: "Price Per Unit",
        width: 150,
        align: "right",
        pinned: "right",
        valueFormatter: (value: unknown) => (typeof value === "number" ? `$ ${value.toFixed(2)}` : String(value ?? "")),
    },
    {
        id: "totalValue",
        field: "totalValue",
        header: "Total Value",
        width: 150,
        align: "right",
        pinned: "right",
        valueFormatter: (value: unknown) => (typeof value === "number" ? `$ ${value.toFixed(2)}` : String(value ?? "")),
    },
];