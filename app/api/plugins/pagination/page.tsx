"use client";

const CONSTRUCTOR_CODE = `new PaginationPlugin<T>(options?: PaginationPluginOptions<T>)`;

const PAGINATION_STATE_CODE = `interface PaginationState {
  page: number;
  pageSize: number;
  totalRows: number;
  totalPages: number;}`;

const USAGE_CODE = `import { useMemo, useState } from "react";
import { OmniGrid } from "@omnigrid/react";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";

const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(20);

const paginationPlugin = useMemo(
    () =>
        new PaginationPlugin<AlchemyRow>({
            pageSize: 50,
            pageSizes: [20, 50, 100],
            totalRows: 1000,
            blocks: ["rowInfo", "navigation"],
            quickJump: true,
            onChange: ({ page, pageSize }) => {
                setPage(page);
                setPageSize(pageSize);
            },
        }),
    [],
);

<OmniGrid
    columns={alchemyMColDefs}
    data={data}
    getRowId={(row) => row.id}
    plugins={[paginationPlugin]}
    rowOverscan={20}
    style={{ height: "480px", width: "100%" }}
/>`;

const OPTIONS = [
    {
        name: "pageSize",
        type: "number",
        defaultValue: "50",
        description: "Number of rows per page. Set to 0 for automatic sizing to fit the grid viewport.",
    },
    {
        name: "pageSizes",
        type: "number[]",
        defaultValue: "[20, 50, 100]",
        description: "Available page-size options in the selector. When pageSize is 0, 'Auto' is always prepended.",
    },
    {
        name: "mode",
        type: '"client" | "server"',
        defaultValue: '"client"',
        description: "Client mode slices data locally via a data processor. Server mode delegates fetching to the host and only manages UI state.",
    },
    {
        name: "totalRows",
        type: "number",
        defaultValue: "—",
        description: "Total number of rows in the dataset. In server mode this drives the total page count; in client mode it defaults to the data length.",
    },
    {
        name: "initialPage",
        type: "number",
        defaultValue: "1",
        description: "The page number to start on (1-based).",
    },
    {
        name: "onChange",
        type: "(params: { page: number; pageSize: number }) => void",
        defaultValue: "—",
        description: "Fires when the user navigates pages or changes the page size. In server mode, use this to trigger a refetch.",
    },
    {
        name: "quickJump",
        type: "boolean",
        defaultValue: "false",
        description: "Renders a page-number input in the navigation block alongside prev/next controls.",
    },
    {
        name: "pageInputCharacters",
        type: "number",
        defaultValue: "2",
        description: "Width of the page-number input (in characters) when quickJump is enabled.",
    },
    {
        name: "blocks",
        type: "PaginationBlockOption[]",
        defaultValue: '["pageSize", "navigation"]',
        description:
            "Array of UI blocks to render. Each entry is a block name or a PlacementConfig with slot, position, and priority. Available blocks: rowInfo, pageSize, navigation.",
    },
    {
        name: "slot",
        type: '"top" | "bottom"',
        defaultValue: '"bottom"',
        description: "Default slot for all blocks unless a block overrides with its own slot.",
    },
    {
        name: "position",
        type: '"start" | "center" | "end"',
        defaultValue: '"end"',
        description: "Default alignment within the slot for blocks that do not specify their own position.",
    },
    {
        name: "priority",
        type: "number",
        defaultValue: "0",
        description: "Render priority within a slot — lower numbers render first. Useful when multiple plugins target the same slot.",
    },
    {
        name: "labels",
        type: "PaginationLabels",
        defaultValue: "—",
        description: "Custom aria-labels and info text for the navigation controls and page-size selector.",
    },
    {
        name: "icons",
        type: 'Partial<Record<PaginationIconName, IconDefinition<T>>>',
        defaultValue: "—",
        description: "Custom icon definitions for the first/prev/next/last navigation buttons.",
    },
];

export default function PaginationPluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Plugin / Pagination
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                PaginationPlugin
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">PaginationPlugin</code> from{" "}
                <code className="font-mono text-[13px]">@omnigrid/pagination-plugin</code> splits rows into pages and
                renders navigation controls in top / bottom slots. In <b>client</b> mode the plugin slices data locally
                via a data processor; in <b>server</b> mode it delegates fetching to the host and only manages UI
                state.
            </p>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">01</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Constructor</h3>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{CONSTRUCTOR_CODE}</code>
                </pre>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">02</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Options</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Properties accepted by <code className="font-mono text-[13px]">PaginationPluginOptions&lt;T&gt;</code>.
                </p>
                <div className="m-0 overflow-auto">
                    <table className="w-full border-collapse font-sans text-[13px]">
                        <thead>
                            <tr>
                                <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                    Property
                                </th>
                                <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                    Type
                                </th>
                                <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                    Default
                                </th>
                                <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {OPTIONS.map((opt) => (
                                <tr key={opt.name} className="border-b border-slate/20">
                                    <td className="py-3 font-mono text-mint">{opt.name}</td>
                                    <td className="py-3 font-mono text-slate">{opt.type}</td>
                                    <td className="py-3 text-slate">{opt.defaultValue}</td>
                                    <td className="py-3 leading-[1.6] text-ink dark:text-ink-dark">{opt.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="mt-[26px] text-[15px] font-semibold text-ink dark:text-ink-dark">PaginationState</h4>
                <p className="mt-2 font-sans text-[13px] leading-[1.6]">Returned by <code className="font-mono">getState()</code>.</p>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{PAGINATION_STATE_CODE}</code>
                </pre>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">03</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Instance methods</h3>
                <div className="grid gap-4 font-sans text-[13px]">
                    <div>
                        <code className="font-mono text-mint">getState()</code>
                        <span className="text-slate">: PaginationState</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">
                            Returns the current page, page size, total rows, and computed total pages.
                        </p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">goToPage(page)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">
                            Navigates to a specific 1-based page number. In server mode this triggers an onChange.
                        </p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">nextPage()</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Advances to the next page.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">prevPage()</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Returns to the previous page.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">setPageSize(pageSize)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Sets the page size and resets to the first page.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">setTotalRows(totalRows)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">
                            Updates the total row count. Useful in server mode when the host learns it after a fetch.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">04</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Usage</h3>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{USAGE_CODE}</code>
                </pre>
            </section>
        </div>
    );
}