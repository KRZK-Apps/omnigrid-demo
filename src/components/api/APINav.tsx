"use client";

import { LHSMenu, type NavGroup } from "@/src/components/ui/menu/LHSMenu";

const API_ITEMS: NavGroup[] = [
    {
        label: "Grid options",
        items: [{ label: "Grid options", href: "/api#grid-options" }],
    },
    {
        label: "Column definitions",
        items: [{ label: "Column definitions", href: "/api#column-definitions" }],
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
        items: [{ label: "Virtualization", href: "/api#virtualization" }],
    },
];

export function APINav() {
    return (
        <aside className="px-8 py-15  max-md:px-5 max-md:py-10">
            <LHSMenu groups={API_ITEMS} ariaLabel="API sections" />
        </aside>
    );
}
