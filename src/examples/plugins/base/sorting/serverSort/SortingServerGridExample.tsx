"use client";

import { useMemo, useState } from "react";

import { useServerSortedAlchemyDS } from "@/src/data/serverSortAlchemy";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import type { SortModelItem } from "@omnigrid/sorting-plugin";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

export function SortingServerGridExample() {
    const [sortModel, setSortModel] = useState<SortModelItem[]>([]);
    const data = useServerSortedAlchemyDS(sortModel);

    const handleChangeSorting = (sortModel: SortModelItem[]) => {
        setSortModel(sortModel);
    };

    const sortingPlugin = useMemo(() => new SortingPlugin<AlchemyRow>(
        { 
            mode: "server", 
            onChange: handleChangeSorting,
        }
    ), [setSortModel]);

    return (
        <OmniGrid 
            columns={alchemyMColDefs} 
            data={data} 
            plugins={[sortingPlugin]} 
            style={{ height: "480px", width: "100%" }} 
        />
    );
}
