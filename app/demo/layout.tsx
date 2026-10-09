import type { ReactNode } from "react";

import { ExamplesNav } from "@/src/components/content/example/ExamplesNav";
import { SiteHeader } from "@/src/components/content/SiteHeader";
import { SidebarLayout } from "@/src/components/content/SidebarLayout";

export default function ReactExamplesLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarLayout sidebar={<ExamplesNav />} header={<SiteHeader />} sidebarAriaLabel="React examples">
            {children}
        </SidebarLayout>
    );
}
