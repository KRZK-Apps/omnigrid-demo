import { APIMethodsList } from "@/src/components/content/api/APIMethodsList";
import { APIOptionsList } from "@/src/components/content/api/APIOptionsList";
import { APITypesList } from "@/src/components/content/api/APITypesList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";
import { RESIZE_API } from "@/src/generated/resize-api";

const CONSTRUCTOR_CODE = `new ColumnResizePlugin<T>(options?: ColumnResizePluginOptions<T>)`;

export default function ResizePluginPage() {
    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                API / Plugins / Base / Resize
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                ColumnResizePlugin
            </h2>
            <p className="my-5 max-w-170 font-sans text-sm leading-[1.6]">

            </p>
            <p>
                <a
                    href="/demo/react/plugins/base/resize"
                    target="_blank"
                    className="font-sans text-[13px] font-bold text-mint hover:underline">
                    Live demo
                </a>
                <span className="mx-2">|</span>
                <a
                    href="https://www.npmjs.com/package/@omnigrid/resize-plugin"
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
                description={<p>Properties accepted by <b className="font-mono text-[13px]">ColumnResizePluginOptions&lt;T&gt;</b>.</p>}
                options={RESIZE_API.options}
                callbacks={RESIZE_API.callbacks} 
            />
            <APIMethodsList methods={RESIZE_API.methods} />
            <APITypesList types={RESIZE_API.types} />
        </div>
    );
}
