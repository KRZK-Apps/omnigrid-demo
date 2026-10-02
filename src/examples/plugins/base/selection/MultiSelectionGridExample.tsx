"use client";

import { useMemo, useState } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SelectionPlugin, SelectionState } from "@omnigrid/selection-plugin";

export function MultiSelectionGridExample() {
    const data = useAlchemyDS();
    const [selectedRows, setSelectedRows] = useState<AlchemyRow[]>([]);

    const onSelectionChange = (state: SelectionState<AlchemyRow>) => setSelectedRows(state.selectedRows);

    const selectionPlugin = useMemo(
        () =>
            new SelectionPlugin<AlchemyRow>({
                mode: "multiple",
                onSelectionChange,
            }),
        [setSelectedRows],
    );

    return (
        <div className="flex h-full min-h-0 flex-col gap-2">
            <div className="rounded border border-mist p-2 font-sans text-xs dark:border-mist-dark">
                <p className="mb-2 font-semibold">
                    Selected rows: <span aria-live="polite">{selectedRows.length}</span>
                </p>
                {selectedRows.length === 0 ? (
                    <p className="text-slate dark:text-slate-dark">Click rows to select them. Hold Shift to select a range.</p>
                ) : (
                    <ul className="flex max-h-20 flex-wrap gap-2 overflow-auto">
                        {selectedRows.map((row) => (
                            <li key={row.id} className="rounded bg-mint/10 px-2 py-1 text-ink dark:text-ink-dark">
                                {row.id} — {row.itemName}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="min-h-0 flex-1">
                <OmniGrid
                    columns={alchemyMColDefs}
                    data={data}
                    getRowId={(row) => row.id}
                    plugins={[selectionPlugin]}
                    style={{ height: "100%", width: "100%" }}
                />
            </div>
        </div>
    );
}
