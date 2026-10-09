"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { SortingGridExample } from "@/src/examples/plugins/base/sorting/SortingGridExample";
import exampleSource from "@/src/examples/plugins/base/sorting/SortingGridExample.tsx?raw";
import { SortingServerGridExample } from "@/src/examples/plugins/base/sorting/serverSort/SortingServerGridExample";
import sortingServerGridExampleSource from "@/src/examples/plugins/base/sorting/serverSort/SortingServerGridExample.tsx?raw";
import { SortingCustomComparatorGridExample } from "@/src/examples/plugins/base/sorting/customComparator/SortingCustomComparatorGridExample";
import sortingCustomComparatorGridExampleSource from "@/src/examples/plugins/base/sorting/customComparator/SortingCustomComparatorGridExample.tsx?raw";
import customComparatorColDefsSource from "@/src/examples/plugins/base/sorting/customComparator/customComparatorColDefs.ts?raw";
import { DisabledSortGridExample } from "@/src/examples/plugins/base/sorting/disabledSort/DisabledSortGridExample";
import disabledSortGridExampleSource from "@/src/examples/plugins/base/sorting/disabledSort/DisabledSortGridExample.tsx?raw";
import disabledSortColDefsSource from "@/src/examples/plugins/base/sorting/disabledSort/disabledSortColDefs.ts?raw";
import { PredefinedSortingGridExample } from "@/src/examples/plugins/base/sorting/predefinedSort/PredefinedSortingGridExample";
import PredefinedSortingGridExampleSource from "@/src/examples/plugins/base/sorting/predefinedSort/PredefinedSortingGridExample.tsx?raw";
import predefinedSortinColDefsSource from "@/src/examples/plugins/base/sorting/predefinedSort/predefinedSortingColDefs.ts?raw";
import { SortingEventsGridExample } from "@/src/examples/plugins/base/sorting/events/SortingEventsGridExample";
import sortingEventsGridExampleSource from "@/src/examples/plugins/base/sorting/events/SortingEventsGridExample.tsx?raw";

export default function SortingExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">Plugin / Sorting</p>
            <ExampleShell
                title="Simple sorting"
                description="Click a column header to sort by that column. Use click + Ctrl to sort multiple columns."
                sources={[{ label: "SortingGridExample.tsx", code: exampleSource }]}
            >
                <SortingGridExample />
            </ExampleShell>
            <ExampleShell
                title="Predefined sorting"
                description={
                    <span>
                        Use the <b>sortState</b> prop to sort by a specific column.
                    </span>
                }
                sources={[
                    { label: "PredefinedSortingGridExample.tsx", code: PredefinedSortingGridExampleSource },
                    { label: "predefinedSortingColDefs.ts", code: predefinedSortinColDefsSource },
                ]}
            >
                <PredefinedSortingGridExample />
            </ExampleShell>
            <ExampleShell
                title="Disable sorting"
                description={
                    <span>
                        Set <b>sortable=&#123;false&#125;</b> on a column to prevent it from being sorted. Disabled columns drop the sort
                        affordance and ignore header clicks — all other columns remain sortable.
                    </span>
                }
                sources={[
                    { label: "DisabledSortGridExample.tsx", code: disabledSortGridExampleSource },
                    { label: "disabledSortColDefs.ts", code: disabledSortColDefsSource },
                ]}
            >
                <DisabledSortGridExample />
            </ExampleShell>
            <ExampleShell
                title="Custom comparator"
                description={
                    <span>
                        A column-level <b>comparator</b> takes priority over the plugin's global <b>compare</b> option. Here the "Item Name" column sorts by string length
                        instead of alphabetically, while every other column falls back to the built-in type-aware comparator.
                    </span>
                }
                sources={[
                    { label: "SortingCustomComparatorGridExample.tsx", code: sortingCustomComparatorGridExampleSource },
                    { label: "customComparatorColDefs.ts", code: customComparatorColDefsSource },
                ]}
            >
                <SortingCustomComparatorGridExample />
            </ExampleShell>
            <ExampleShell
                title="Server-side sorting"
                description={
                    <span>
                        In <b>server</b> mode the plugin skips local row reordering and instead calls <b>onChange</b> with the updated sort model, leaving data fetching and ordering to the host. The sort model drives a simulated server request (here re-sorting a generated dataset) whose result is fed back into the <b>data</b> prop.
                    </span>
                }
                sources={[
                    { label: "SortingServerGridExample.tsx", code: sortingServerGridExampleSource },
                ]}
            >
                <SortingServerGridExample />
            </ExampleShell>
            <ExampleShell
                title="Sort events"
                description={
                    <span>
                        The sorting plugin exposes an <code>onChange</code> callback that fires with the current sort model whenever the header sort state
                        changes. Click any column header to sort — each line below is a single event, listing the column id and direction of every active sort in
                        priority order.
                    </span>
                }
                sources={[
                    { label: "SortingEventsGridExample.tsx", code: sortingEventsGridExampleSource },
                ]}
            >
                <SortingEventsGridExample />
            </ExampleShell>
        </>
    );
}
