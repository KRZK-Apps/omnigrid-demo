"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { paginationColDefs } from "@/src/examples/plugins/base/pagination/paginationColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

export function PaginationBlocksGridExample() {
    const data = useAlchemyDS({ count: 1000 });
    const paginationPlugin = useMemo(
        () =>
            new PaginationPlugin<AlchemyRow>({
                blocks: [
                    { name: "rowInfo", slot: "top", position: "start" },
                    { name: "pageSize", slot: "top", position: "end" },
                    { name: "navigation", slot: "bottom", position: "end" },
                ],
            }),
        [],
    );

    return (
        <OmniGrid
            columns={paginationColDefs}
            data={data}
            getRowId={(row) => row.id}
            plugins={[paginationPlugin]}
            rowOverscan={20}
            style={{ height: "480px", width: "100%" }}
        />
    );
}
