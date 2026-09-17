"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "mecnun_preferred_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Primary default language is Turkish ("tr")
  const [language, setLanguageState] = useState<Language>("tr");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "tr") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage access errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage access errors
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "tr" ? "en" : "tr";
    setLanguage(nextLang);
  };

  const t = translations[language] || translations.tr;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        isMounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
