"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { getCellStyleExampleColDefs } from "./getCellStyleExampleColDefs";

export function GetCellStyleExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={getCellStyleExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "480px", width: "100%" }} />;
}
