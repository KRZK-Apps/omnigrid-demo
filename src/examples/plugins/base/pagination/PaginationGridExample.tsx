"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { paginationColDefs } from "@/src/examples/plugins/base/pagination/paginationColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

export function PaginationGridExample() {
    const data = useAlchemyDS();
    const paginationPlugin = useMemo(
        () =>
            new PaginationPlugin<AlchemyRow>({
                pageSize: 20,
                quickJump: true,
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
            style={{ height: "100%", width: "100%" }}
        />
    );
}
