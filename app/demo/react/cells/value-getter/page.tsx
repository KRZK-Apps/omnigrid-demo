"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { ValueGetterExample } from "@/src/examples/cells/value-getter/ValueGetterExample";
import valueGetterExampleSource from "@/src/examples/cells/value-getter/ValueGetterExample.tsx?raw";
import valueGetterExampleColDefsSource from "@/src/examples/cells/value-getter/valueGetterExampleColDefs.ts?raw";

export default function ValueGetterExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12en] text-mint">Cells / Value Getter</p>
            <ExampleShell
                id="custom"
                title="Value Getter"
                description={
                    <span>
                        Set <b>valueGetter</b> on a column definition to compute the cell value from the row data. The getter takes precedence over{" "}
                        <b>field</b>, so the column displays a derived value that is not stored directly on the row — here the salary column shows a 15% bonus
                        added on top of each minion's base <b>salaryGold</b>.
                    </span>
                }
                sources={[
                    { label: "ValueGetterExample.tsx", code: valueGetterExampleSource },
                    { label: "valueGetterExampleColDefs.ts", code: valueGetterExampleColDefsSource },
                ]}
            >
                <ValueGetterExample />
            </ExampleShell>
        </>
    );
}
