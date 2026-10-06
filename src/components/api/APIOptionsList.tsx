import { ReactNode } from "react";

export interface OptionDetails {
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
}

interface Props {
    description: ReactNode;
    options: OptionDetails[];
    callbacks: OptionDetails[];
}

export function APIOptionsList({ description, options, callbacks }: Props) {
    return (
        <section className="mt-12">
            <h3 className="mb-3 text-[22px] font-normal tracking-[-.045em]">Options</h3>
            <div className="my-2 font-sans text-[13px] leading-[1.6]">
                {description}
            </div>
            {options.length > 0 && <div className="overflow-auto">
                <table className="w-full border-collapse font-sans text-[13px]">
                    <thead>
                        <tr>
                            <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                Property
                            </th>
                            <th className="border-b border-slate/40 py-2 text-left font-semibold text-ink dark:text-ink-dark">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {options.map((opt) => (
                            <tr key={opt.name} className="border-b border-slate/20">
                                <td className="py-3 font-mono">
                                    <p className="font-semibold text-mint">{opt.name}</p>
                                    <p className="font-mono">
                                        {opt.type}
                                        {opt.defaultValue && (
                                            <span className="ml-2 rounded-lg bg-slate/10 p-1 text-slate dark:bg-late/90">
                                                default: <span className="text-black dark:text-white">{opt.defaultValue}</span>
                                            </span>
                                        )}
                                    </p>
                                </td>
                                <td className="py-3 leading-[1.6] text-ink dark:text-ink-dark">{opt.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
            </div>}
            {callbacks.length > 0 && (
                <div className="mt-8">
                    <h4 className="mb-3 text-[15px] font-semibold text-ink dark:text-ink-dark">Callbacks</h4>
                    <div className="grid gap-4 font-sans text-[13px]">
                        {callbacks.map((callback) => (
                            <div key={callback.name}>
                                <code className="font-mono text-mint">{callback.name}</code>
                                <span className="text-slate">: {callback.type}</span>
                                {callback.defaultValue && (
                                    <span className="ml-2 rounded-lg bg-slate/10 p-1 text-slate dark:bg-late/90">
                                        default: <span className="text-black dark:text-white">{callback.defaultValue}</span>
                                    </span>
                                )}
                                <p className="mt-1 text-ink dark:text-ink-dark">{callback.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}