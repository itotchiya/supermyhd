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


    </div>
  );
}
