import { SpeedingTicketRow } from "@/src/data/types";
import { ColumnDef } from "@omnigrid/react";

export const definitionColDefs: ColumnDef<SpeedingTicketRow>[] = [
    { id: "ticketId", field: "ticketId", header: "ID", width: 110, pinned: "left" },
    { id: "pilotName", field: "pilotName", header: "Pilot", flex: 1, minWidth: 150 },
    { id: "vehicleType", field: "vehicleType", header: "Vehicle", flex: 1, minWidth: 150 },
    { id: "sector", field: "sector", header: "Sector", flex: 1, minWidth: 150 },
    { id: "speedKmh", field: "speedKmh", header: "Speed (km/h)", align: "right", width: 130 },
    { id: "fineCredits", field: "fineCredits", header: "Fine ($)", align: "right", width: 130 },
    { id: "status", field: "status", header: "Status", width: 110, pinned: "right" },
];
