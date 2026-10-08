import { LHSMenu, type NavGroup } from "@/src/components/ui/menu/LHSMenu";

export type { NavGroup, NavItem, NavLink } from "@/src/components/ui/menu/LHSMenu";

const NAV_GROUPS: NavGroup[] = [
    {
        label: "Getting Started",
        items: [{ label: "Quick start", href: "/demo/react/quick-start" }],
    },
    {
        label: "Columns",
        items: [
            { label: "Definition", href: "/demo/react/columns/definition" },
            { label: "Pinned columns", href: "/demo/react/columns/pinned-columns" },
            { label: "Column groups", href: "/demo/react/columns/column-groups" },
        ],
    },
    {
        label: "Rows",
        items: [
            {
                label: "Style",
                children: [
                    { label: "Row style", href: "/demo/react/rows/style#row-style" },
                    { label: "Get row style", href: "/demo/react/rows/style#get-row-style" },
                    { label: "Row class", href: "/demo/react/rows/style#row-class" },
                    { label: "Get row class", href: "/demo/react/rows/style#get-row-class" },
                    { label: "Row class rules", href: "/demo/react/rows/style#row-class-rules" },
                ],
            },
            { label: "No row hover", href: "/demo/react/rows/no-hover" },
        ],
    },
    {
        label: "Cells",
        items: [
            {
                label: "Style",
                children: [
                    { label: "Cell style", href: "/demo/react/cells/style#cell-style" },
                    { label: "Get cell style", href: "/demo/react/cells/style#get-cell-style" },
                    { label: "Cell class", href: "/demo/react/cells/style#cell-class" },
                    { label: "Get cell class", href: "/demo/react/cells/style#get-cell-class" },
                    { label: "Cell class rules", href: "/demo/react/cells/style#cell-class-rules" },
                ],
            },
            {
                label: "Renderer",
                children: [{ label: "Custom", href: "/demo/react/cells/renderer#custom" }],
            },
        ],
    },
    {
        label: "Plugins",
        items: [
            {
                label: "Base",
                href: "/demo/react/plugins/base",
                children: [
                    { label: "Base case", href: "/demo/react/plugins/base/core" },
                    { label: "Selection", href: "/demo/react/plugins/base/selection" },
                    { label: "Sorting", href: "/demo/react/plugins/base/sorting" },
                    { label: "Resize", href: "/demo/react/plugins/base/resize" },
                    { label: "Pagination", href: "/demo/react/plugins/base/pagination" },
                ],
            },
            {
                label: "Pro",
                href: "/demo/react/plugins/pro",
                children: [],
            },
        ],
    },
];

export function ExamplesNav() {
    return (
        <aside className="p-5">
            <LHSMenu groups={NAV_GROUPS} ariaLabel="React examples" />
            <p className="mt-15 max-w-xs font-sans text-xs leading-[1.6] max-sm:mt-6 text-ink dark:text-ink-dark">
                Every example pairs a working table with the smallest useful integration.
            </p>
        </aside>
    );
}
