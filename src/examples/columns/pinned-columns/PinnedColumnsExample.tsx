"use client";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { pinnedColumnsColDefs } from "@/src/examples/columns/pinned-columns/pinnedColumnsColDefs";
import { OmniGrid } from "@omnigrid/react";

export function PinnedColumnsExample() {
    const data = useSpeedingTicketsDS();

    return <OmniGrid columns={pinnedColumnsColDefs} data={data} style={{ height: "100%", width: "100%" }} />;
}
