"use client";

import { LHSMenu, type NavGroup } from "@/src/components/ui/menu/LHSMenu";
import { useSidebarActions } from "@/src/components/content/SidebarLayout";

const API_ITEMS: NavGroup[] = [
    {
        label: "Grid options",
        items: [{ label: "Grid options", href: "/api/grid-options" }],
    },
    {
        label: "Column definitions",
        items: [{ label: "Column definitions", href: "/api/column-definitions" }],
    },
    {
        label: "Plugins",
        items: [
            {
                label: "Base",
                children: [
                    { label: "Selection", href: "/api/plugins/selection" },
                    { label: "Sorting", href: "/api/plugins/sorting" },
                    { label: "Pagination", href: "/api/plugins/pagination" },
                ],
            },
        ],
    },
    {
        label: "Virtualization",
        items: [{ label: "Virtualization", href: "/api/virtualization" }],
    },
];

export function APINav() {
    const { closeDrawer } = useSidebarActions();
    return (
        <aside className="p-5">
            <div className="pb-5 w-full">
                <p className="font-bold"><a href="/api">API Reference</a></p>
            </div>
            <LHSMenu groups={API_ITEMS} ariaLabel="API sections" onNavigate={closeDrawer} />
        </aside>
    );
}
