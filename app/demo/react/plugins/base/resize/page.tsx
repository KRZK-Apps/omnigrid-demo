"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { ResizeGridExample } from "@/src/examples/plugins/base/resize/ResizeGridExample";
import exampleSource from "@/src/examples/plugins/base/resize/ResizeGridExample.tsx?raw";
import resizeColumnExampleColDefsSource from  "@/src/examples/plugins/base/resize/resizeColumnExampleColDefs.ts?raw";

export default function ResizeExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Plugin / Resize</p>
            <ExampleShell
                title="Resizable columns"
                description={
                    <span>
                        Drag the thin handle on a header cell to resize it. Double-click a header to auto-fit the column to the widest visible value.
                    </span>
                }
                sources={[
                    { label: "ResizeGridExample.tsx", code: exampleSource },
                    { label: "resizeColumnExampleColDefs.ts", code: resizeColumnExampleColDefsSource },
                ]}
            >
                <ResizeGridExample />
            </ExampleShell>
        </>
    );
}
