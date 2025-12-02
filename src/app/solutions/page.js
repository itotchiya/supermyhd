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

export const metadata = {
    title: "HD Solutions - Havet Digital | SuperMyHD",
    description: "Découvrez nos solutions innovantes pour transformer votre entreprise : Automatisation, IA, Marketing Digital, et plus encore.",
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:underline transition-colors">
                            Accueil
                        </Link>
                        <Icons.ChevronRight size={16} />
                        <span className="font-medium">HD Solutions</span>
                    </div>

                    {/* Hero Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="animate-fade-in">
                            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
                                <Icons.Sparkles size={16} className="mr-2" />
                                Solutions Innovantes
                            </Badge>

                            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                HD Solutions
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Havet Digital fournit un soutien opérationnel essentiel à ses clients sur la voie de la réussite.
                                Qu'il s'agisse d'un projet à court terme ou d'un projet parallèle à long terme,
                                Havet Digital assure la réussite des projets de ses clients.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild>
                                    <Link href="#solutions">
                                        Découvrir nos solutions
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
                                        Télécharger notre plaquette
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Stats */}
                        <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            {[
                                { icon: Icons.Target, stat: "8+", label: "Solutions innovantes" },
                                { icon: Icons.Users, stat: "100%", label: "Sur mesure" },
                                { icon: Icons.Zap, stat: "24/7", label: "Support dédié" },
                                { icon: Icons.TrendingUp, stat: "+40%", label: "Croissance moyenne" },
                            ].map((item, index) => (
                                <Card key={index} className="p-6">
                                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{item.stat}</h3>
                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4">8 Solutions</Badge>
                        <h2 className="text-4xl font-bold mb-4">
                            Découvrez Nos Solutions Complètes
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Nous proposons des solutions dans diverses catégories pour répondre à tous vos besoins commerciaux
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <SolutionCard key={solution.id} solution={solution} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Pourquoi Choisir HDsolutions ?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Grâce à HDsolutions, vous profitez d'une approche sur mesure et d'une expertise confirmée
                                pour tous les aspects de votre entreprise. Nos propositions sont élaborées dans le but
                                de vous donner un avantage concurrentiel pérenne et de vous accompagner dans
                                l'accomplissement de vos objectifs de manière efficace et efficiente.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Icons.CheckCircle,
                                        title: "Approche Sur Mesure",
                                        description: "Solutions personnalisées adaptées à vos besoins spécifiques",
                                    },
                                    {
                                        icon: Icons.Award,
                                        title: "Expertise Confirmée",
                                        description: "Équipe d'experts dans tous les domaines du digital",
                                    },
                                    {
                                        icon: Icons.Rocket,
                                        title: "Avantage Concurrentiel",
                                        description: "Technologies de pointe pour vous démarquer",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Categories */}
                        <div className="space-y-4">
                            {solutionCategories.map((category, index) => {
                                const CategoryIcon = Icons[category.icon];
                                return (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-all">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                                <CategoryIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-2">{category.name}</h3>
                                                <p className="text-sm text-muted-foreground">{category.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-background mb-6">
                        Innover. Optimiser. Réussir.
                    </h2>
                    <p className="text-xl text-background/80 mb-8">
                        Adoptez HDsolutions et découvrez comment nos outils et services peuvent transformer votre entreprise.
                        Contactez-nous dès aujourd'hui pour en savoir plus et commencer votre voyage vers l'excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="#contact">
                                Contactez-nous
                                <Icons.ArrowRight size={20} className="ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90 border-background" asChild>
                            <Link href="/">
                                Retour à l'accueil
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <Image
                        src="/havet-digital-logo.png"
                        alt="Havet Digital Logo"
                        width={180}
                        height={50}
                        className="h-10 w-auto dark:brightness-0 dark:invert mx-auto mb-4"
                    />
                    <p className="mb-6">
                        The all-in-one platform for Havet Digital
                    </p>
                    <Separator className="bg-border my-6" />
                    <p className="text-sm">
                        © 2025 Havet Digital. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
