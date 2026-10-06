"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { CustomCellRendererGridExample } from "@/src/examples/cells/cell-renderers/custom/CustomCellRendererGridExample";
import customCellRendererGridExampleSource from "@/src/examples/cells/cell-renderers/custom/CustomCellRendererGridExample.tsx?raw";
import customCellRendererColDefsSource from "@/src/examples/cells/cell-renderers/custom/customCellRendererColDefs.tsx?raw";

import minionHealthRendererSource from "@/src/examples/common/renderers/MinionHealthRenderer.tsx?raw";
import minionSalaryRendererSource from "@/src/examples/common/renderers/MinionSalaryRenderer.tsx?raw";

export default function CellRendererExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Cells / Renderer</p>
            <ExampleShell
                id="custom"
                title="Custom"
                description={
                    <span>
                        Set <b>cellRenderer</b> on a column definition to render its cells with a custom component. The renderer receives{" "}
                        <b>CellRenderParams</b> (<b>value</b>, <b>data</b>, <b>column</b>) so it can render conditionally per cell — the Salary column
                        color-marks values above 2500 and the Health column maps each status to a colored badge.
                    </span>
                }
                sources={[
                    { label: "CustomCellRendererGridExample.tsx", code: customCellRendererGridExampleSource },
                    { label: "customCellRendererColDefs.tsx", code: customCellRendererColDefsSource },
                    { label: "MinionHealthRenderer.tsx", code: minionHealthRendererSource },
                    { label: "MinionSalaryRenderer.tsx", code: minionSalaryRendererSource },
                ]}
            >
                <CustomCellRendererGridExample />
            </ExampleShell>
        </>
    );
}
