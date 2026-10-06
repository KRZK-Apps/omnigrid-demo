"use client";

import { type ReactNode, useState } from "react";


import { CodeBlock } from "@/src/components/ui/code/CodeBlock";

export interface ExampleSource {
    label: string;
    code: string;
}

interface ExampleShellProps {
    id?: string;
    title: string;
    description: ReactNode;
    sources: ExampleSource[];
    children: ReactNode;
    className?: string;
}

function getLanguage(label: string): string {
    const extension = label.split(".").pop()?.toLowerCase();
    if (extension === "css" || extension === "scss") return extension;
    if (extension === "ts") return "typescript";
    return "tsx";
}

export function ExampleShell({ id, title, description, sources, children, className }: ExampleShellProps) {
    sources = sources.map((s: ExampleSource) => ({ ...s, code: s.code.replace('"use client";', "").trim() }));

    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [activeSource, setActiveSource] = useState(0);
    const source = sources[activeSource] ?? sources[0];
    const language: string = getLanguage(source.label);

    return (
        <section id={id} className="scroll-mt-8 p-5 pb-10">
            <h2 className="text-[clamp(30px,4vw,52px)] font-normal leading-none tracking-[-.045em]">{title}</h2>
            <p className="my-5.5 max-w-170 font-sans text-sm leading-[1.6]">{description}</p>
            <div className="border border-slate bg-paper  dark:bg-paper-dark">
                <div className="flex gap-1 border-b border-slate px-3" role="tablist" aria-label={`${title} views`}>
                    <button
                        className={`cursor-pointer border-b-2 bg-transparent px-3 pb-3 pt-3.5 font-sans text-xs ${activeTab === "preview" ? "border-mint text-mint" : "border-transparent text-ink dark:text-ink-dark"}`}
                        onClick={() => setActiveTab("preview")}
                        role="tab"
                        aria-selected={activeTab === "preview"}
                    >
                        Preview
                    </button>
                    <button
                        className={`cursor-pointer border-b-2 bg-transparent px-3 pb-3 pt-3.5 font-sans text-xs ${activeTab === "code" ? "border-mint text-mint" : "border-transparent text-ink dark:text-ink-dark"}`}
                        onClick={() => setActiveTab("code")}
                        role="tab"
                        aria-selected={activeTab === "code"}
                    >
                        Code
                    </button>
                </div>
                {activeTab === "preview" ? (
                    <div >{children}</div>
                ) : (
                    <div className="relative  bg-paper dark:bg-paper-dark">
                        <div className="flex gap-1 overflow-x-auto border-b border-white/15 px-3" role="tablist" aria-label="Example source files">
                            {sources.map((item, index) => (
                                <button
                                    className={`cursor-pointer shrink-0 border-b-2 bg-transparent px-3 pb-3 pt-3.5 font-sans text-xs ${activeSource === index ? "border-mint  text-ink dark:text-ink-dark" : "border-transparent text-ink dark:text-ink-dark"}`}
                                    key={item.label}
                                    onClick={() => {
                                        setActiveSource(index);
                                    }}
                                    role="tab"
                                    aria-selected={activeSource === index}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <CodeBlock code={source.code} language={language} />
                    </div>
                )}
            </div>
        </section>
    );
}
