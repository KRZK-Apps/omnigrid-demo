"use client";

import { LHSMenu, type NavGroup } from "@/src/components/ui/menu/LHSMenu";

export type { NavGroup, NavItem, NavLink } from "@/src/components/ui/menu/LHSMenu";

const NAV_GROUPS: NavGroup[] = [
    {
        label: "Getting Started",
        items: [{ label: "Quick start", href: "/examples/react/quick-start" }],
    },
    {
        label: "Columns",
        items: [
            { label: "Pinned columns", href: "/examples/react/columns/pinned-columns" },
            { label: "Column groups", href: "/examples/react/columns/column-groups" },
        ],
    },
    {
        label: "Rows",
        items: [
            {
                label: "Style",
                children: [
                    { label: "Row style", href: "/examples/react/rows/style#row-style" },
                    { label: "Get row style", href: "/examples/react/rows/style#get-row-style" },
                    { label: "Row class", href: "/examples/react/rows/style#row-class" },
                    { label: "Get row class", href: "/examples/react/rows/style#get-row-class" },
                    { label: "Row class rules", href: "/examples/react/rows/style#row-class-rules" },
                ],
            },
            { label: "No row hover", href: "/examples/react/rows/no-hover" },
        ],
    },
    {
        label: "Cells",
        items: [
            {
                label: "Style",
                children: [
                    { label: "Cell style", href: "/examples/react/cells/style#cell-style" },
                    { label: "Get cell style", href: "/examples/react/cells/style#get-cell-style" },
                    { label: "Cell class", href: "/examples/react/cells/style#cell-class" },
                    { label: "Get cell class", href: "/examples/react/cells/style#get-cell-class" },
                    { label: "Cell class rules", href: "/examples/react/cells/style#cell-class-rules" },
                ],
            },
            {
                label: "Renderer",
                children: [{ label: "Custom", href: "/examples/react/cells/renderer#custom" }],
            },
        ],
    },
    {
        label: "Plugins",
        items: [
            {
                label: "Base",
                href: "/examples/react/plugins/base",
                children: [
                    { label: "Base case", href: "/examples/react/plugins/base/core" },
                    { label: "Selection", href: "/examples/react/plugins/base/selection" },
                    { label: "Sorting", href: "/examples/react/plugins/base/sorting" },
                    { label: "Pagination", href: "/examples/react/plugins/base/pagination" },
                ],
            },
            {
                label: "Pro",
                href: "/examples/react/plugins/pro",
                children: [],
            },
        ],
    },
];

export function ExamplesNav() {
    return (
        <aside className="px-8 py-15 max-md:px-5 max-md:py-10">
            <LHSMenu groups={NAV_GROUPS} ariaLabel="React examples" />
            <p className="mt-15 max-w-xs font-sans text-xs leading-[1.6] max-sm:mt-6 text-ink dark:text-ink-dark">
                Every example pairs a working table with the smallest useful integration.
            </p>
        </aside>
    );
}
