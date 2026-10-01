import type { ReactNode } from "react";

export default function ColumnsExampleLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Columns</p>
            {children}
        </>
    );
}
