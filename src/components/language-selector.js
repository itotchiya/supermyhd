"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";

const languages = {
    en: { label: "English", flag: "🇺🇸" },
    fr: { label: "Français", flag: "🇫🇷" },
};

export function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 px-2">
                    <span className="text-lg leading-none">{languages[language].flag}</span>
                    <span className="hidden md:inline-block font-medium text-sm">
                        {languages[language].label}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup onValueChange={setLanguage} value={language}>
                    <DropdownMenuRadioItem value="en">
                        <span className="flex items-center gap-2">
                            <span className="text-lg leading-none">🇺🇸</span>
                            <span>English</span>
                        </span>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="fr">
                        <span className="flex items-center gap-2">
                            <span className="text-lg leading-none">🇫🇷</span>
                            <span>Français</span>
                        </span>
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
