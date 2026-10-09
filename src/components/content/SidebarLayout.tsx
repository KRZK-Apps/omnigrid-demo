"use client";

import type { ReactNode } from "react";
import { useState, createContext, useContext, useEffect } from "react";
import { Menu, ChevronLeft } from "lucide-react";
import { Drawer } from "@/src/components/ui/drawer/Drawer";

interface SidebarContextValue {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    closeDrawer: () => void;
    hasSidebar: boolean;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
    return useContext(SidebarContext);
}

export function useSidebarActions() {
    const context = useContext(SidebarContext);
    if (!context) {
        return {
            isDrawerOpen: false,
            toggleDrawer: () => {},
            closeDrawer: () => {},
        };
    }
    const { hasSidebar, ...actions } = context;
    return actions;
}

interface SidebarLayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
    header?: ReactNode;
    sidebarAriaLabel?: string;
}

export function SidebarLayout({ children, sidebar, header, sidebarAriaLabel = "Navigation" }: SidebarLayoutProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
    const closeDrawer = () => setIsDrawerOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDrawerOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const contextValue = {
        isDrawerOpen,
        toggleDrawer,
        closeDrawer,
        hasSidebar: true,
    };

    return (
        <SidebarContext.Provider value={contextValue}>
            <main className="flex h-screen flex-col overflow-hidden bg-paper dark:bg-paper-dark">
                {header}
                <div className="grid min-h-0 flex-1 grid-cols-[280px_minmax(0,1fr)] max-md:grid-cols-1">
                    <aside
                        className="hidden h-full overflow-y-auto border-r border-slate dark:border-slate-dark md:block"
                        aria-label={sidebarAriaLabel}
                    >
                        {sidebar}
                    </aside>
                    <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} position="left" aria-label={sidebarAriaLabel}>
                        {sidebar}
                    </Drawer>
                    <div className="h-full overflow-y-auto">
                        <div className="flex flex-col gap-4 p-5">{children}</div>
                    </div>
                </div>
            </main>
        </SidebarContext.Provider>
    );
}

export function MobileMenuButton() {
    const context = useSidebar();
    if (!context?.hasSidebar) return null;

    const { isDrawerOpen, toggleDrawer } = context;
    return (
        <button
            type="button"
            onClick={toggleDrawer}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md text-slate dark:text-slate-dark hover:bg-slate/10 dark:hover:bg-slate-dark/10"
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={isDrawerOpen}
        >
            <Menu className="h-6 w-6" />
        </button>
    );
}