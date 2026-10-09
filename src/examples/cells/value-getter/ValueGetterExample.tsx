"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { valueGetterExampleColDefs } from "./valueGetterExampleColDefs";

export function ValueGetterExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={valueGetterExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "480px", width: "100%" }} />;
}
