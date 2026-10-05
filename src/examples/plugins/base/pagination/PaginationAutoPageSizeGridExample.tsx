"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { paginationColDefs } from "@/src/examples/plugins/base/pagination/paginationColDefs";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { OmniGrid } from "@omnigrid/react";

export function PaginationAutoPageSizeGridExample() {
    const data = useAlchemyDS({ count: 1000 });
    const paginationPlugin = useMemo(
        () =>
            new PaginationPlugin<AlchemyRow>({
                pageSize: 0,
                pageSizes: [ 20, 50, 100],
                blocks: ["pageSize", "navigation"],
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
            style={{ height: "395px", width: "100%" }}
        />
    );
}
