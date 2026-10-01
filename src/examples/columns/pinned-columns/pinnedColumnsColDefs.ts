import { SpeedingTicketRow } from "@/src/data/types";
import { ColumnDef } from "@omnigrid/react";

export const pinnedColumnsColDefs: ColumnDef<SpeedingTicketRow>[] = [
    { id: "ticketId", field: "ticketId", header: "ID", width: 110, pinned: "left" },
    { id: "pilotName", field: "pilotName", header: "Pilot", minWidth: 250, pinned: "left" },
    { id: "vehicleType", field: "vehicleType", header: "Vehicle", flex: 1, minWidth: 300 },
    { id: "sector", field: "sector", header: "Sector", flex: 1, minWidth: 300 },
    { id: "speedKmh", field: "speedKmh", header: "Speed", align: "right", width: 130 },
    { id: "excuse", field: "excuse", header: "Excuse", minWidth: 500 },
    { id: "fineCredits", field: "fineCredits", header: "Fine", align: "right", width: 130, pinned: "right" },
];
