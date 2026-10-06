"use client";

import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
    code: string;
}

export function CodeLine({code}: Props) {
    const {theme} = useTheme();
    
    return (
        <SyntaxHighlighter language="typescript" style={theme === "dark" ? vscDarkPlus : vs}>
            {code}
        </SyntaxHighlighter>
    )
}