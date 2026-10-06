"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import speedTicketsMColDefsSource from "@/src/examples/common/colDefs/speedTicketsMColDefs.ts?raw";
import { PaginationAutoPageSizeGridExample } from "@/src/examples/plugins/base/pagination/PaginationAutoPageSizeGridExample";
import paginationAutoPageSizeGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationAutoPageSizeGridExample.tsx?raw";
import { PaginationBlocksGridExample } from "@/src/examples/plugins/base/pagination/PaginationBlocksGridExample";
import paginationBlocksGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationBlocksGridExample.tsx?raw";
import { PaginationGridExample } from "@/src/examples/plugins/base/pagination/PaginationGridExample";
import paginationGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationGridExample.tsx?raw";
import { PaginationQuickJumpGridExample } from "@/src/examples/plugins/base/pagination/PaginationQuickJumpGridExample";
import paginationQuickJumpGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationQuickJumpGridExample.tsx?raw";
import { PaginationServerSideGridExample } from "@/src/examples/plugins/base/pagination/PaginationServerSideGridExample";
import paginationServerSideGridExampleSource from "@/src/examples/plugins/base/pagination/PaginationServerSideGridExample.tsx?raw";
import paginationColDefsSource from "@/src/examples/plugins/base/pagination/paginationColDefs.ts?raw";

export default function PaginationExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Demo / Plugins/ Base / Pagination</p>
            <ExampleShell
                title="Default pagination"
                description={
                    <span>
                        The <b>PaginationPlugin</b> slices rows into pages client-side through a data processor and renders the navigation block into the{" "}
                        <b>bottom</b> slot. This example uses default options: <b>pageSize</b> 50 with first, previous, next, and last controls aligned to the
                        bottom-right.
                    </span>
                }
                sources={[
                    { label: "PaginationGridExample.tsx", code: paginationGridExampleSource },
                    { label: "paginationColDefs.ts", code: paginationColDefsSource },
                ]}
            >
                <PaginationGridExample />
            </ExampleShell>
            <ExampleShell
                title="Blocks"
                description={
                    <span>
                        All three blocks — row information, page-size selection, and navigation — can be enabled at once and each targets an independent
                        <b>slot</b> and alignment. Here row information and the page-size selector sit in the <b>top</b> slot while navigation is centered in the{" "}
                        <b>bottom</b> slot.
                    </span>
                }
                sources={[
                    { label: "PaginationBlocksGridExample.tsx", code: paginationBlocksGridExampleSource },
                    { label: "paginationColDefs.ts", code: paginationColDefsSource },
                ]}
            >
                <PaginationBlocksGridExample />
            </ExampleShell>
            <ExampleShell
                title="Quick jump"
                description={
                    <span>
                        Set <b>quickJump</b> to true to let users jump to a specific page. The navigation block renders a page-number input alongside the
                        prev/next controls: type a number and press Enter. <b>pageInputCharacters</b> caps the input width (default 2).
                    </span>
                }
                sources={[{ label: "PaginationQuickJumpGridExample.tsx", code: paginationQuickJumpGridExampleSource }]}
            >
                <PaginationQuickJumpGridExample />
            </ExampleShell>
            <ExampleShell
                title="Auto page size"
                description={
                    <span>
                        Set <b>pageSize</b> to <b>0</b> to size pages automatically to the grid's row area. The plugin subtracts the header height from the
                        viewport and shows the largest whole number of rows that fit; the page-size selector always lists <b>Auto</b> as its first option.
                    </span>
                }
                sources={[{ label: "PaginationAutoPageSizeGridExample.tsx", code: paginationAutoPageSizeGridExampleSource }]}
            >
                <PaginationAutoPageSizeGridExample />
            </ExampleShell>
            <ExampleShell
                title="Server-side pagination"
                description={
                    <span>
                        In <b>server</b> mode the plugin does not slice data; it calls <b>onChange</b> with the requested page and page size so the host can
                        fetch the slice. Provide the total row count with <b>totalRows</b> (here a constant) and feed the requested page back into the{" "}
                        <b>data</b> prop.
                    </span>
                }
                sources={[
                    { label: "PaginationServerSideGridExample.tsx", code: paginationServerSideGridExampleSource },
                    { label: "speedTicketsMColDefs.ts", code: speedTicketsMColDefsSource },
                ]}
            >
                <PaginationServerSideGridExample />
            </ExampleShell>
        </>
    );
}
