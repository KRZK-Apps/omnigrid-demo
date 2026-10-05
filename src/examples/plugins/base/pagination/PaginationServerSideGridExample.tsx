"use client";

import { useMemo, useState } from "react";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { SpeedingTicketRow } from "@/src/data/types";
import { speedTicketsMColDefs } from "@/src/examples/common/colDefs/speedTicketsMColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

const TOTAL_ROWS = 1000;
const INITIAL_PAGE_SIZE = 20;

export function PaginationServerSideGridExample() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(INITIAL_PAGE_SIZE);
    const data = useSpeedingTicketsDS({
        offset: (page - 1) * pageSize,
        count: pageSize,
        delay: 200,
    });

    const paginationPlugin = useMemo(
        () =>
            new PaginationPlugin<SpeedingTicketRow>({
                mode: "server",
                pageSize: INITIAL_PAGE_SIZE,
                pageSizes: [20, 50, 100],
                totalRows: TOTAL_ROWS,
                blocks: ["rowInfo", "navigation"],
                onChange: ({ page, pageSize }) => {
                    setPage(page);
                    setPageSize(pageSize);
                },
            }),
        [setPage, setPageSize],
    );

    return (
        <OmniGrid
            columns={speedTicketsMColDefs}
            data={data}
            getRowId={(row) => row.ticketId}
            plugins={[paginationPlugin]}
            rowOverscan={20}
            style={{ height: "480px", width: "100%" }}
        />
    );
}
