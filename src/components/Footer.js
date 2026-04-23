"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
    const { t } = useLanguage();

    return (
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
    );
}
