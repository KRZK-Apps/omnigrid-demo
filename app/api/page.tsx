"use client";

export default function ApiIndexPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / v0.1
            </p>
            <h2 className="max-w-[740px] text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Build your own data surface
            </h2>
            <p className="my-[22px] max-w-[680px] font-sans text-sm leading-[1.6]">
                OmniGrid separates the grid engine from framework bindings and optional behavior. That keeps integrations
                familiar while the runtime stays portable. Use the navigation to explore each reference section.
            </p>

            <div className="mt-[52px] grid gap-6 border-t border-slate pt-[26px]">
                {[
                    {
                        title: "Grid options",
                        description: "Define columns, rows, dimensions, and plugin composition.",
                        href: "/api/grid-options",
                        code: "<OmniGrid columns={columns} data={rows} />",
                    },
                    {
                        title: "Column definitions",
                        description: "Use fields, accessors, formatters, renderers, and flexible widths.",
                        href: "/api/column-definitions",
                        code: '{ id: "name", field: "name", flex: 1 }',
                    },
                    {
                        title: "Plugins",
                        description: "Register focused behavior such as sorting without coupling it to the core.",
                        href: "/api/plugins",
                        code: "plugins={[sortingPlugin]}",
                    },
                    {
                        title: "Virtualization",
                        description: "Render only the visible rows and columns for predictable performance.",
                        href: "/api/virtualization",
                        code: "rowOverscan={6}",
                    },
                ].map((item, index) => (
                    <section key={item.title} className="border-b border-slate pb-6 last:border-0 last:pb-0">
                        <span className="font-sans text-[11px] text-mint">{String(index + 1).padStart(2, "0")}</span>
                        <h3 className="text-[22px] font-normal tracking-[-.045em]">{item.title}</h3>
                        <p className="my-[10px] font-sans text-[13px] leading-[1.6]">{item.description}</p>
                        <a
                            href={item.href}
                            className="font-mono text-[13px] text-mint underline decoration-mint/40 underline-offset-2"
                        >
                            {item.title}
                        </a>
                    </section>
                ))}
            </div>
        </div>
    );
}
