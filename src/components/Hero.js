"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Play, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center animate-fade-in">
                    {/* Badge */}
                    <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {t("hero.badge")}
                    </Badge>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {t("hero.title")}{" "}
                        <span className="underline decoration-4 underline-offset-8">
                            {t("hero.titleHighlight")}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                        {t("hero.subtitle")}
                    </p>

                    {/* Pricing Highlight */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <span className="text-lg text-muted-foreground">{t("hero.startingAt")}</span>
                        <span className="text-3xl font-bold">{t("hero.pricePerMonth")}</span>
                        <Badge variant="secondary" className="ml-2">{t("hero.allAppsIncluded")}</Badge>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl">
                            <Play className="w-5 h-5 mr-2" />
                            {t("hero.startNow")}
                        </Button>
                        <Button size="lg" variant="outline" className="text-base px-8 py-6">
                            {t("hero.meetAdvisor")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    {/* Email Signup */}
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder={t("hero.emailPlaceholder")}
                                className="flex-1"
                            />
                            <Button>
                                {t("hero.getStarted")}
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {t("hero.noCredit")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
