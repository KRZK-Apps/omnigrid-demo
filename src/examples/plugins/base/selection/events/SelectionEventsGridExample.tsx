"use client";

import { useMemo, useState } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SelectionPlugin, SelectionState } from "@omnigrid/selection-plugin";

interface SelectionEventLogEntry {
    id: number;
    message: string;
}

export function SelectionEventsGridExample() {
    const data = useAlchemyDS();
    const [events, setEvents] = useState<SelectionEventLogEntry[]>([]);

    const selectionPlugin = useMemo(() => {
        let counter: number = 0;
        const nextId: () => number = () => ++counter;

        const pushEvent: (message: string) => void = (message) => {
            setEvents((prev) => [...prev.slice(-3), { id: nextId(), message }]);
        };

        return new SelectionPlugin<AlchemyRow>({
            mode: "multiple",
            showRowCheckboxes: true,
            onSelectionChange: (state: SelectionState<AlchemyRow>) => {
                const ids: string = state.selectedRowIds.join(", ");
                pushEvent(`onSelectionChange — selectedRowIds [${ids}]`);
            },
        });
    }, []);

    return (
        <>
            <OmniGrid
                columns={alchemyMColDefs}
                data={data}
                getRowId={(row) => row.id}
                plugins={[selectionPlugin]}
                style={{ height: "480px", width: "100%" }}
            />
            <div className="mt-2 max-h-20 w-full overflow-y-auto border border-slate bg-paper font-mono text-xs text-ink">
                <div className="p-1.5">
                    {events.length === 0 ? (
                        <span className="text-ink/50">No selection events yet — click rows or checkboxes.</span>
                    ) : (
                        events.map((entry) => <div key={entry.id}>{entry.message}</div>)
                    )}
                </div>
            </div>
        </>
    );
}
