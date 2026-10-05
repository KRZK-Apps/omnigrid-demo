"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { getCellClassExampleColDefs } from "./getCellClassExampleColDefs";

import "./getCellClassExample.css";

export function GetCellClassExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={getCellClassExampleColDefs} data={data} getRowId={(row) => row.id} style={{ height: "480px", width: "100%" }} />;
}
