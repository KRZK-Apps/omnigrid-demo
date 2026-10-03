import type { ReactNode } from "react";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import "@/src/style/app.css";
import "@omnigrid/mint-theme";

export const metadata: Metadata = {
    title: "OmniGrid | Framework-agnostic data grid",
    description: "A fast, extensible data grid for any framework.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body>
                <ThemeProvider attribute="class" defaultTheme="light">
                    {children}
                    <>
                        <Script
                            src="https://www.googletagmanager.com/gtag/js?id=G-F0VGDBX4XS"
                            strategy="afterInteractive"
                        />
                        <Script
                            id="gtag-init"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'G-F0VGDBX4XS');
                                `,
                            }}
                        />
                    </>
                </ThemeProvider>
            </body>
        </html>
    );
}
