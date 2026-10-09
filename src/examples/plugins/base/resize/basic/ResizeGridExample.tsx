"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { resizeColumnExampleColDefs } from "@/src/examples/plugins/base/resize/basic/resizeColumnExampleColDefs";
import { OmniGrid } from "@omnigrid/react";
import { ResizePlugin } from "@omnigrid/resize-plugin";

export function ResizeGridExample() {
    const data = useAlchemyDS();
    const resizePlugin = useMemo(() => new ResizePlugin<AlchemyRow>(), []);

    return (
        <OmniGrid
            columns={resizeColumnExampleColDefs}
            data={data}
            getRowId={(row) => row.id}
            plugins={[resizePlugin]}
            style={{ height: "480px", width: "100%" }}
        />
    );
}
