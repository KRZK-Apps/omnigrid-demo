import { AlchemyRow } from "@/src/data/types";
import { DangerLevelRenderer } from "@/src/examples/common/renderers/DangerLevelRenderer";
import { ColumnDef } from "@omnigrid/react";

export const groupedColumnsResizeColDefs: ColumnDef<AlchemyRow>[] = [
    { id: "id", field: "id", header: "ID", width: 110, resizable: false },
    {
        id: "product",
        header: "Product",
        children: [
            { id: "category", field: "category", header: "Category", width: 170, minWidth: 120 },
            { id: "subCategory", field: "subCategory", header: "Sub Category", flex: 1, minWidth: 180 },
            { id: "itemName", field: "itemName", header: "Item Name", flex: 1, minWidth: 180 },
        ],
    },
    {
        id: "warehouse",
        header: "Warehouse",
        children: [
            {
                id: "dangerLevel",
                field: "dangerLevel",
                header: "Danger Level",
                width: 160,
                minWidth: 120,
                cellRenderer: DangerLevelRenderer,
            },
            { id: "stockQuantity", field: "stockQuantity", header: "Qty.", width: 100, minWidth: 70, align: "right" },
        ],
    },
    {
        id: "pricing",
        header: "Pricing",
        children: [
            {
                id: "pricePerUnit",
                field: "pricePerUnit",
                header: "Price Per Unit",
                width: 150,
                minWidth: 110,
                align: "right",
                valueFormatter: (value: unknown) => (typeof value === "number" ? `$ ${value.toFixed(2)}` : String(value ?? "")),
            },
            {
                id: "totalValue",
                field: "totalValue",
                header: "Total Value",
                width: 150,
                minWidth: 110,
                align: "right",
                valueFormatter: (value: unknown) => (typeof value === "number" ? `$ ${value.toFixed(2)}` : String(value ?? "")),
            },
        ],
    },
];