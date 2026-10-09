"use client";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { headerRendererColDefs } from "@/src/examples/columns/header-renderer/headerRendererColDefs";
import { OmniGrid } from "@omnigrid/react";

export function HeaderRendererExample() {
    const data = useSpeedingTicketsDS();

    return <OmniGrid columns={headerRendererColDefs} data={data} style={{ height: "480px", width: "100%" }} />;
}