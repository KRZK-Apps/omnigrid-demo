"use client";

import { APIOptionsList } from "@/src/components/content/api/APIOptionsList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";

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
  sortIndex?: number;
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


const OPTIONS = [
    {
        name: "id",
        type: "string",
        description: "Unique column identifier. Used for sorting, pinning, and plugin internal lookups.",
    },
    {
        name: "header",
        type: "string",
        description: "Column header text displayed in the header row.",
    },
    {
        name: "field",
        type: "keyof T | string",
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
        description: "Explicit column width in pixels. When set, this takes precedence over flex-based sizing.",
    },
    {
        name: "minWidth",
        type: "number",
        description: "Minimum width constraint when the grid is resized.",
    },
    {
        name: "maxWidth",
        type: "number",
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
        description: "Initial sort direction. Useful for predefined sorting via the column definition.",
    },
    {
        name: "sortIndex",
        type: "number",
        description: "Runtime 1-based sort priority maintained by SortingPlugin while multiple columns are sorted.",
    },
    {
        name: "pinned",
        type: '"left" | "right"',
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
        description: "Computes the cell value from the row data when field is not sufficient.",
    },
    {
        name: "valueFormatter",
        type: "(value: unknown) => string",
        description: "Formats the raw value into a display string for the cell.",
    },
    {
        name: "cellRenderer",
        type: "(params: CellRenderParams<T>) => unknown",
        description: "Custom renderer that replaces the cell content entirely (e.g. a badge, chart, or framework component).",
    },
    {
        name: "cellStyle",
        type: "RowStyle",
        description: "Static CSS styles applied to every cell in this column.",
    },
    {
        name: "getCellStyle",
        type: "(params: CellRenderParams<T>) => RowStyle | undefined",
        description: "Dynamic cell styles computed per visible cell.",
    },
    {
        name: "cellClass",
        type: "string | ((params) => string | undefined)",
        description: "Static or dynamic CSS class applied to cells in this column.",
    },
    {
        name: "getCellClass",
        type: "(params: CellRenderParams<T>) => string | undefined",
        description: "Dynamic cell class computed per visible cell.",
    },
    {
        name: "cellClassRules",
        type: "Record<string, (params) => boolean>",
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
                        
            <a
                href="/demo/react/columns/definition"
                target="_blank"
                className="font-sans text-[13px] font-bold text-mint hover:underline">
                Usage
            </a>

            <section className="mt-12">
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">ColumnLeafDef&lt;T&gt;</h3>
                    <CodeLine code={LEAF_DEF_CODE} />
            </section>
    
            <APIOptionsList 
                description={<p className="my-3 font-sans text-[13px] leading-[1.6]">
                    Full list of properties on <code className="font-mono text-[13px]">ColumnLeafDef&lt;T&gt;</code>.
                </p>}
                 options={OPTIONS}
            />
        </div>
    );
}
