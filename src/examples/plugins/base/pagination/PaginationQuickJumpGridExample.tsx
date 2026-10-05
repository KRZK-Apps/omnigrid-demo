"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { paginationColDefs } from "@/src/examples/plugins/base/pagination/paginationColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

export function PaginationQuickJumpGridExample() {
    const data = useAlchemyDS({ count: 1000 });
    const paginationPlugin = useMemo(
        () =>
            new PaginationPlugin<AlchemyRow>({
                pageSize: 50,
                quickJump: true,
                pageInputCharacters: 3,
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
