"use client";

import { useSpeedingTicketsDS } from "@/src/data/dataService";
import { definitionColDefs } from "@/src/examples/columns/definition/definitionColDefs";
import { OmniGrid } from "@omnigrid/react";

export function DefinitionExample() {
    const data = useSpeedingTicketsDS();

    return <OmniGrid columns={definitionColDefs} data={data} style={{ height: "480px", width: "100%" }} />;
}
