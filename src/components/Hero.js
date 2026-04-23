"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    Sparkles,
    ArrowRight,
    Play,
    ChevronRight,
    LayoutDashboard,
    Users,
    ShoppingCart,
    BarChart3,
    Mail,
    Settings,
    TrendingUp,
    TrendingDown,
    MoreHorizontal,
    CheckCircle2,
    Clock,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

/* ───────── Dashboard Mockup Component ───────── */
function DashboardMockup() {
    return (
        <div className="relative mx-auto max-w-5xl mt-16 perspective-1000">
            {/* Glow backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#667eea]/20 via-[#764ba2]/20 to-[#14B8A6]/20 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />

            {/* Browser frame */}
            <div className="relative rounded-xl border border-border/60 bg-card shadow-2xl overflow-hidden animate-fade-in">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                    <div className="flex gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-amber-400" />
                        <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="max-w-md mx-auto h-7 rounded-md bg-muted flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                            app.havetdigital.com/dashboard
                        </div>
                    </div>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="hidden sm:flex w-14 lg:w-16 flex-col items-center py-4 gap-3 border-r border-border/40 bg-muted/20">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        {[LayoutDashboard, Users, ShoppingCart, BarChart3, Mail, Settings].map(
                            (Icon, i) => (
                                <div
                                    key={i}
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                                        i === 0
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                </div>
                            )
                        )}
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-4 lg:p-6 space-y-4">
                        {/* Header row */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-semibold">Dashboard Overview</h3>
                                <p className="text-[10px] text-muted-foreground">Welcome back, Admin</p>
                            </div>
                            <Badge variant="outline" className="text-[10px] h-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                                Live
                            </Badge>
                        </div>

                        {/* Stat cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {[
                                { label: "Revenue", value: "$24,500", change: "+12%", up: true },
                                { label: "Orders", value: "1,284", change: "+8%", up: true },
                                { label: "Clients", value: "342", change: "-2%", up: false },
                                { label: "Tasks", value: "89", change: "+24%", up: true },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg border border-border/40 bg-muted/20 p-3 hover:bg-muted/40 transition-colors"
                                >
                                    <p className="text-[10px] text-muted-foreground mb-1">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <span className="text-sm font-bold">{stat.value}</span>
                                        <span
                                            className={`text-[10px] font-medium flex items-center ${
                                                stat.up ? "text-emerald-500" : "text-red-500"
                                            }`}
                                        >
                                            {stat.up ? (
                                                <TrendingUp className="w-3 h-3 mr-0.5" />
                                            ) : (
                                                <TrendingDown className="w-3 h-3 mr-0.5" />
                                            )}
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Chart + Activity split */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            {/* Mini bar chart */}
                            <div className="lg:col-span-2 rounded-lg border border-border/40 bg-muted/20 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xs font-medium">Revenue Trends</h4>
                                    <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                                </div>
                                <div className="flex items-end justify-between gap-2 h-24">
                                    {[35, 55, 42, 68, 48, 82, 64, 90, 72, 88, 95, 78].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                            <div
                                                className="w-full max-w-[14px] rounded-sm bg-gradient-to-t from-primary/60 to-primary/20 transition-all duration-700"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[9px] text-muted-foreground">
                                    <span>Jan</span>
                                    <span>Dec</span>
                                </div>
                            </div>

                            {/* Recent activity */}
                            <div className="rounded-lg border border-border/40 bg-muted/20 p-4">
                                <h4 className="text-xs font-medium mb-3">Recent Activity</h4>
                                <div className="space-y-3">
                                    {[
                                        { text: "New order #2481", time: "2m ago", done: true },
                                        { text: "Invoice sent to Acme", time: "15m ago", done: true },
                                        { text: "Task assigned to Sarah", time: "1h ago", done: false },
                                        { text: "Payment received", time: "3h ago", done: true },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            {item.done ? (
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                                            ) : (
                                                <Clock className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                                            )}
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-medium truncate">{item.text}</p>
                                                <p className="text-[9px] text-muted-foreground">{item.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute -right-4 top-12 hidden xl:block animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="rounded-lg border border-border/50 bg-card/90 backdrop-blur-sm shadow-lg p-3 w-40">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-emerald-500" />
                        </div>
                        <span className="text-[10px] font-medium">Growth</span>
                    </div>
                    <div className="text-lg font-bold">+142%</div>
                    <div className="text-[9px] text-muted-foreground">vs last quarter</div>
                </div>
            </div>

            <div className="absolute -left-6 bottom-16 hidden xl:block animate-float" style={{ animationDelay: "1.2s" }}>
                <div className="rounded-lg border border-border/50 bg-card/90 backdrop-blur-sm shadow-lg p-3 w-36">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-[10px] font-medium">New Users</span>
                    </div>
                    <div className="text-lg font-bold">+28</div>
                    <div className="text-[9px] text-muted-foreground">Just today</div>
                </div>
            </div>
        </div>
    );
}

/* ───────── Hero Section ───────── */
export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-16 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]" />

            {/* Background gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#667eea]/10 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#14B8A6]/10 to-transparent rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center animate-fade-in">
                    {/* Badge */}
                    <Badge
                        variant="outline"
                        className="mb-6 px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-primary" />
                        {t("hero.badge")}
                    </Badge>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        {t("hero.title")}{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10">{t("hero.titleHighlight")}</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#667eea]/40 to-[#764ba2]/40 -rotate-1 rounded-sm" />
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
                        <Badge variant="secondary" className="ml-2">
                            {t("hero.allAppsIncluded")}
                        </Badge>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <Button
                            size="lg"
                            className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            {t("hero.startNow")}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base px-8 py-6 transition-all hover:-translate-y-0.5"
                        >
                            {t("hero.meetAdvisor")}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    {/* Email Signup */}
                    <div className="max-w-md mx-auto mb-4">
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder={t("hero.emailPlaceholder")}
                                className="flex-1 bg-background/80 backdrop-blur-sm"
                            />
                            <Button className="shadow-md hover:shadow-lg transition-all">
                                {t("hero.getStarted")}
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{t("hero.noCredit")}</p>
                    </div>
                </div>

                {/* Dashboard Mockup */}
                <DashboardMockup />
            </div>
        </section>
    );
}
