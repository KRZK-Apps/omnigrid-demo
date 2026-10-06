"use client";

import { ExampleShell } from "@/src/components/ui/example/ExampleShell";
import minionsSColDefsSource from "@/src/examples/common/colDefs/minionsSColDefs.ts?raw";
import { NoRowHoverExample } from "@/src/examples/rows/no-hover/NoRowHoverExample";
import exampleSource from "@/src/examples/rows/no-hover/NoRowHoverExample.tsx?raw";

export default function NoRowHoverExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Rows / No row hover</p>
            <ExampleShell
                title="Disable row hover highlight"
                description={
                    <span>
                        Set <b>rowHoverHighlight=&#123;false&#125;</b> to turn off the hover background on rows and cells. All grid behavior stays the same —
                        only the hover tint disappears.
                    </span>
                }
                sources={[
                    { label: "NoRowHoverExample.tsx", code: exampleSource },
                    { label: "minionsSColDefs.ts", code: minionsSColDefsSource },
                ]}
            >
                <NoRowHoverExample />
            </ExampleShell>
        </>
    );
}
