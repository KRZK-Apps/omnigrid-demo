"use client";

import { useMemo } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { customComparatorColDefs } from "@/src/examples/plugins/base/sorting/customComparator/customComparatorColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

export function SortingCustomComparatorGridExample() {
    const data = useAlchemyDS();
    const sortingPlugin = useMemo(() => new SortingPlugin<AlchemyRow>(), []);

    return (
        <OmniGrid 
            columns={customComparatorColDefs}
            data={data}
            plugins={[sortingPlugin]}
            style={{ height: "480px", width: "100%" }} 
        />
    );
}
