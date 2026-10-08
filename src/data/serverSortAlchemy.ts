import { useEffect, useState } from "react";

import { getAlchemyRows } from "./dataService";
import type { AlchemyRow } from "./types";
import type { SortModelItem } from "@omnigrid/sorting-plugin";

const ALCHEMY_SORT_FIELDS: Record<string, keyof AlchemyRow> = {
    id: "id",
    category: "category",
    subCategory: "subCategory",
    itemName: "itemName",
    dangerLevel: "dangerLevel",
    stockQuantity: "stockQuantity",
    pricePerUnit: "pricePerUnit",
    totalValue: "totalValue",
};

function compareValues(left: unknown, right: unknown): number {
    if (left == null && right == null) return 0;
    if (left == null) return -1;
    if (right == null) return 1;
    if (typeof left === "number" && typeof right === "number") return left - right;

    return String(left).localeCompare(String(right), undefined, {
        numeric: true,
        sensitivity: "base",
    });
}

function sortByModel(rows: AlchemyRow[], sortModel: SortModelItem[]): AlchemyRow[] {
    if (sortModel.length === 0) return rows;
    return [...rows].sort((left, right) => {
        for (const { columnId, direction } of sortModel) {
            const field = ALCHEMY_SORT_FIELDS[columnId];
            if (!field) continue;
            const result = compareValues(left[field], right[field]);
            if (result !== 0) return direction === "asc" ? result : -result;
        }
        return 0;
    });
}

export async function getSortedAlchemyRows(sortModel: SortModelItem[], count: number): Promise<AlchemyRow[]> {
    const base = await getAlchemyRows({ count, delay: 200 });
    return sortByModel(base, sortModel);
}

export function useServerSortedAlchemyDS(sortModel: SortModelItem[]): AlchemyRow[] {
    const [rows, setRows] = useState<AlchemyRow[]>([]);

    useEffect(() => {
        let active = true;
        getSortedAlchemyRows(sortModel, 100).then((result) => {
            if (active) setRows(result);
        });

        return () => {
            active = false;
        };
    }, [sortModel]);

    return rows;
}
