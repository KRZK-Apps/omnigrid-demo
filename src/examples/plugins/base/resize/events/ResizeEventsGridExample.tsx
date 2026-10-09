"use client";

import { useMemo, useState } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { resizeColumnExampleColDefs } from "@/src/examples/plugins/base/resize/basic/resizeColumnExampleColDefs";
import { OmniGrid } from "@omnigrid/react";
import { ResizePlugin } from "@omnigrid/resize-plugin";

interface ResizeEventLogEntry {
    id: number;
    message: string;
}

export function ResizeEventsGridExample() {
    const data = useAlchemyDS();
    const [events, setEvents] = useState<ResizeEventLogEntry[]>([]);

    const resizePlugin = useMemo(() => {
        let counter: number = 0;
        const nextId: () => number = () => ++counter;

        const pushEvent: (message: string) => void = (message) => {
            setEvents((prev) => [...prev.slice(-3), { id: nextId(), message }]);
        };

        return new ResizePlugin<AlchemyRow>({
            onResizeStart: (columnId: string, width: number) => {
                pushEvent(`onResizeStart — column: ${columnId}, width: ${width}px`);
            },
            onResize: (columnId: string, width: number) => {
                pushEvent(`onResize — column: ${columnId}, width: ${width}px`);
            },
            onResizeEnd: (columnId: string, width: number) => {
                pushEvent(`onResizeEnd — column: ${columnId}, width: ${width}px`);
            },
        });
    }, []);

    return (
        <>
            <OmniGrid
                columns={resizeColumnExampleColDefs}
                data={data}
                getRowId={(row) => row.id}
                plugins={[resizePlugin]}
                style={{ height: "480px", width: "100%" }}
            />
            <div className="mt-2 max-h-20 w-full overflow-y-auto border border-slate bg-paper font-mono text-xs text-ink">
                <div className="p-1.5">
                    {events.length === 0 ? (
                        <span className="text-ink/50">No resize events yet — drag a header handle.</span>
                    ) : (
                        events.map((entry) => <div key={entry.id}>{entry.message}</div>)
                    )}
                </div>
            </div>
        </>
    );
}
