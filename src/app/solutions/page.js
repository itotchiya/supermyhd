"use client";

import Navigation from "@/components/Navigation";
import SolutionCard from "@/components/SolutionCard";
import { solutions, solutionCategories } from "@/lib/solutions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function SolutionsPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:underline transition-colors">
                            Home
                        </Link>
                        <Icons.ChevronRight size={16} />
                        <span className="font-medium">{t("solutions.title")}</span>
                    </div>

                    {/* Hero Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="animate-fade-in">
                            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
                                <Icons.Sparkles size={16} className="mr-2" />
                                {t("solutions.title")}
                            </Badge>

                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {t("solutions.title")}
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {t("solutions.subtitle")}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild>
                                    <Link href="#solutions">
                                        {t("solutions.viewAll")}
                                        <Icons.ArrowDown size={20} className="ml-2" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <a
                                        href="https://havetdigital.fr/wp-content/uploads/2024/02/Business-Solution_HD.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icons.Download size={20} className="mr-2" />
                                        Download Brochure
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Stats */}
                        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            {[
                                { icon: Icons.Target, stat: "8+", label: "Innovative Solutions" },
                                { icon: Icons.Users, stat: "100%", label: "Customized" },
                                { icon: Icons.TrendingUp, stat: "24/7", label: "Support" },
                                { icon: Icons.Award, stat: "10+", label: "Years Experience" },
                            ].map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                                            <IconComponent size={24} className="text-foreground" />
                                        </div>
                                        <div className="text-3xl font-bold mb-2">{item.stat}</div>
                                        <div className="text-sm text-muted-foreground">{item.label}</div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t("solutions.title")}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t("solutions.subtitle")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={solution.id} solution={solution} index={index} />
                        ))}
                    </div>
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
                                <li><Link href="/#pricing" className="hover:text-foreground transition-colors">{t("footer.pricing")}</Link></li>
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
