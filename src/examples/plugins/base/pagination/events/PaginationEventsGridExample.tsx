"use client";

import { useMemo, useState } from "react";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { SpeedingTicketRow } from "@/src/data/types";
import { speedTicketsMColDefs } from "@/src/examples/common/colDefs/speedTicketsMColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

interface PaginationEventLogEntry {
    id: number;
    message: string;
}

const TOTAL_ROWS: number = 1000;
const INITIAL_PAGE_SIZE: number = 20;

export function PaginationEventsGridExample() {
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(INITIAL_PAGE_SIZE);
    const [events, setEvents] = useState<PaginationEventLogEntry[]>([]);;
    const data = useSpeedingTicketsDS({
        offset: (page - 1) * pageSize,
        count: pageSize,
        delay: 200,
    });

    const paginationPlugin = useMemo(() => {
        let counter: number = 0;
        const nextId: () => number = () => ++counter;

        const pushEvent: (message: string) => void = (message) => {
            setEvents((prev) => [...prev.slice(-3), { id: nextId(), message }]);
        };

        return new PaginationPlugin<SpeedingTicketRow>({
            mode: "server",
            pageSize: INITIAL_PAGE_SIZE,
            pageSizes: [20, 50, 100],
            totalRows: TOTAL_ROWS,
            blocks: ["rowInfo", "navigation"],
            onChange: ({ page, pageSize }) => {
                pushEvent(`onChange — page: ${page}, pageSize: ${pageSize}`);
                setPage(page);
                setPageSize(pageSize);
            },
        });
    }, []);

    return (
        <>
            <OmniGrid
                columns={speedTicketsMColDefs}
                data={data}
                getRowId={(row) => row.ticketId}
                plugins={[paginationPlugin]}
                rowOverscan={20}
                style={{ height: "480px", width: "100%" }}
            />
            <div className="mt-2 max-h-20 w-full overflow-y-auto border border-slate bg-paper font-mono text-xs text-ink">
                <div className="p-1.5">
                    {events.length === 0 ? (
                        <span className="text-ink/50">No pagination events yet — navigate between pages.</span>
                    ) : (
                        events.map((entry) => <div key={entry.id}>{entry.message}</div>)
                    )}
                </div>
            </div>
        </>
    );
}
