"use client";

export default function PluginsPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Plugin / Base
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Base plugins
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                Base plugins ship with OmniGrid and cover the most common interactive behaviors: row selection, column
                sorting, and data pagination. Each plugin is a self-contained class that you instantiate with an options
                object and pass via the <code className="font-mono text-[13px]">plugins</code> prop of{" "}
                <code className="font-mono text-[13px]">&lt;OmniGrid /&gt;</code>.
            </p>
            <div className="mt-[52px] grid gap-6 border-t border-slate pt-[26px]">
                {[
                    {
                        label: "SelectionPlugin",
                        description: "Adds row selection via click or checkboxes. Controls selection mode, row selectability, and change callbacks.",
                        href: "/api/plugins/selection",
                    },
                    {
                        label: "SortingPlugin",
                        description: "Adds column-header sorting with optional multi-sort via Ctrl / Shift. Accepts a custom comparator.",
                        href: "/api/plugins/sorting",
                    },
                    {
                        label: "PaginationPlugin",
                        description:
                            "Slices rows into pages client-side or server-side. Renders navigation, page-size, and row-info blocks in top / bottom slots.",
                        href: "/api/plugins/pagination",
                    },
                ].map((plugin, index) => (
                    <section key={plugin.label} className="border-b border-slate pb-6 last:border-0 last:pb-0">
                        <span className="font-sans text-[11px] text-mint">{String(index + 1).padStart(2, "0")}</span>
                        <h3 className="text-[22px] font-normal tracking-[-.045em]">{plugin.label}</h3>
                        <p className="my-[10px] font-sans text-[13px] leading-[1.6]">{plugin.description}</p>
                        <a
                            href={plugin.href}
                            className="font-mono text-[13px] text-mint underline decoration-mint/40 underline-offset-2"
                        >
                            {plugin.label}
                        </a>
                    </section>
                ))}
            </div>
        </div>
    );
}
