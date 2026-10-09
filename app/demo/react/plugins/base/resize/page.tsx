"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { ResizeGridExample } from "@/src/examples/plugins/base/resize/basic/ResizeGridExample";
import exampleSource from "@/src/examples/plugins/base/resize/basic/ResizeGridExample.tsx?raw";
import resizeColumnExampleColDefsSource from "@/src/examples/plugins/base/resize/basic/resizeColumnExampleColDefs.ts?raw";
import { PinnedColumnsResizeGridExample } from "@/src/examples/plugins/base/resize/pinnedColumns/PinnedColumnsResizeGridExample";
import pinnedColumnsResizeGridExampleSource from "@/src/examples/plugins/base/resize/pinnedColumns/PinnedColumnsResizeGridExample.tsx?raw";
import pinnedColumnsResizeColDefsSource from "@/src/examples/plugins/base/resize/pinnedColumns/pinnedColumnsResizeColDefs.ts?raw";
import { GroupedColumnsResizeGridExample } from "@/src/examples/plugins/base/resize/groupedColumns/GroupedColumnsResizeGridExample";
import groupedColumnsResizeGridExampleSource from "@/src/examples/plugins/base/resize/groupedColumns/GroupedColumnsResizeGridExample.tsx?raw";
import groupedColumnsResizeColDefsSource from "@/src/examples/plugins/base/resize/groupedColumns/groupedColumnsResizeColDefs.ts?raw";

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
            <ExampleShell
                title="Resizable pinned columns"
                description={
                    <span>
                        <b>ID</b> and <b>Category</b> are pinned left, the price columns are pinned right — the pinned panes stay in place while the centre
                        scrolls. Dragging a handle resizes the column inside its pane and the pane width follows. Right-pinned columns expose their resize
                        handle on the left edge instead of the right one.
                    </span>
                }
                sources={[
                    { label: "PinnedColumnsResizeGridExample.tsx", code: pinnedColumnsResizeGridExampleSource },
                    { label: "pinnedColumnsResizeColDefs.ts", code: pinnedColumnsResizeColDefsSource },
                ]}
            >
                <PinnedColumnsResizeGridExample />
            </ExampleShell>
            <ExampleShell
                title="Resizable grouped columns"
                description={
                    <span>
                        Headers are stacked: <b>Product</b>, <b>Warehouse</b> and <b>Pricing</b> are group headers that span their children across a
                        second header row. Resize handles are attached to leaf columns only — drag a leaf handle and the group header above it
                        narrows/widens together with its children. Double-click a leaf header to auto-fit it within the group.
                    </span>
                }
                sources={[
                    { label: "GroupedColumnsResizeGridExample.tsx", code: groupedColumnsResizeGridExampleSource },
                    { label: "groupedColumnsResizeColDefs.ts", code: groupedColumnsResizeColDefsSource },
                ]}
            >
                <GroupedColumnsResizeGridExample />
            </ExampleShell>
        </>
    );
}
