"use client";

import { ExampleShell } from "@/src/components/ui/example/ExampleShell";
import { PinnedColumnsExample } from "@/src/examples/columns/pinned-columns/PinnedColumnsExample";
import pinnedColumnsExampleSource from "@/src/examples/columns/pinned-columns/PinnedColumnsExample.tsx?raw";
import pinnedColumnsColDefsSource from "@/src/examples/columns/pinned-columns/pinnedColumnsColDefs.ts?raw";

export default function PinnedColumnsPage() {
    return (
        <>
        <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Columns / Pinned columns</p>
        <ExampleShell
            title="Pinned columns"
            description={
                <span>
                    Set <b>pinned=&#123;"left"&#125;</b> or <b>pinned=&#123;"right"&#125;</b> on a column to keep it visible while scrolling horizontally.
                    Pinned columns render in their own sticky panes that share the grid's vertical scroll — they never leave the viewport on either axis.
                </span>
            }
            sources={[
                { label: "PinnedColumnsExample.tsx", code: pinnedColumnsExampleSource },
                { label: "pinnedColumnsColDefs.ts", code: pinnedColumnsColDefsSource },
            ]}
        >
            <PinnedColumnsExample />
        </ExampleShell>
        </>
    );
}
