import { SpeedingTicketRow } from "@/src/data/types";
import { ColumnDef } from "@omnigrid/react";

import { SpeedingTicketStatusRenderer } from "../../common/renderers/SpeedingTicketStatus";

export const columnGroupsColDefs: ColumnDef<SpeedingTicketRow>[] = [
    { id: "ticketId", field: "ticketId", header: "ID", width: 110 },
    {
        id: "data",
        header: "Data",
        children: [
            {
                id: "info",
                header: "Info",
                children: [
                    { id: "pilotName", field: "pilotName", header: "Pilot", minWidth: 250 },
                    { id: "vehicleType", field: "vehicleType", header: "Vehicle", flex: 1, minWidth: 300 },
                    { id: "sector", field: "sector", header: "Sector", flex: 1, minWidth: 300 },
                ],
            },
            { id: "speedKmh", field: "speedKmh", header: "Speed", align: "right", width: 130 },
            {
                id: "fine",
                header: "Fine",
                children: [
                    { id: "fineCredits", field: "fineCredits", header: "Credits", align: "right", width: 130 },
                    { id: "status", field: "status", header: "Status", minWidth: 100, cellRenderer: SpeedingTicketStatusRenderer },
                ],
            },
        ],
    },
];
