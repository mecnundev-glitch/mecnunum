"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Current language: ${language.toUpperCase()}. Click to switch to ${
        language === "tr" ? "English" : "Türkçe"
      }`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 dark:border-white/10 bg-zinc-950/60 dark:bg-zinc-900/60 px-2.5 py-1 text-xs font-mono backdrop-blur-md transition-all hover:border-studio-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan cursor-pointer select-none",
        className
      )}
    >
      <Globe className="h-3.5 w-3.5 text-studio-cyan/80" />
      <span className="flex items-center gap-1 font-bold">
        <span
          className={cn(
            "transition-colors",
            language === "tr"
              ? "text-studio-lime font-extrabold"
              : "text-muted-foreground/60 hover:text-foreground"
          )}
        >
          TR
        </span>
        <span className="text-white/20 text-[10px]">/</span>
        <span
          className={cn(
            "transition-colors",
            language === "en"
              ? "text-studio-cyan font-extrabold"
              : "text-muted-foreground/60 hover:text-foreground"
          )}
        >
          EN
        </span>
      </span>
    </button>
  );
}

export default LanguageToggle;
