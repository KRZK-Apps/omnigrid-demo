import { SpeedingTicketRow } from "@/src/data/types";
import { CellRenderParams } from "@omnigrid/react";

const STATUS_COLORS: Record<string, string> = {
    paid: "#42B66E",
    pending: "#C5C5C4",
    unpaid: "#F5D02C",
};

function resolveColor(status: string) {
    return STATUS_COLORS[status] ?? "#DFC450";
}

export function SpeedingTicketStatusRenderer({ value }: CellRenderParams<SpeedingTicketRow>) {
    return <div style={{ color: resolveColor(value as string) }}>{(value as string).toUpperCase()}</div>;
}
