"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/motion/lenis-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </NextThemesProvider>
  );
}
