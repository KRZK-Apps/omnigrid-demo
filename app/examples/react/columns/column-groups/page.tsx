"use client";

import { ExampleShell } from "@/src/components/ui/example/ExampleShell";
import { ColumnGroupsExample } from "@/src/examples/columns/column-groups/ColumnGroupsExample";
import columnGroupsExampleSource from "@/src/examples/columns/column-groups/ColumnGroupsExample.tsx?raw";
import columnGroupsColDefsSource from "@/src/examples/columns/column-groups/columnGroupsColDefs.ts?raw";

export default function ColumnGroupsPage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Columns / Column groups</p>
            <ExampleShell
                title="Column groups"
                description={
                    <span>
                        Wrap columns in a definition with <b>children</b> to render a stacked group header above the leaf columns.
                        Groups nest to any depth — each level becomes its own header row.
                    </span>
                }
                sources={[
                    { label: "ColumnGroupsExample.tsx", code: columnGroupsExampleSource },
                    { label: "columnGroupsColDefs.ts", code: columnGroupsColDefsSource },
                ]}
            >
                <ColumnGroupsExample />
            </ExampleShell>
        </>
    );
}
