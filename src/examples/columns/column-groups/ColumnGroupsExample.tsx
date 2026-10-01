"use client";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { OmniGrid } from "@omnigrid/react";

import { columnGroupsColDefs } from "./columnGroupsColDefs";

export function ColumnGroupsExample() {
    const data = useSpeedingTicketsDS();

    return <OmniGrid columns={columnGroupsColDefs} data={data} style={{ height: "100%", width: "100%" }} />;
}
