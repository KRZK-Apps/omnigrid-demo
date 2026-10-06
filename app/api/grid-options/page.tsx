"use client";

const CONSTRUCTOR_CODE = `new Grid<T>(options: GridOptions<T>)`;

const USAGE_CODE = `import { useMemo } from "react";
import { OmniGrid } from "@omnigrid/react";
import { PaginationPlugin } from "@omnigrid/pagination-plugin";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

const gridOptions = useMemo(
    () => ({
        columns: alchemyMColDefs,
        data: rows,
        getRowId: (row) => row.id,
        rowHeight: 40,
        rowOverscan: 10,
        columnOverscan: 2,
        plugins: [sortingPlugin, paginationPlugin],
    }),
    [rows],
);

<OmniGrid {...gridOptions} style={{ height: "480px", width: "100%" }}>`;

const OPTIONS = [
    {
        name: "columns",
        type: "ColumnDef<T>[]",
        defaultValue: "—",
        description: "Column definitions. See the Column definitions reference for the full set of properties.",
    },
    {
        name: "data",
        type: "T[]?",
        defaultValue: "—",
        description:
            "Array of row data. Omit when providing data through a plugin (e.g. server-side pagination); otherwise required for display.",
    },
    {
        name: "getRowId",
        type: "(row: T, index: number) => RowId",
        defaultValue: "(row, index) => index",
        description: "Function that returns a stable unique ID for each row. Providing a stable ID prevents unnecessary re-renders when data mutates.",
    },
    {
        name: "rowHeight",
        type: "number",
        defaultValue: "32",
        description: "Fixed height (px) for each row. All rows share the same height so the virtualizer can compute offsets without measuring.",
    },
    {
        name: "rowOverscan",
        type: "number",
        defaultValue: "4",
        description:
            "Number of extra rows to render above and below the visible viewport. Prevents blank flashes during fast scrolling.",
    },
    {
        name: "columnOverscan",
        type: "number",
        defaultValue: "0",
        description: "Number of extra columns to render beyond the horizontal scroll window.",
    },
    {
        name: "plugins",
        type: "GridPlugin<T>[]",
        defaultValue: "[]",
        description:
            "Array of plugin instances. Plugins add behavior such as sorting, selection, and pagination without coupling to the core engine.",
    },
    {
        name: "suppressRowHoverHighlight",
        type: "boolean",
        defaultValue: "false",
        description: "Disables the CSS class applied to a row on hover.",
    },
    {
        name: "rowStyle",
        type: "RowStyle",
        defaultValue: "—",
        description: "Static CSS styles applied to every row node.",
    },
    {
        name: "getRowStyle",
        type: "(params: RowRenderParams<T>) => RowStyle | undefined",
        defaultValue: "—",
        description: "Dynamic row styles computed per visible row.",
    },
    {
        name: "rowClass",
        type: "string | ((params) => string | undefined)",
        defaultValue: "—",
        description: "Static or dynamic CSS class applied to every row node.",
    },
    {
        name: "getRowClass",
        type: "(params: RowRenderParams<T>) => string | undefined",
        defaultValue: "—",
        description: "Dynamic row class computed per visible row.",
    },
    {
        name: "rowClassRules",
        type: "RowClassRules<T>",
        defaultValue: "—",
        description: "Map of class name to predicate. Rules are evaluated in batch on every viewport commit.",
    },
];

export default function GridOptionsPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / Grid options
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Grid options
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">OmniGrid</code> React component accepts a flat options object
                that combines column definitions, row data, identity, dimension tuning, and plugin composition. Every
                prop is optional except <code className="font-mono text-[13px]">columns</code> (and{" "}
                <code className="font-mono text-[13px]">data</code> unless provided via a plugin).
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
                    Properties accepted by <code className="font-mono text-[13px]">GridOptions&lt;T&gt;</code>.
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
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">03</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Usage</h3>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{USAGE_CODE}</code>
                </pre>
            </section>
        </div>
    );
}
