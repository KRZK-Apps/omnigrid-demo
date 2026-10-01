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
                        The <b>PaginationPlugin</b> slices rows into fixed-size pages through a data processor and renders a pager into the
                        <b> bottom</b> slot. Set <b>pageSize</b> to control how many rows are shown per page.
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
