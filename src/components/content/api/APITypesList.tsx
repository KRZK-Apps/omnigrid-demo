"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface TypeDetails {
    name: string;
    source: string;
    description: string;
}

interface Props {
    types: TypeDetails[];
}


export function APITypesList({types}: Props) {
      const { theme } = useTheme();

    return (
        <section className="mt-12">
            <h3 className="mb-3 text-[22px] font-normal tracking-[-.045em]">Types and Interfaces</h3>
            <div className="grid gap-4 font-sans text-[13px]">
                {types.map((type) => (
                    <div key={type.name} className="overflow-hidden">
                        <code className="font-mono text-mint">{type.name}</code>
                        <p className="mb-2 mt-1 text-ink dark:text-ink-dark">{type.description}</p>
                        <SyntaxHighlighter language="typescript" style={theme === "dark" ? vscDarkPlus : vs}>
                            {type.source}
                        </SyntaxHighlighter>
                    </div>
                ))}
            </div>
        </section>
    )
}