import { APIMethodsList } from "@/src/components/content/api/APIMethodsList";
import { APIOptionsList } from "@/src/components/content/api/APIOptionsList";
import { APITypesList } from "@/src/components/content/api/APITypesList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";
import { SORTING_API } from "@/src/generated/sorting-api";

const CONSTRUCTOR_CODE = `new SortingPlugin<T>(options?: SortingPluginOptions<T>)`;

export default function SortingPluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                API / Plugins / Base / Sorting
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                SortingPlugin
            </h2>
            <p className="my-5 max-w-170 font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">SortingPlugin</code> from{" "}
                <code className="font-mono text-[13px]">@omnigrid/sorting-plugin</code> adds column-header sorting to the
                grid. Clicking a column header toggles <code className="font-mono text-[13px]">asc</code> /{" "}
                <code className="font-mono text-[13px]">desc</code> / unsorted. Hold <kbd>Ctrl</kbd> while clicking to
                sort by multiple columns. A custom comparator can be supplied to control how values are compared.
            </p>

            <p>
                <a
                    href="/demo/react/plugins/base/sorting"
                    target="_blank"
                    className="font-sans text-[13px] font-bold text-mint hover:underline">
                    Live demo
                </a>
                <span className="mx-2">|</span>
                <a
                    href="https://www.npmjs.com/package/@omnigrid/sorting-plugin"
                    target="_blank"
                    className="font-sans text-[13px] font-bold text-mint hover:underline">
                    NPM
                </a>
            </p>

            <section className="mt-12">
                <h3 className="mt-3 text-[22px] font-normal tracking-[-.045em]">Constructor</h3>
                <CodeLine code={CONSTRUCTOR_CODE} />
            </section>

            <APIOptionsList 
                description={<p>Properties accepted by <b className="font-mono text-[13px]">SortingPluginOptions&lt;T&gt;</b>.</p>}
                options={SORTING_API.options}
                callbacks={SORTING_API.callbacks} 
            />
            <APIMethodsList methods={SORTING_API.methods} />
            <APITypesList types={SORTING_API.types} />
        </div>
    );
}
