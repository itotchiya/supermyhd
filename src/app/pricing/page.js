"use client";

import Navigation from "@/components/Navigation";
import PricingCalculator from "@/components/PricingCalculator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function PricingPage() {
    const { t } = useLanguage();
    const [billingCycle, setBillingCycle] = React.useState("monthly"); // "monthly" or "yearly"

    const plans = [
        {
            id: "free",
            name: t("pricing.free.name"),
            price: t("pricing.free.price"),
            description: t("pricing.free.description"),
            features: [t("pricing.free.feature1")],
            cta: t("pricing.free.cta"),
            color: "from-cyan-500 to-blue-500",
            highlight: false,
        },
        {
            id: "standard",
            name: t("pricing.standard.name"),
            price: t("pricing.standard.price"),
            originalPrice: t("pricing.standard.originalPrice"),
            description: t("pricing.standard.description"),
            features: [t("pricing.standard.feature1")],
            cta: t("pricing.standard.cta"),
            trial: t("pricing.standard.trial"),
            color: "from-pink-500 to-rose-500",
            highlight: true,
        },
        {
            id: "custom",
            name: t("pricing.custom.name"),
            price: t("pricing.custom.price"),
            originalPrice: t("pricing.custom.originalPrice"),
            description: t("pricing.custom.description"),
            features: [
                t("pricing.custom.feature1"),
                t("pricing.custom.feature2"),
                t("pricing.custom.feature3"),
                t("pricing.custom.feature4"),
                t("pricing.custom.feature5"),
            ],
            cta: t("pricing.custom.cta"),
            trial: t("pricing.custom.trial"),
            color: "from-teal-500 to-emerald-500",
            highlight: false,
        },
    ];

    const faqs = [
        { question: t("faq.q1"), answer: t("faq.a1") },
        { question: t("faq.q2"), answer: t("faq.a2") },
        { question: t("faq.q3"), answer: t("faq.a3") },
        { question: t("faq.q4"), answer: t("faq.a4") },
        { question: t("faq.q5"), answer: t("faq.a5") },
        { question: t("faq.q6"), answer: t("faq.a6") },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section with Pricing */}
            <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 px-4 py-2">
                            {t("pricing.badge")}
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            {t("pricing.title")}
                            <span className="relative">
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            {t("pricing.subtitle")}
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center rounded-full bg-muted p-1">
                            <button
                                onClick={() => setBillingCycle("yearly")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "yearly"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                    }`}
                            >
                                {t("pricing.yearly")}
                            </button>
                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                    }`}
                            >
                                {t("pricing.monthly")}
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan) => (
                            <Card
                                key={plan.id}
                                className={`relative overflow-hidden ${plan.highlight ? "ring-2 ring-primary shadow-xl scale-105" : ""
                                    } transition-all hover:shadow-lg`}
                            >
                                {/* Top Color Bar */}
                                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                                <CardHeader className="text-center pb-4">
                                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-primary">
                                            ${plan.price}
                                        </span>
                                        {plan.price !== "0" && (
                                            <span className="text-sm text-muted-foreground ml-1">
                                                .{plan.price.includes(",") ? plan.price.split(",")[1] || "25" : "25"}
                                            </span>
                                        )}
                                    </div>
                                    {plan.price !== "0" && (
                                        <div className="flex items-center justify-center gap-2">
                                            {plan.originalPrice && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    US$ {plan.originalPrice}
                                                </span>
                                            )}
                                            <span className="text-xs text-muted-foreground">
                                                {t("pricing.perUserPerMonth")}
                                            </span>
                                        </div>
                                    )}
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {/* Description */}
                                    <p className="text-center font-semibold">{plan.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Buttons */}
                                    <div className="space-y-2 pt-4">
                                        <Button
                                            className={`w-full ${plan.highlight ? "bg-primary hover:bg-primary/90" : ""
                                                }`}
                                            size="lg"
                                            variant={plan.highlight ? "default" : "secondary"}
                                        >
                                            {plan.cta}
                                        </Button>
                                        {plan.trial && (
                                            <Button className="w-full" variant="ghost" size="lg">
                                                {plan.trial}
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Calculator Section */}
            <PricingCalculator />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">{t("faq.title")}</h2>
                        <p className="text-xl text-muted-foreground">{t("faq.subtitle")}</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-none rounded-lg px-4 bg-background shadow-sm"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <Image
                                src="/havet-digital-logo.png"
                                alt="Havet Digital Logo"
                                width={180}
                                height={50}
                                className="h-10 w-auto dark:brightness-0 dark:invert mb-4"
                            />
                            <p className="text-sm mb-4">
                                {t("footer.tagline")}
                            </p>
                            <div className="flex gap-3">
                                <Button variant="outline" size="sm" className="bg-background hover:bg-accent hover:text-accent-foreground">
                                    {t("footer.getStarted")}
                                </Button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">{t("footer.product")}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/#apps" className="hover:text-foreground transition-colors">{t("footer.apps")}</Link></li>
                                <li><Link href="/solutions" className="hover:text-foreground transition-colors">{t("footer.solutions")}</Link></li>
                                <li><Link href="/pricing" className="hover:text-foreground transition-colors">{t("footer.pricing")}</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">{t("footer.updates")}</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold mb-4 text-foreground">{t("footer.company")}</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#" className="hover:text-foreground transition-colors">{t("footer.about")}</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">{t("footer.contact")}</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">{t("footer.privacy")}</Link></li>
                                <li><Link href="#" className="hover:text-foreground transition-colors">{t("footer.terms")}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="bg-border my-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p>© 2025 Havet Digital. {t("footer.allRightsReserved")}</p>
                        <p className="mt-2 md:mt-0">{t("footer.trustedBy")}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
