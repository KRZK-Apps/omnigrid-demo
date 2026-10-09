"use client";

import { APIOptionsList } from "@/src/components/content/api/APIOptionsList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";
import { COLUMN_GROUP_DEF_API } from "@/src/generated/columnGroupDef-api";
import { COLUMN_LEAF_DEF_API } from "@/src/generated/columnLeafDef-api";

export default function ColumnDefinitionsPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                Core reference / Column definitions
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                Column definitions
            </h2>
            <p className="my-5 max-w-170 font-sans text-sm leading-[1.6]">
                Columns are described declaratively as an array of <code className="font-mono text-[13px]">ColumnDef</code>{" "}
                objects passed to the grid via the <code className="font-mono text-[13px]">columns</code> option. Each
                definition controls identity, sizing, alignment, sorting, and rendering.
            </p>

            <a
                href="/demo/react/columns/definition"
                target="_blank"
                className="font-sans text-[13px] font-bold text-mint hover:underline">
                Usage
            </a>

            <section className="mt-12">
                <CodeLine code={"type ColumnDef<T> = ColumnLeafDef<T> | ColumnGroupDef<T>;"} />
            </section>

            <APIOptionsList
                heading="Properties"
                description={<p className="my-3 font-sans text-[13px] leading-[1.6]">
                    {COLUMN_LEAF_DEF_API.description} Properties available on <code className="font-mono text-[13px] font-bold">ColumnLeafDef&lt;T&gt;</code>.
                </p>}
                options={COLUMN_LEAF_DEF_API.properties}
            />
            <APIOptionsList
                heading="Properties"
                description={<p className="my-3 font-sans text-[13px] leading-[1.6]">
                    {COLUMN_GROUP_DEF_API.description} Properties available on <code className="font-mono text-[13px] font-bold">ColumnGroupDef&lt;T&gt;</code>.
                </p>}
                options={COLUMN_GROUP_DEF_API.properties}
            />
        </div>
    );
}
