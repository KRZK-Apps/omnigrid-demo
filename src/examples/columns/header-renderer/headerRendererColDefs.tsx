import { SpeedingTicketRow } from "@/src/data/types";
import { ColumnDef } from "@omnigrid/react";

function InfoIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    );
}

export const headerRendererColDefs: ColumnDef<SpeedingTicketRow>[] = [
    {
        id: "ticketId",
        field: "ticketId",
        header: "ID",
        width: 110,
        pinned: "left",
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "help",
                }}
                title="Unique ticket identifier"
            >
                {column.header}
                <InfoIcon />
            </span>
        ),
    },
    {
        id: "pilotName",
        field: "pilotName",
        header: "Pilot",
        flex: 1,
        minWidth: 150,
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "help",
                }}
                title="Name of the pilot who received the ticket"
            >
                {column.header}
                <InfoIcon />
            </span>
        ),
    },
    {
        id: "vehicleType",
        field: "vehicleType",
        header: "Vehicle",
        flex: 1,
        minWidth: 150,
    },
    {
        id: "sector",
        field: "sector",
        header: "Sector",
        flex: 1,
        minWidth: 150,
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "help",
                }}
                title="Galactic sector where the violation occurred"
            >
                {column.header}
                <InfoIcon />
            </span>
        ),
    },
    {
        id: "speedKmh",
        field: "speedKmh",
        header: "Speed (km/h)",
        align: "right",
        width: 130,
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "flex-end",
                    cursor: "help",
                }}
                title="Recorded speed in kilometers per hour"
            >
                <InfoIcon />
                {column.header}
            </span>
        ),
    },
    {
        id: "fineCredits",
        field: "fineCredits",
        header: "Fine ($)",
        align: "right",
        width: 130,
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    justifyContent: "flex-end",
                    cursor: "help",
                }}
                title="Monetary fine in galactic credits"
            >
                <InfoIcon />
                {column.header}
            </span>
        ),
    },
    {
        id: "status",
        field: "status",
        header: "Status",
        width: 110,
        pinned: "right",
        headerRenderer: (column) => (
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "help",
                }}
                title="Current ticket status (paid, pending, disputed)"
            >
                {column.header}
                <InfoIcon />
            </span>
        ),
    },
];