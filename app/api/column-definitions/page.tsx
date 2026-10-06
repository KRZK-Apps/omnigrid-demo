"use client";

const LEAF_DEF_CODE = `interface ColumnLeafDef<T> {
  id: string;
  header: string;
  field?: keyof T | string;
  hidden?: boolean;
  flex?: number;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  sortState?: "asc" | "desc";
  pinned?: "left" | "right";
  stopRowClick?: boolean;
  stopHeaderClick?: boolean;
  valueGetter?: (row: T) => unknown;
  valueFormatter?: (value: unknown) => string;
  cellRenderer?: (params: CellRenderParams<T>) => unknown;
  cellStyle?: RowStyle;
  getCellStyle?: (params: CellRenderParams<T>) => RowStyle | undefined;
  cellClass?: string | ((params: CellRenderParams<T>) => string | undefined);
  getCellClass?: (params: CellRenderParams<T>) => string | undefined;
  cellClassRules?: CellClassRules<T>;
}`;

const USAGE_CODE = `const alchemyMColDefs = [
  { id: "name", header: "Name", field: "itemName", flex: 1 },
  { id: "power", header: "Power", field: "power", width: 110, align: "right" },
  {
    id: "danger",
    header: "Danger",
    field: "dangerLevel",
    width: 130,
    sortable: false,
    cellRenderer: (params) => <DangerLevelRenderer value={params.value} />,
  },
  {
    id: "health",
    header: "Health",
    field: "health",
    width: 130,
    valueGetter: (row) => row.stats?.health,
    valueFormatter: (value) => String(value) + " HP",
  },
];`;

const OPTIONS = [
    {
        name: "id",
        type: "string",
        defaultValue: "—",
        description: "Unique column identifier. Used for sorting, pinning, and plugin internal lookups.",
    },
    {
        name: "header",
        type: "string",
        defaultValue: "—",
        description: "Column header text displayed in the header row.",
    },
    {
        name: "field",
        type: "keyof T | string",
        defaultValue: "—",
        description: "Property name on the row data object. If omitted, provide a valueGetter to compute cell content.",
    },
    {
        name: "hidden",
        type: "boolean",
        defaultValue: "false",
        description: "When true, the column is not rendered but remains in the definition list.",
    },
    {
        name: "flex",
        type: "number",
        defaultValue: "1",
        description: "Relative width factor. Columns with flex grow/shrink proportionally within the available viewport width.",
    },
    {
        name: "width",
        type: "number",
        defaultValue: "—",
        description: "Explicit column width in pixels. When set, this takes precedence over flex-based sizing.",
    },
    {
        name: "minWidth",
        type: "number",
        defaultValue: "—",
        description: "Minimum width constraint when the grid is resized.",
    },
    {
        name: "maxWidth",
        type: "number",
        defaultValue: "—",
        description: "Maximum width constraint when the grid is resized.",
    },
    {
        name: "sortable",
        type: "boolean",
        defaultValue: "true",
        description: "Whether the column can be sorted. Override to false when using a sorting plugin to exclude a column.",
    },
    {
        name: "align",
        type: '"left" | "center" | "right"',
        defaultValue: '"left"',
        description: "Horizontal cell alignment within the column.",
    },
    {
        name: "sortState",
        type: '"asc" | "desc"',
        defaultValue: "—",
        description: "Initial sort direction. Useful for predefined sorting via the column definition.",
    },
    {
        name: "pinned",
        type: '"left" | "right"',
        defaultValue: "—",
        description: "Pins the column to the left or right edge so it stays visible during horizontal scrolling.",
    },
    {
        name: "stopRowClick",
        type: "boolean",
        defaultValue: "false",
        description: "Prevents the row click event from firing when the cell is clicked.",
    },
    {
        name: "stopHeaderClick",
        type: "boolean",
        defaultValue: "false",
        description: "Prevents the header click event from firing when the header is clicked.",
    },
    {
        name: "valueGetter",
        type: "(row: T) => unknown",
        defaultValue: "—",
        description: "Computes the cell value from the row data when field is not sufficient.",
    },
    {
        name: "valueFormatter",
        type: "(value: unknown) => string",
        defaultValue: "—",
        description: "Formats the raw value into a display string for the cell.",
    },
    {
        name: "cellRenderer",
        type: "(params: CellRenderParams<T>) => unknown",
        defaultValue: "—",
        description: "Custom renderer that replaces the cell content entirely (e.g. a badge, chart, or framework component).",
    },
    {
        name: "cellStyle",
        type: "RowStyle",
        defaultValue: "—",
        description: "Static CSS styles applied to every cell in this column.",
    },
    {
        name: "getCellStyle",
        type: "(params: CellRenderParams<T>) => RowStyle | undefined",
        defaultValue: "—",
        description: "Dynamic cell styles computed per visible cell.",
    },
    {
        name: "cellClass",
        type: "string | ((params) => string | undefined)",
        defaultValue: "—",
        description: "Static or dynamic CSS class applied to cells in this column.",
    },
    {
        name: "getCellClass",
        type: "(params: CellRenderParams<T>) => string | undefined",
        defaultValue: "—",
        description: "Dynamic cell class computed per visible cell.",
    },
    {
        name: "cellClassRules",
        type: "Record<string, (params) => boolean>",
        defaultValue: "—",
        description: "Map of class name to predicate. Rules are evaluated in batch on every viewport commit.",
    },
];

export default function ColumnDefinitionsPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / Column definitions
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Column definitions
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                Columns are described declaratively as an array of <code className="font-mono text-[13px]">ColumnLeafDef</code>{" "}
                objects passed to the grid via the <code className="font-mono text-[13px]">columns</code> option. Each
                definition controls identity, sizing, alignment, sorting, and rendering.
            </p>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">01</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">ColumnLeafDef&lt;T&gt;</h3>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{LEAF_DEF_CODE}</code>
                </pre>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">02</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Options</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Full list of properties on <code className="font-mono text-[13px]">ColumnLeafDef&lt;T&gt;</code>.
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
