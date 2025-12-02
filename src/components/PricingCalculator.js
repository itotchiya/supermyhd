"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, TrendingDown, CircleCheck } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

// Popular business apps with their pricing
const competitorApps = [
    { id: "asana", name: "Asana", category: "Project", pricePerUser: 20, logo: "📋" },
    { id: "quickbooks", name: "QuickBooks", category: "Accounting", pricePerUser: 76, logo: "📊" },
    { id: "shopify", name: "Shopify", category: "eCommerce", pricePerUser: 79, logo: "🛍️" },
    { id: "salesforce", name: "Salesforce", category: "CRM", pricePerUser: 165, logo: "☁️" },
    { id: "slack", name: "Slack", category: "Discuss", pricePerUser: 14.10, logo: "💬" },
    { id: "notion", name: "Notion", category: "Knowledge", pricePerUser: 14, logo: "📝" },
    { id: "bamboohr", name: "BambooHR", category: "HR", pricePerUser: 8, logo: "👥" },
    { id: "figma", name: "Figma", category: "Design", pricePerUser: 15, logo: "🎨" },
    { id: "inventory", name: "Inventory", category: "Inventory", pricePerUser: 45, logo: "📦" },
    { id: "wordpress", name: "WordPress", category: "Website", pricePerUser: 25, logo: "🌐" },
    { id: "docusign", name: "DocuSign", category: "Documents", pricePerUser: 38, logo: "📄" },
    { id: "square", name: "Square", category: "PoS", pricePerUser: 60, logo: "💳" },
    { id: "expensify", name: "Expensify", category: "Expenses", pricePerUser: 9, logo: "💰" },
    { id: "calendly", name: "Calendly", category: "Schedule", pricePerUser: 16, logo: "📅" },
    { id: "zendesk", name: "Zendesk", category: "Support", pricePerUser: 115, logo: "🎧" },
    { id: "hubspot", name: "HubSpot", category: "Marketing", pricePerUser: 90, logo: "📈" },
];

export default function PricingCalculator() {
    const [selectedApps, setSelectedApps] = React.useState([]);
    const [users, setUsers] = React.useState(20);
    const { t } = useLanguage();

    // Havet Digital pricing (all-in-one)
    const havetDigitalPricePerUser = 7.25;

    const handleAppToggle = (appId, checked) => {
        setSelectedApps((prev) =>
            checked
                ? [...prev, appId]
                : prev.filter((id) => id !== appId)
        );
    };

    const incrementUsers = () => setUsers((prev) => Math.min(prev + 1, 1000));
    const decrementUsers = () => setUsers((prev) => Math.max(prev - 1, 1));

    // Calculate totals
    const calculateCompetitorTotal = () => {
        return selectedApps.reduce((total, appId) => {
            const app = competitorApps.find((a) => a.id === appId);
            return total + (app ? app.pricePerUser * users : 0);
        }, 0);
    };

    const competitorTotal = calculateCompetitorTotal();
    const havetDigitalTotal = havetDigitalPricePerUser * users;
    const savings = competitorTotal - havetDigitalTotal;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2">
                        {t("pricingCalculator.badge")}
                    </Badge>
                    <h2 className="text-4xl font-bold mb-4">
                        {t("pricingCalculator.title")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t("pricingCalculator.subtitle")}
                    </p>
                </div>

                {/* Calculator Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: App Selection */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    {t("pricingCalculator.whichApps")}
                                    <Badge variant="secondary">{selectedApps.length} {t("pricingCalculator.selected")}</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {/* App Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                                    {competitorApps.map((app) => (
                                        <CheckboxPrimitive.Root
                                            key={app.id}
                                            checked={selectedApps.includes(app.id)}
                                            onCheckedChange={(checked) => handleAppToggle(app.id, checked)}
                                            className="relative ring-[1px] ring-border rounded-lg p-4 text-center transition-all cursor-pointer hover:ring-primary/50 data-[state=checked]:ring-2 data-[state=checked]:ring-primary data-[state=checked]:bg-primary/5"
                                        >
                                            <div className="text-4xl mb-2">{app.logo}</div>
                                            <div className="font-medium text-sm mb-1">{app.name}</div>
                                            <div className="text-xs text-muted-foreground">{app.category}</div>

                                            <CheckboxPrimitive.Indicator className="absolute top-2 right-2">
                                                <CircleCheck className="h-5 w-5 fill-primary text-primary-foreground" />
                                            </CheckboxPrimitive.Indicator>
                                        </CheckboxPrimitive.Root>
                                    ))}
                                </div>

                                {/* User Count Selector */}
                                <div className="flex items-center justify-center gap-4">
                                    <span className="text-lg font-medium">{t("pricingCalculator.howManyUsers")}</span>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={decrementUsers}
                                            disabled={users <= 1}
                                        >
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <div className="w-24 text-center">
                                            <input
                                                type="number"
                                                value={users}
                                                onChange={(e) => {
                                                    const val = parseInt(e.target.value) || 1;
                                                    setUsers(Math.max(1, Math.min(1000, val)));
                                                }}
                                                className="w-full text-center text-2xl font-bold bg-transparent border-b-2 border-primary focus:outline-none"
                                            />
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={incrementUsers}
                                            disabled={users >= 1000}
                                        >
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Receipt/Summary */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-20">
                            <CardHeader>
                                <CardTitle>{t("pricingCalculator.appsToReplace")}</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    {t("pricingCalculator.forUsersMonth").replace("{users}", users)}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Selected Apps List */}
                                <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {selectedApps.length === 0 ? (
                                        <p className="text-sm text-muted-foreground text-center py-8">
                                            {t("pricingCalculator.selectApps")}
                                        </p>
                                    ) : (
                                        selectedApps.map((appId) => {
                                            const app = competitorApps.find((a) => a.id === appId);
                                            return (
                                                <div key={appId} className="flex justify-between text-sm">
                                                    <span>{app.name}</span>
                                                    <span className="font-medium">
                                                        ${(app.pricePerUser * users).toFixed(2)}
                                                    </span>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>

                                {selectedApps.length > 0 && (
                                    <>
                                        <Separator />

                                        {/* Competitor Total */}
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>{t("pricingCalculator.total")}</span>
                                            <span className="text-destructive">
                                                ${(competitorTotal * 12).toFixed(2)} {t("pricingCalculator.year")}
                                            </span>
                                        </div>

                                        <Separator className="my-4" />

                                        {/* Havet Digital Solution */}
                                        <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold">{t("pricingCalculator.allHavetApps")}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">{t("pricingCalculator.forUsers").replace("{users}", users)}</p>
                                            <div className="flex justify-between font-bold text-lg text-primary">
                                                <span>{t("pricingCalculator.total")}</span>
                                                <span>${(havetDigitalTotal * 12).toFixed(2)} {t("pricingCalculator.year")}</span>
                                            </div>
                                        </div>

                                        <Separator className="my-4" />

                                        {/* Savings */}
                                        <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 space-y-2">
                                            <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                                                <TrendingDown className="h-5 w-5" />
                                                <span className="font-semibold">{t("pricingCalculator.yourSavings")}</span>
                                            </div>
                                            <div className="text-3xl font-bold text-green-700 dark:text-green-400">
                                                ${((competitorTotal - havetDigitalTotal) * 12).toFixed(2)} {t("pricingCalculator.year")}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {competitorTotal > 0 && (
                                                    <>{t("pricingCalculator.savePercent").replace("{percent}", (((competitorTotal - havetDigitalTotal) / competitorTotal) * 100).toFixed(0))} {t("pricingCalculator.bySwitching")}</>
                                                )}
                                            </p>
                                        </div>

                                        <Button className="w-full mt-4" size="lg">
                                            {t("pricingCalculator.getStarted")} ${havetDigitalPricePerUser}{t("pricingCalculator.perUser")}
                                        </Button>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
