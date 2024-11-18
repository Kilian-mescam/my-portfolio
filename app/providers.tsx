"use client"

import { ThemeProvider } from "@/features/theme/ThemeProvider"
import { PropsWithChildren, useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner"

const queryClient = new QueryClient();
export type ProvidersProps = PropsWithChildren

export const Providers = (props: ProvidersProps) => {
    const [mounted, setMounted] = useState(false);

    // Ensure the component is mounted before applying the theme (avoids SSR mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render a fallback while the client is still mounting
        // This prevents SSR and CSR mismatch for theme classes
        return <div className="h-full">{props.children}</div>;
    }
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>
                <Toaster />
                {props.children}
            </QueryClientProvider>
        </ThemeProvider>
    )
}