import type { ReactNode } from "react";

import { APINav } from "@/src/components/content/api/APINav";
import { SiteHeader } from "@/src/components/content/SiteHeader";
import { SidebarLayout } from "@/src/components/content/SidebarLayout";

export default function ApiLayout({ children }: { children: ReactNode }) {
    return (
        <SidebarLayout sidebar={<APINav />} header={<SiteHeader />} sidebarAriaLabel="API sections">
            {children}
        </SidebarLayout>
    );
}
