import { MinionRow } from "@/src/data/types";
import { CellRenderParams } from "@omnigrid/react";
import { ReactNode } from "react";

export function MinionSalaryRenderer({ value }: CellRenderParams<MinionRow>): ReactNode {
    const salary = (value as number) ?? 0;
    
    const isHigh = salary > 3000;
    const isMedium = salary >= 1500 && salary <= 3000;

    const badgeStyle = {
        alignItems: "center",
        backgroundColor: isHigh ? "#E6F4EA" : isMedium ? "#FEF7E0" : "#F1F3F4",
        color: isHigh ? "#137333" : isMedium ? "#B06000" : "#5F6368",
        borderRadius: "6px",
        display: "inline-flex",
        fontSize: "12px",
        fontWeight: 500,
        gap: "4px",
        padding: "2px 8px",
    };

    return (
        <span style={{ alignItems: "center", display: "inline-flex", gap: 8 }}>
            <span style={badgeStyle}>
                <span>{salary.toLocaleString()} $</span>
            </span>
            {isHigh && (
                <span title="Top Earner" style={{ fontSize: "14px" }} aria-label="Top Earner">
                    🔥
                </span>
            )}
        </span>
    );
}