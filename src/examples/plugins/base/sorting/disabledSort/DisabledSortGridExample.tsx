"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { disabledSortColDefs } from "@/src/examples/plugins/base/sorting/disabledSort/disabledSortColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

export function DisabledSortGridExample() {
    const data = useAlchemyDS();
    const sortingPlugin = useMemo(() => new SortingPlugin<AlchemyRow>(), []);

    return <OmniGrid columns={disabledSortColDefs} data={data} plugins={[sortingPlugin]} rowOverscan={20} style={{ height: "100%", width: "100%" }} />;
}
