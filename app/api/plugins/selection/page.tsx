"use client";

const CONSTRUCTOR_CODE = `new SelectionPlugin<T>(options?: SelectionPluginOptions<T>)`;

const USAGE_CODE = `import { useMemo } from "react";
import { OmniGrid } from "@omnigrid/react";
import { SelectionPlugin } from "@omnigrid/selection-plugin";

const selectionPlugin = useMemo(
    () =>
        new SelectionPlugin<AlchemyRow>({
            mode: "multiple",
            showRowCheckboxes: true,
            showHeaderCheckbox: true,
            onSelectionChange: (state) => {
                console.log(state.selectedRows);
            },
        }),
    [],
);

<OmniGrid
    columns={alchemyMColDefs}
    data={data}
    getRowId={(row) => row.id}
    plugins={[selectionPlugin]}
    style={{ height: "480px", width: "100%" }}
/>`;

const OPTIONS = [
    {
        name: "mode",
        type: '"single" | "multiple"',
        defaultValue: '"multiple"',
        description: "Selection behavior: click-to-select a single row, or select a range with Shift / Ctrl click.",
    },
    {
        name: "checkboxOnly",
        type: "boolean",
        defaultValue: "false",
        description: "When true, selection changes only via checkboxes — row clicks are ignored.",
    },
    {
        name: "replaceSelectionOnClick",
        type: "boolean",
        defaultValue: "false",
        description:
            "Clicking a selected row in multiple mode clears the rest of the selection instead of keeping it.",
    },
    {
        name: "showRowCheckboxes",
        type: "boolean",
        defaultValue: "false",
        description:
            "Renders a checkbox column. Toggled via the header checkbox or row clicks. Columns get an extra selection column automatically.",
    },
    {
        name: "showHeaderCheckbox",
        type: "boolean",
        defaultValue: "false",
        description: "Renders a checkbox in the header of the selection column. Selects all / none / indeterminate.",
    },
    {
        name: "isRowSelectable",
        type: "(row: T, index: number) => boolean",
        defaultValue: "—",
        description: "Predicate that enables or disables selection per row. Unselectable rows get the `omnigrid-row-unselectable` class.",
    },
    {
        name: "checkboxRenderer",
        type: "(params: SelectionRendererParams<T>) => unknown",
        defaultValue: "—",
        description: "Custom renderer for the checkbox element — replace the default UI with a framework-specific component.",
    },
    {
        name: "onSelectionChange",
        type: "(state: SelectionState<T>) => void",
        defaultValue: "—",
        description: "Fires whenever the selection changes, with the full selected row IDs and row data.",
    },
    {
        name: "selectionColumnId",
        type: "string",
        defaultValue: '"selection"',
        description: "Explicit ID for the auto-inserted checkbox column. Useful for stable column references.",
    },
    {
        name: "selectionColumnWidth",
        type: "number",
        defaultValue: "40",
        description: "Width (px) of the checkbox column.",
    },
];

export default function SelectionPluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Plugin / Selection
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                SelectionPlugin
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">SelectionPlugin</code> from <code className="font-mono text-[13px]">@omnigrid/selection-plugin</code> adds
                row-selection behavior to the grid. It supports single and multiple modes, optional checkbox columns,
                per-row selectability, and live change callbacks. Selection state is stored internally and can be
                queried via the plugin instance methods.
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
                    Properties accepted by <code className="font-mono text-[13px]">SelectionPluginOptions&lt;T&gt;</code>.
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
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Instance methods</h3>
                <div className="grid gap-4 font-sans text-[13px]">
                    <div>
                        <code className="font-mono text-mint">getSelectedRowIds()</code>
                        <span className="text-slate">: RowId[]</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Returns the IDs of all currently selected rows.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">getSelectedRows()</code>
                        <span className="text-slate">: T[]</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Returns the data objects of all currently selected rows.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">getSelectionState()</code>
                        <span className="text-slate">: SelectionState&lt;T&gt;</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Returns both IDs and rows in a single object.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">isSelected(rowId)</code>
                        <span className="text-slate">: boolean</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Checks whether a specific row is selected.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">setSelectedRowIds(rowIds)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Programmatically sets the selection by row IDs.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">clearSelection()</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Clears all selected rows.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">toggleRow(rowId, index, modifiers?)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Toggles a row's selected state. Pass Shift / Ctrl modifiers for range or toggle selection.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">updateOptions(options)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Updates configuration at runtime without recreating the plugin instance.</p>
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
