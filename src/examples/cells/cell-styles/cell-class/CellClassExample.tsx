"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { cellClassExampleColDefs } from "./cellClassExampleColDefs";

import "./cellClassExample.css";

export function CellClassExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={cellClassExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "100%", width: "100%" }} />;
}
