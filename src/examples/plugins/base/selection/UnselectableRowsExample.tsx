"use client";

import { useEffect, useMemo, useState } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SelectionPlugin } from "@omnigrid/selection-plugin";

export function UnselectableRowsExample() {
    const data = useAlchemyDS();
    const [allowDisabledRows, setAllowDisabledRows] = useState(true);
    const selectionPlugin = useMemo(
        () =>
            new SelectionPlugin<AlchemyRow>({
                mode: "multiple",
                showHeaderCheckbox: true,
                showRowCheckboxes: true,
            }),
        [],
    );

    useEffect(() => {
        selectionPlugin.updateOptions({
            isRowSelectable: (row) => !allowDisabledRows || row.dangerLevel !== 5,
        });
    }, [allowDisabledRows, selectionPlugin]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 p-2">
                <button
                    type="button"
                    className="cursor-pointer border border-mint bg-transparent px-4 py-2 font-sans text-xs text-mint hover:bg-mint hover:text-white"
                    onClick={() => setAllowDisabledRows((allowDisabledRows) => !allowDisabledRows)}
                >
                    {allowDisabledRows ? "Disable" : "Enable"} unselectable rows
                </button>
                <span className="font-sans text-xs text-ink dark:text-ink-dark">Dynamically updates selection criteria without recreating the plugin</span>
            </div>
            <div className="flex-1 min-h-0">
                <OmniGrid
                    columns={alchemyMColDefs}
                    data={data}
                    getRowId={(row) => row.id}
                    plugins={[selectionPlugin]}
                    style={{ height: "480px", width: "100%" }}
                />
            </div>
        </div>
    );
}
