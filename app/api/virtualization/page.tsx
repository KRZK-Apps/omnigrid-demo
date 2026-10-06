"use client";

const USAGE_CODE = `const gridOptions = {
  columns: colDefs,
  data: rows,
  getRowId: (row) => row.id,
  // Overscan rows render extra content above and below the
  // visible window to prevent blank flashes on fast scroll.
  rowOverscan: 10,
  columnOverscan: 2,
};`;

export default function VirtualizationPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / Virtualization
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Virtualization
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                Virtualization is always enabled in OmniGrid — no opt-in is required. The core engine renders only the
                rows and columns currently visible in the scroll window, plus a small overscan margin. Off-screen nodes
                are recycled and repositioned via <code className="font-mono text-[13px]">transform: translateY</code>
                , which keeps the DOM node count constant regardless of dataset size.
            </p>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">01</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">How it works</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    The virtualizer maintains a pool of DOM row nodes. On scroll it:
                </p>
                <ol className="ml-6 list-decimal font-sans text-[13px] leading-[1.6]">
                    <li>Recomputes the viewport range (start row index, end row index, visible columns).</li>
                    <li>Reuses pooled nodes, updating each node's <code className="font-mono">transform</code> to the correct offset and binding new row data.</li>
                    <li>Leaves the DOM structure unchanged — no creation or destruction of nodes on the scroll hot path.</li>
                </ol>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Because row height is fixed (see <code className="font-mono text-[13px]">rowHeight</code> in Grid
                    options), the virtualizer can compute exact offsets without measuring individual rows — the
                    fundamental assumption that makes window rendering O(1) per scroll frame rather than O(n).
                </p>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">02</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Scroll decoupling</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Scroll-only changes (scrollTop / scrollLeft) flow through an ephemeral path that does{" "}
                    <strong>not</strong> notify the React store. This means scrolling never triggers a React re-render —
                    the DOM pool handles it imperatively. React re-renders are reserved for structural changes only:
                    data mutations, column updates, and dimension changes.
                </p>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">03</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Pinned columns</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Horizontally pinned columns (left / right) back onto their own DOM pool. Each pin pane is a sibling
                    inside the single scroll container and uses <code className="font-mono text-[13px]">position: sticky</code>{" "}
                    so it shares the container's native vertical scroll — no imperative scrollTop sync required. On the
                    horizontal axis, the pane's offset is translated into local coordinates so pinned cells always stay
                    in view.
                </p>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">04</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Tuning</h3>
                <p className="my-[10px] font-sans text-[13px] leading-[1.6]">
                    Two options let you widen the rendered window to reduce edge artefacts:
                </p>
                <div className="m-0 overflow-auto">
                    <table className="w-full border-collapse font-sans text-[13px]">
                        <thead>
                            <tr>
                                <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                    Option
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
                                <td className="py-3 font-mono text-mint">rowOverscan</td>
                                <td className="py-3 text-slate">4</td>
                                <td className="py-3 leading-[1.6] text-ink dark:text-ink-dark">
                                    Extra rows rendered above and below the visible viewport to prevent blank flashes during fast scroll.
                                </td>
                            </tr>
                            <tr className="border-b border-slate/20">
                                <td className="py-3 font-mono text-mint">columnOverscan</td>
                                <td className="py-3 text-slate">0</td>
                                <td className="py-3 leading-[1.6] text-ink dark:text-ink-dark">
                                    Extra columns rendered beyond the horizontal scroll window.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mt-[52px] border-t border-slate pt-[26px]">
                <span className="font-sans text-[11px] text-mint">05</span>
                <h3 className="mt-1 text-[22px] font-normal tracking-[-.045em]">Usage</h3>
                <pre className="m-0 overflow-auto bg-slate px-5 py-4 font-mono text-[13px] leading-[1.7] text-paper">
                    <code>{USAGE_CODE}</code>
                </pre>
            </section>
        </div>
    );
}
