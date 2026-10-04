"use client";

import { ExampleShell } from "@/src/components/ui/example/ExampleShell";
import { PaginationGridExample } from "@/src/examples/plugins/base/pagination/PaginationGridExample";
import paginationGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationGridExample.tsx?raw";
import paginationColDefsSource from "@/src/examples/plugins/base/pagination/paginationColDefs.ts?raw";

export default function PaginationExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Plugin / Pagination</p>
            <ExampleShell
                title="Pagination"
                description={
                    <span>
                        The <b>PaginationPlugin</b> slices rows into pages through a data processor and renders row information, page-size
                        selection, and page navigation into the <b>bottom</b> slot. Row information and page-size selection can be enabled
                        with <b>blocks</b>, and all three blocks can be ordered with <b>order</b>.
                    </span>
                }
                sources={[
                    { label: "PaginationGridExample.tsx", code: paginationGridExampleSource },
                    { label: "paginationColDefs.ts", code: paginationColDefsSource },
                ]}
            >
                <PaginationGridExample />
            </ExampleShell>
        </>
    );
}
