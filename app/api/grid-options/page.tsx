import { APIOptionsList, OptionDetails } from "@/src/components/content/api/APIOptionsList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";

const CONSTRUCTOR_CODE = `new Grid<T>(options: GridOptions<T>)`;

const OPTIONS: OptionDetails[] = [
    {
        name: "columns",
        type: "ColumnDef<T>[]",
        description: "Column definitions. See the Column definitions reference for the full set of properties.",
    },
    {
        name: "data",
        type: "T[]?",
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
        description: "Static CSS styles applied to every row node.",
    },
    {
        name: "getRowStyle",
        type: "(params: RowRenderParams<T>) => RowStyle | undefined",
        description: "Dynamic row styles computed per visible row.",
    },
    {
        name: "rowClass",
        type: "string | ((params) => string | undefined)",
        description: "Static or dynamic CSS class applied to every row node.",
    },
    {
        name: "getRowClass",
        type: "(params: RowRenderParams<T>) => string | undefined",
        description: "Dynamic row class computed per visible row.",
    },
    {
        name: "rowClassRules",
        type: "RowClassRules<T>",
        description: "Map of class name to predicate. Rules are evaluated in batch on every viewport commit.",
    },
];

export default function GridOptionsPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / Grid options
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Grid options
            </h2>
            <p className="my-6 max-w-170 font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">OmniGrid</code> React component accepts a flat options object
                that combines column definitions, row data, identity, dimension tuning, and plugin composition. Every
                prop is optional except <code className="font-mono text-[13px]">columns</code> (and{" "}
                <code className="font-mono text-[13px]">data</code> unless provided via a plugin).
            </p>

            <section className="mt-12">
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Constructor</h3>
                <CodeLine code={CONSTRUCTOR_CODE} />
            </section>
    
            <APIOptionsList description={<p className="my-3 font-sans text-[13px] leading-[1.6]">
                Properties accepted by <code className="font-mono text-[13px] font-bold">GridOptions&lt;T&gt;</code>.
            </p>} options={OPTIONS}/>          
        </div>
    );
}
