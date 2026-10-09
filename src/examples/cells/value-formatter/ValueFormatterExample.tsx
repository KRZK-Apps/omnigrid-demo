"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { valueFormatterExampleColDefs } from "./valueFormatterExampleColDefs";

export function ValueFormatterExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={valueFormatterExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "480px", width: "100%" }} />;
}
