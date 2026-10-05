import { MinionHealthStatus, MinionRow } from "@/src/data/types";
import { CellRenderParams } from "@omnigrid/react";
import { ReactNode } from "react";

const HEALTH_COLORS: Record<MinionHealthStatus, string> = {
    healthy: "#42B66E",
    "partially-frogified": "#A7E090",
    "on-leave": "#DFC450",
    missing: "#C05050",
};

export function MinionHealthRenderer({ value }: CellRenderParams<MinionRow>): ReactNode {
    const status = (value as MinionRow["healthStatus"]) ?? "missing";
    const color = HEALTH_COLORS[status] ?? "#878787";

    return (
        <span style={{ alignItems: "center", display: "inline-flex", gap: 6 }}>
            <span
                aria-hidden="true"
                style={{
                    backgroundColor: color,
                    borderRadius: "50%",
                    display: "inline-block",
                    height: 8,
                    width: 8,
                }}
            />
            {status.replace("-", " ")}
        </span>
    );
}