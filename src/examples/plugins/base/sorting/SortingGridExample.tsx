"use client";

import { useEffect, useMemo, useState } from "react";

import { useAlchemyDS } from "@/src/data/dataService";
import { AlchemyRow } from "@/src/data/types";
import { alchemyMColDefs } from "@/src/examples/common/colDefs/alchemyMColDefs";
import { OmniGrid } from "@omnigrid/react";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

export function SortingGridExample() {
    const data = useAlchemyDS();
    const [tristate, setTristate] = useState(true);
    const sortingPlugin = useMemo(() => new SortingPlugin<AlchemyRow>(), []);

    useEffect(() => {
        sortingPlugin.setTristate(tristate);
    }, [sortingPlugin, tristate]);

    return (
        <>
            <div className="flex items-center gap-3 p-2">
                <button
                    type="button"
                    className="cursor-pointer border border-mint bg-transparent px-4 py-2 font-sans text-xs text-mint hover:bg-mint hover:text-white"
                    onClick={() => setTristate((prev) => !prev)}>
                        Tristate: {tristate ? "on" : "off"}
                </button>
            </div>
            <OmniGrid 
                columns={alchemyMColDefs}
                data={data}
                plugins={[sortingPlugin]}
                style={{ height: "480px", width: "100%" }} 
            />
        </>
    );
}
