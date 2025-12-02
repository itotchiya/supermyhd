"use client";

import * as React from "react";
import { translations } from "@/lib/translations";

const LanguageContext = React.createContext({
    language: "en",
    setLanguage: () => { },
    t: () => { },
});

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = React.useState("en");
    const [mounted, setMounted] = React.useState(false);

    // Load language from localStorage on mount
    React.useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "en";
        setLanguageState(savedLanguage);
        setMounted(true);
    }, []);

    // Function to change language (no refresh - instant update)
    const setLanguage = React.useCallback((newLanguage) => {
        localStorage.setItem("language", newLanguage);
        setLanguageState(newLanguage);
    }, []);

    // Translation function
    const t = React.useCallback(
        (key) => {
            const keys = key.split(".");
            let value = translations[language];

            for (const k of keys) {
                if (value && typeof value === "object") {
                    value = value[k];
                } else {
                    return key; // Return key if translation not found
                }
            }

            return value || key;
        },
        [language]
    );

    // Prevent flash of wrong language
    if (!mounted) {
        return null;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
