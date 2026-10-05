"use client";

import { useMinionsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { customCellRendererColDefs } from "./customCellRendererColDefs";

export function CustomCellRendererGridExample() {
    const data = useMinionsDS();

    return <OmniGrid columns={customCellRendererColDefs} data={data} style={{ height: "480px", width: "100%" }} />;
}
