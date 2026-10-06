import { APIMethodsList } from "@/src/components/api/APIMethodsList";
import { APIOptionsList } from "@/src/components/api/APIOptionsList";
import { APITypesList } from "@/src/components/api/APITypesList";
import { CodeLine } from "@/src/components/ui/code/CodeLine";
import { PAGINATION_API } from "@/src/generated/pagination-api";

const CONSTRUCTOR_CODE = `new PaginationPlugin<T>(options?: PaginationPluginOptions<T>)`;

export default function PaginationPluginPage() {

    return (
        <div>
            <p className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[.12em] text-mint">
                API / Plugins / Base / Pagination
            </p>
            <h2 className="max-w-185 text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">
                PaginationPlugin
            </h2>
            <p className="my-5 max-w-170 font-sans text-sm leading-[1.6]">
                The <code className="font-mono text-[13px]">PaginationPlugin</code> from{" "}
                <code className="font-mono text-[13px]">@omnigrid/pagination-plugin</code> splits rows into pages and
                renders navigation controls in top / bottom slots. In <b>client</b> mode the plugin slices data locally
                via a data processor; in <b>server</b> mode it delegates fetching to the host and only manages UI
                state.
            </p>

            <p>
                <a
                    href="/demo/react/plugins/base/pagination"
                    target="_blank"
                    className="font-sans text-[13px] font-bold text-mint hover:underline">
                    Live demo
                </a>
                <span className="mx-2">|</span>
                <a
                    href="https://www.npmjs.com/package/@omnigrid/pagination-plugin"
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
                description={<p>Properties accepted by <b className="font-mono text-[13px]">PaginationPluginOptions&lt;T&gt;</b>.</p>}    
                options={PAGINATION_API.options}
                callbacks={PAGINATION_API.callbacks}
            />
            <APIMethodsList methods={PAGINATION_API.methods} />
            <APITypesList types={PAGINATION_API.types} />
        </div>
    );
}