"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PricingCalculator from "@/components/PricingCalculator";
import AppCard from "@/components/AppCard";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/lib/modules";
import { Zap, Shield, Users, BarChart } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Apps Section */}
      <section id="apps" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t("apps.badge")}
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              {t("apps.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("apps.subtitle")}
            </p>
          </div>

          {/* App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <AppCard key={module.id} module={module} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold">12M+</div>
              <div className="text-sm text-muted-foreground">{t("stats.activeUsers")}</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">{t("stats.uptime")}</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">{t("stats.secure")}</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-3">
                <BarChart className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">{t("stats.support")}</div>
            </div>
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
                <li><Link href="#apps" className="hover:text-foreground transition-colors">{t("footer.apps")}</Link></li>
                <li><Link href="/solutions" className="hover:text-foreground transition-colors">{t("footer.solutions")}</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">{t("footer.pricing")}</Link></li>
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
