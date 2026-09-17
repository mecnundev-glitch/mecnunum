"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/motion/lenis-provider";
import { LanguageProvider } from "@/lib/i18n/language-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </LanguageProvider>
    </NextThemesProvider>
  );
}
