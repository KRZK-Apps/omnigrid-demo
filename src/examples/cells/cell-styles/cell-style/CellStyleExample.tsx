"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { cellStyleExampleColDefs } from "./cellStyleExampleColDefs";

export function CellStyleExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={cellStyleExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "100%", width: "100%" }} />;
}
