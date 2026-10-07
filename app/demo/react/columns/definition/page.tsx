"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { DefinitionExample } from "@/src/examples/columns/definition/DefinitionExample";
import definitionExampleSource from "@/src/examples/columns/definition/DefinitionExample.tsx?raw";
import definitionColDefsSource from "@/src/examples/columns/definition/definitionColDefs.ts?raw";

export default function ColumnDefinitionPage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Columns / Definition</p>
            <p className="mb-6 max-w-170 font-sans text-sm leading-[1.6]">
                Columns are declared as an array of <code className="font-mono text-[13px] font-bold">ColumnDef</code> objects. Each
                column pairs an <code className="font-mono text-[13px]">id</code> with a <code className="font-mono text-[13px] font-bold">header</code> label and
                a <code className="font-mono text-[13px] font-bold">field</code> that reads a property from the row data. Sizing is
                controlled by either a fixed <code className="font-mono text-[13px] font-bold">width</code> or a relative{" "}
                <code className="font-mono text-[13px] font-bold">flex</code> factor with an optional <code className="font-mono text-[13px] font-bold">minWidth</code>. The{" "}
                <code className="font-mono text-[13px] font-bold">align</code> prop controls text alignment, <code className="font-mono text-[13px] font-bold">pinned </code> 
                keeps a column visible during horizontal scroll, and <code className="font-mono text-[13px] font-bold">valueFormatter</code>
                transforms the raw value for display.
            </p>
            <ExampleShell
                title="Column definitions"
                description={
                    <span>
                        A mixed-sizing column set: an <b>ID</b> column pinned left, data columns with <b>flex</b> and{" "}
                        <b>minWidth</b>, numeric columns right-aligned, and a <b>Status</b> column pinned right.
                    </span>
                }
                sources={[
                    { label: "DefinitionExample.tsx", code: definitionExampleSource },
                    { label: "definitionColDefs.ts", code: definitionColDefsSource },
                ]}
            >
                <DefinitionExample />
            </ExampleShell>
        </>
    );
}
