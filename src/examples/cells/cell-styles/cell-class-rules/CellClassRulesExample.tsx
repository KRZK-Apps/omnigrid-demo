"use client";

import { useMemo, useState } from "react";

import { useMinionsDS } from "@/src/data/dataService";
import { MinionRow } from "@/src/data/types";
import { ColumnDef, OmniGrid } from "@omnigrid/react";

import { getCellClassRulesExampleColDefs } from "./cellClassRulesExampleColDefs";

import "./cellClassRulesExample.css";

export function CellClassRulesExample() {
    const data = useMinionsDS();
    const [highlightHighSalary, setHighlightHighSalary] = useState(false);
    const columns: ColumnDef<MinionRow>[] = useMemo<ColumnDef<MinionRow>[]>(() => getCellClassRulesExampleColDefs(highlightHighSalary), [highlightHighSalary]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 p-2">
                <button
                    type="button"
                    className="cursor-pointer border border-mint bg-transparent px-4 py-2 font-sans text-xs text-mint hover:bg-mint hover:text-white"
                    onClick={() => setHighlightHighSalary(!highlightHighSalary)}
                >
                    {highlightHighSalary ? "Disable" : "Enable"} high-salary rule
                </button>
                <span className="font-sans text-xs text-ink dark:text-ink-dark">Rules re-evaluate and apply in a single batch across all visible cells.</span>
            </div>
            <div className="flex-1 min-h-0">
                <OmniGrid columns={columns} data={data} getRowId={(row) => row.id} style={{ height: "480px", width: "100%" }} />
            </div>
        </div>
    );
}
