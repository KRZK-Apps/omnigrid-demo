"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    position?: "left" | "right";
    className?: string;
}

export function Drawer({ isOpen, onClose, children, position = "left", className = "" }: DrawerProps) {
    if (!isOpen) return null;

    const drawerContent = (
        <div
            className={`fixed inset-y-0 z-50 flex max-w-[280px] w-full flex-col bg-paper dark:bg-paper-dark shadow-xl transition-transform duration-300 ease-in-out ${
                position === "left" ? "left-0" : "right-0"
            } ${className}`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
        >
            <div className="flex h-14 items-center justify-between border-b border-slate dark:border-slate-dark px-4">
                <span className="font-sans text-sm font-medium text-ink dark:text-ink-dark">Menu</span>
                <button
                    type="button"
                    onClick={onClose}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-slate dark:text-slate-dark hover:bg-slate/10 dark:hover:bg-slate-dark/10"
                    aria-label="Close menu"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
    );

    return createPortal(drawerContent, document.body);
}