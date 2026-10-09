"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { HeaderRendererExample } from "@/src/examples/columns/header-renderer/HeaderRendererExample";
import headerRendererExampleSource from "@/src/examples/columns/header-renderer/HeaderRendererExample.tsx?raw";
import headerRendererColDefsSource from "@/src/examples/columns/header-renderer/headerRendererColDefs.tsx?raw";

export default function HeaderRendererPage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Columns / Header renderer</p>
            <p className="mb-6 max-w-170 font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px] font-bold">headerRenderer</code> prop on a <code className="font-mono text-[13px]">ColumnDef</code> lets you render
                completely custom header content. It receives the column definition and returns any React node — enabling icons,
                tooltips, sort indicators, or interactive elements.
            </p>
            <ExampleShell
                title="Custom header renderer"
                description={
                    <span>
                        Hover the <b>info icons</b> next to column titles to see tooltips. The renderer can return any JSX — here we
                        add an <b>info icon with a native <code className="font-mono text-[11px]">title</code> tooltip</b> on
                        most columns. For right-aligned numeric columns the icon appears before the label.
                    </span>
                }
                sources={[
                    { label: "HeaderRendererExample.tsx", code: headerRendererExampleSource },
                    { label: "headerRendererColDefs.tsx", code: headerRendererColDefsSource },
                ]}
            >
                <HeaderRendererExample />
            </ExampleShell>
        </>
    );
}