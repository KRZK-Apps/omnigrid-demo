"use client";

const CONSTRUCTOR_CODE = `new SortingPlugin<T>(options?: SortingPluginOptions<T>)`;

const USAGE_CODE = `import { useMemo } from "react";
import { OmniGrid } from "@omnigrid/react";
import { SortingPlugin } from "@omnigrid/sorting-plugin";

const sortingPlugin = useMemo(
    () =>
        new SortingPlugin<AlchemyRow>({
            compare: (left, right, column) => {
                // custom string comparison
                return String(left).localeCompare(String(right));
            },
        }),
    [],
);

<OmniGrid
    columns={alchemyMColDefs}
    data={data}
    getRowId={(row) => row.id}
    plugins={[sortingPlugin]}
    rowOverscan={20}
    style={{ height: "480px", width: "100%" }}
/>`;

export default function SortingPluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Plugin / Sorting
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                SortingPlugin
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">SortingPlugin</code> from{" "}
                <code className="font-mono text-[13px]">@omnigrid/sorting-plugin</code> adds column-header sorting to the
                grid. Clicking a column header toggles <code className="font-mono text-[13px]">asc</code> /{" "}
                <code className="font-mono text-[13px]">desc</code> / unsorted. Hold <kbd>Ctrl</kbd> while clicking to
                sort by multiple columns. A custom comparator can be supplied to control how values are compared.
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
                    Properties accepted by <code className="font-mono text-[13px]">SortingPluginOptions&lt;T&gt;</code>.
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
                            <tr className="border-b border-slate/20">
                                <td className="py-3 font-mono text-mint">compare</td>
                                <td className="py-3 font-mono text-slate">(left, right, column) =&gt; number</td>
                                <td className="py-3 text-slate">—</td>
                                <td className="py-3 leading-[1.6] text-ink dark:text-ink-dark">
                                    Custom comparator invoked with two cell values and the column definition. Return a negative number when <code
                                        className="font-mono"
                                    >
                                        left &lt; right
                                    </code>
                                    , positive when greater, zero when equal. Defaults to built-in comparison by type.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className="mt-[26px] text-[15px] font-semibold text-ink dark:text-ink-dark">SortModelItem</h4>
                <p className="mt-2 font-sans text-[13px] leading-[1.6]">
                    Each entry in the sort model describes one active sort descriptor:
                </p>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{`interface SortModelItem {
  columnId: string;
  direction: "asc" | "desc";
}`}</code>
                </pre>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">03</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Instance methods</h3>
                <div className="grid gap-4 font-sans text-[13px]">
                    <div>
                        <code className="font-mono text-mint">getSortModel()</code>
                        <span className="text-slate">: SortModelItem[]</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Returns the current sort descriptors in priority order.</p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">setSortModel(sortModel)</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">
                            Programmatically sets the sort model. Passing an empty array clears all sorting.
                        </p>
                    </div>
                    <div>
                        <code className="font-mono text-mint">clearSort()</code>
                        <span className="text-slate">: void</span>
                        <p className="mt-1 text-ink dark:text-ink-dark">Removes all sort descriptors and restores unsorted order.</p>
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
