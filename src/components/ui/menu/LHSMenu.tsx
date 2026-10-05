"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
    label: string;
    href: string;
}

export interface NavItem {
    label: string;
    href?: string;
    children?: NavLink[];
}

export interface NavGroup {
    label: string;
    items: NavItem[];
}

interface LHSMenuProps {
    groups: NavGroup[];
    ariaLabel?: string;
}

function splitHash(href: string): [path: string, hash: string] {
    const [path, hash = ""] = href.split("#");
    return [path, hash];
}

function isActive(href: string | undefined, pathname: string, hash: string): boolean {
    if (!href) return false;
    const [path, targetHash] = splitHash(href);
    return path === pathname && (targetHash === "" || targetHash === hash);
}

function isInSubtree(item: NavItem, pathname: string): boolean {
    if (item.href && pathname === item.href) return true;
    if (item.href) {
        const base = item.href.replace(/\/$/, "");
        if (pathname.startsWith(`${base}/`)) return true;
    }
    const children = item.children ?? [];
    return children.some((child) => splitHash(child.href)[0] === pathname);
}

function getSectionIds(item: NavItem): string[] {
    const children = item.children ?? [];
    return children.map((child) => splitHash(child.href)[1]).filter(Boolean);
}

export function LHSMenu({ groups, ariaLabel = "Navigation" }: LHSMenuProps) {
    const pathname = usePathname();
    const [hash, setHash] = useState("");
    const [expanded, setExpanded] = useState<ReadonlySet<string>>(() => {
        const labels = groups.flatMap((group) =>
            group.items
                .filter((item) => (item.children?.length ?? 0) > 0)
                .filter((item) => isInSubtree(item, pathname))
                .map((item) => `${group.label}/${item.label}`),
        );
        return new Set(labels);
    });
    const [activeAnchor, setActiveAnchor] = useState<string>("");

    useEffect(() => {
        const readHash = () => setHash(window.location.hash.replace(/^#/, ""));
        readHash();
        window.addEventListener("hashchange", readHash);
        return () => window.removeEventListener("hashchange", readHash);
    }, []);

    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const sectionIds = groups.flatMap((group) => group.items).flatMap(getSectionIds);
        if (sectionIds.length === 0) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveAnchor(entry.target.id);
                        break;
                    }
                }
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: [0.1, 0.5, 0.9],
            },
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observerRef.current?.observe(element);
        });

        return () => observerRef.current?.disconnect();
    }, [pathname, groups]);

    useEffect(() => {
        setExpanded((previous) => {
            const toAdd = groups.flatMap((group) =>
                group.items
                    .filter((item) => (item.children?.length ?? 0) > 0)
                    .filter((item) => isInSubtree(item, pathname))
                    .map((item) => `${group.label}/${item.label}`),
            );
            if (toAdd.length === 0) return previous;
            const next = new Set(previous);
            toAdd.forEach((label) => next.add(label));
            return next;
        });
    }, [pathname, groups]);

    const toggleExpanded = (label: string) => {
        setExpanded((previous) => {
            const next = new Set(previous);
            if (next.has(label)) next.delete(label);
            else next.add(label);
            return next;
        });
    };

    const isItemActive = (item: NavItem): boolean => {
        if (item.href && isActive(item.href, pathname, hash)) return true;
        if (item.children) {
            return item.children.some(
                (child) => isActive(child.href, pathname, hash) || (activeAnchor !== "" && splitHash(child.href)[1] === activeAnchor),
            );
        }
        return false;
    };

    const isChildActive = (child: NavLink): boolean => {
        return isActive(child.href, pathname, hash) || (activeAnchor !== "" && splitHash(child.href)[1] === activeAnchor);
    };

    const renderChild = (child: NavLink): ReactNode => {
        const active = isChildActive(child);
        return (
            <li key={child.href}>
                <Link
                    href={child.href}
                    onClick={() => setHash(splitHash(child.href)[1])}
                    className={`flex items-center border-l py-2 pl-4 font-sans text-[13px] hover:text-mint dark:hover:text-mint-dark ${
                        active ? "border-mint text-mint dark:text-mint-dark" : "border-slate/40 text-ink dark:text-ink-dark dark:border-slate-dark/40"
                    }`}
                >
                    {child.label}
                </Link>
            </li>
        );
    };

    const renderItem = (item: NavItem, index: number, groupLabel: string): ReactNode => {
        const hasChildren = item.children !== undefined && item.children.length > 0;
        const children = item.children ?? [];
        const itemKey = `${groupLabel}/${item.label}`;
        const isOpen = hasChildren && expanded.has(itemKey);
        const active = isItemActive(item);

        return (
            <li key={item.label}>
                <div className="flex items-center">
                    {item.href ? (
                        <Link
                            href={item.href}
                            className={`flex min-w-0 flex-1 items-center gap-3  py-2.5 font-sans text-sm hover:text-mint dark:hover:text-mint-dark ${
                                active ? " text-mint dark:text-mint-dark" : ""
                            }`}
                        >
                            <strong className="text-[10px] font-normal text-mint">{String(index + 1).padStart(2, "0")}</strong>
                            <span className="truncate">{item.label}</span>
                        </Link>
                    ) : (
                        <div
                            className={`flex min-w-0 flex-1 items-center gap-3  py-2.5 font-sans text-sm ${active ? "text-mint dark:text-mint-dark" : ""}`}
                        >
                            <strong className="text-[10px] font-normal text-mint">{String(index + 1).padStart(2, "0")}</strong>
                            <span className="truncate">{item.label}</span>
                        </div>
                    )}
                    {hasChildren && (
                        <button
                            type="button"
                            aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                            aria-expanded={isOpen}
                            onClick={() => toggleExpanded(itemKey)}
                            className="cursor-pointer border-b border-transparent p-2.5 font-sans text-xs text-slate dark:text-slate-dark hover:text-mint dark:hover:text-mint-dark"
                        >
                            <span className={`inline-block transition-transform duration-150`} aria-hidden="true">
                                {isOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </span>
                        </button>
                    )}
                </div>
                {hasChildren && (
                    <ul className={isOpen ? "grid" : "hidden"} role="list">
                        {children.map(renderChild)}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <nav aria-label={ariaLabel}>
            {groups.map((group) => (
                <section key={group.label} className="mb-8">
                    <h2 className="mb-1 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-slate dark:text-slate-dark">{group.label}</h2>
                    <div className="mb-3 h-px w-full bg-slate/40 dark:bg-slate-dark/40" aria-hidden="true" />
                    <ul className="grid gap-2">{group.items.map((item, index) => renderItem(item, index, group.label))}</ul>
                </section>
            ))}
        </nav>
    );
}
