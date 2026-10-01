"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

export function SortingGridExample() {
    const data = useAlchemyDS();
    const sortingPlugin = useMemo(() => new SortingPlugin<AlchemyRow>(), []);

    return <OmniGrid columns={alchemyMColDefs} data={data} plugins={[sortingPlugin]} rowOverscan={20} style={{ height: "100%", width: "100%" }} />;
}
