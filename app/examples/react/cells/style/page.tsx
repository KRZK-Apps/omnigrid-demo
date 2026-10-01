"use client";

import { ExampleShell } from "@/src/components/ui/example/ExampleShell";
import { CellClassRulesExample } from "@/src/examples/cells/cell-styles/cell-class-rules/CellClassRulesExample";
import cellClassRulesExampleSource from "@/src/examples/cells/cell-styles/cell-class-rules/CellClassRulesExample.tsx?raw";
import cellClassRulesExampleColDefsSource from "@/src/examples/cells/cell-styles/cell-class-rules/CellClassRulesExampleColDefs.ts?raw";
import { CellClassExample } from "@/src/examples/cells/cell-styles/cell-class/CellClassExample";
import cellClassExampleSource from "@/src/examples/cells/cell-styles/cell-class/CellClassExample.tsx?raw";
import cellClassExampleColDefsSource from "@/src/examples/cells/cell-styles/cell-class/cellClassExampleColDefs.ts?raw";
import { CellStyleExample } from "@/src/examples/cells/cell-styles/cell-style/CellStyleExample";
import cellStyleExampleSource from "@/src/examples/cells/cell-styles/cell-style/CellStyleExample.tsx?raw";
import cellStyleExampleColDefsSource from "@/src/examples/cells/cell-styles/cell-style/cellStyleExampleColDefs.ts?raw";
import { GetCellClassExample } from "@/src/examples/cells/cell-styles/get-cell-class/GetCellClassExample";
import getCellClassExampleSource from "@/src/examples/cells/cell-styles/get-cell-class/GetCellClassExample.tsx?raw";
import getCellClassExampleColDefsSource from "@/src/examples/cells/cell-styles/get-cell-class/GetCellClassExampleColDefs.ts?raw";
import { GetCellStyleExample } from "@/src/examples/cells/cell-styles/get-cell-style/GetCellStyleExample";
import getCellStyleExampleSource from "@/src/examples/cells/cell-styles/get-cell-style/GetCellStyleExample.tsx?raw";
import getCellStyleExampleColDefsSource from "@/src/examples/cells/cell-styles/get-cell-style/getCellStyleExampleColDefs.ts?raw";

import cellClassRulesExampleCssSource from "!!raw-loader!@/src/examples/cells/cell-styles/cell-class-rules/cellClassRulesExample.css";
import cellClassExampleCssSource from "!!raw-loader!@/src/examples/cells/cell-styles/cell-class/cellClassExample.css";
import getCellClassExampleCssSource from "!!raw-loader!@/src/examples/cells/cell-styles/get-cell-class/getCellClassExample.css";

export default function CellStyleExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Base</p>
            <ExampleShell
                id="cell-style"
                title="Cell style"
                description={
                    <span>
                        <b>cellStyle</b> provides a CSS style object that is applied individually to each cell element within the column. It is a static style —
                        use <b>getCellStyle</b> for dynamic per-cell styling.
                    </span>
                }
                sources={[
                    { label: "CellStyleExample.tsx", code: cellStyleExampleSource },
                    { label: "cellStyleExampleColDefs.ts", code: cellStyleExampleColDefsSource },
                ]}
            >
                <CellStyleExample />
            </ExampleShell>
            <ExampleShell
                id="get-cell-style"
                title="Get cell style"
                description={
                    <span>
                        <b>getCellStyle</b> function provides a CSS style object that is applied individually to each cell element within the column.
                    </span>
                }
                sources={[
                    { label: "GetCellStyleExample.tsx", code: getCellStyleExampleSource },
                    { label: "getCellStyleExampleColDefs.ts", code: getCellStyleExampleColDefsSource },
                ]}
            >
                <GetCellStyleExample />
            </ExampleShell>
            <ExampleShell
                id="cell-class"
                title="Cell class"
                description={
                    <span>
                        <b>cellClass</b> applies a CSS class to every cell within the column. The class persists across data refreshes.
                    </span>
                }
                sources={[
                    { label: "CellClassExample.tsx", code: cellClassExampleSource },
                    { label: "cellClassExample.css", code: cellClassExampleCssSource },
                    { label: "cellClassExampleColDefs.ts", code: cellClassExampleColDefsSource },
                ]}
            >
                <CellClassExample />
            </ExampleShell>
            <ExampleShell
                id="get-cell-class"
                title="Get cell class"
                description={
                    <span>
                        <b>getCellClass</b> function returns CSS class(es) for each cell within the column. Classes are applied dynamically on every render.
                    </span>
                }
                sources={[
                    { label: "GetCellClassExample.tsx", code: getCellClassExampleSource },
                    { label: "getCellClassExample.css", code: getCellClassExampleCssSource },
                    { label: "getCellClassExampleColDefs.ts", code: getCellClassExampleColDefsSource },
                ]}
            >
                <GetCellClassExample />
            </ExampleShell>
            <ExampleShell
                id="cell-class-rules"
                title="Cell class rules"
                description={
                    <span>
                        <b>cellClassRules</b> maps rule names to predicates. Every cell whose predicate returns true gets the rule name applied as a CSS class.
                        Rules are dynamic and applied in batches — toggle the high-salary rule and all visible cells update in a single pass.
                    </span>
                }
                sources={[
                    { label: "CellClassRulesExample.tsx", code: cellClassRulesExampleSource },
                    { label: "cellClassRulesExample.css", code: cellClassRulesExampleCssSource },
                    { label: "cellClassRulesExampleColDefs.ts", code: cellClassRulesExampleColDefsSource },
                ]}
            >
                <CellClassRulesExample />
            </ExampleShell>
        </>
    );
}
