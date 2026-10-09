"use client";

import { ExampleShell } from "@/src/components/content/example/ExampleShell";
import { ValueFormatterExample } from "@/src/examples/cells/value-formatter/ValueFormatterExample";
import valueFormatterExampleSource from "@/src/examples/cells/value-formatter/ValueFormatterExample.tsx?raw";
import valueFormatterExampleColDefsSource from "@/src/examples/cells/value-formatter/valueFormatterExampleColDefs.ts?raw";

export default function ValueFormatterExamplePage() {
    return (
        <>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12en] text-mint">Cells / Value Formatter</p>
            <ExampleShell
                id="custom"
                title="Value Formatter"
                description={
                    <span>
                        Set <b>valueFormatter</b> on a column definition to transform the raw cell value before it is displayed. The formatter receives the{" "}
                        raw value resolved from <b>field</b> (or <b>valueGetter</b>) and returns a display string — here the salary column renders each{" "}
                        <b>salaryGold</b> number as a localized currency string with a leading "$".
                    </span>
                }
                sources={[
                    { label: "ValueFormatterExample.tsx", code: valueFormatterExampleSource },
                    { label: "valueFormatterExampleColDefs.ts", code: valueFormatterExampleColDefsSource },
                ]}
            >
                <ValueFormatterExample />
            </ExampleShell>
        </>
    );
}
