import { APIMethodsList } from "@/src/components/content/api/APIMethodsList";
import { APIOptionsList } from "@/src/components/content/api/APIOptionsList";
import { APITypesList } from "@/src/components/content/api/APITypesList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";
import { SELECTION_API } from "@/src/generated/selection-api";

const CONSTRUCTOR_CODE = `new SelectionPlugin<T>(options?: SelectionPluginOptions<T>)`;

export default function SelectionPluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                API / Plugins / Base / Selection
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                SelectionPlugin
            </h2>
            <p className="my-5 max-w-170 font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">SelectionPlugin</code> from <code className="font-mono text-[13px]">@omnigrid/selection-plugin</code> adds
                row-selection behavior to the grid. It supports single and multiple modes, optional checkbox columns,
                per-row selectability, and live change callbacks. Selection state is stored internally and can be
                queried via the plugin instance methods.
            </p>

            <p>
                <a
                    href="/demo/react/plugins/base/selection"
                    target="_blank"
                    className="font-sans text-[13px] font-bold text-mint hover:underline">
                    Live demo
                </a>
                <span className="mx-2">|</span>
                <a
                    href="https://www.npmjs.com/package/@omnigrid/selection-plugin"
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
                description={<p>Properties accepted by <b className="font-mono text-[13px]">SelectionPluginOptions&lt;T&gt;</b>.</p>}
                options={SELECTION_API.options}
                callbacks={SELECTION_API.callbacks} 
            />
            <APIMethodsList methods={SELECTION_API.methods} />
            <APITypesList types={SELECTION_API.types} />
        </div>
    );
}
