"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { modules } from "@/lib/modules";
import { solutions } from "@/lib/solutions";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                    : "bg-background/90 backdrop-blur"
            )}
        >
            <div className="w-full px-6 lg:px-12 relative">
                <div className="flex items-center justify-between h-16">
                    {/* 1. Logo (Left) */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/havet-digital-logo.png"
                                alt="Havet Digital Logo"
                                width={180}
                                height={50}
                                priority
                                className="h-10 w-auto dark:brightness-0 dark:invert"
                            />
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation (Center - Absolutely Positioned) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {/* Apps Menu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Apps</NavigationMenuTrigger>
                                    <NavigationMenuContent className="px-0 py-1">
                                        <div className="grid grid-cols-3 gap-3 p-4 w-[900px] divide-x">
                                            <div className="col-span-2">
                                                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground mb-2.5">
                                                    All Apps
                                                </h6>
                                                <ul className="grid grid-cols-2 gap-3">
                                                    {modules.map((module) => (
                                                        <ListItem
                                                            key={module.id}
                                                            title={module.name}
                                                            href={module.href}
                                                            icon={module.icon}
                                                        >
                                                            {module.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pl-4">
                                                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground mb-2.5">
                                                    Featured
                                                </h6>
                                                <ul className="grid gap-3">
                                                    {modules.slice(0, 3).map((module) => (
                                                        <ListItem
                                                            key={module.id}
                                                            title={module.name}
                                                            href={module.href}
                                                            icon={module.icon}
                                                        >
                                                            {module.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Solutions Menu */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                                    <NavigationMenuContent className="p-4">
                                        <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground mb-2.5">
                                            HD Solutions
                                        </h6>
                                        <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {solutions.slice(0, 6).map((solution) => (
                                                <ListItem
                                                    key={solution.id}
                                                    title={solution.name}
                                                    href="/solutions"
                                                    icon={solution.icon}
                                                >
                                                    {solution.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Regular Links */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#community" className={navigationMenuTriggerStyle()}>
                                            Community
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="#pricing" className={navigationMenuTriggerStyle()}>
                                            Pricing
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* 3. Actions (Right) */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <ThemeToggle />
                            <Button size="sm">Get Started</Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <ThemeToggle />
                            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                    <div className="flex flex-col space-y-4 mt-6">
                                        <h3 className="font-semibold text-lg">Apps</h3>
                                        {modules.slice(0, 3).map((module) => (
                                            <Link
                                                key={module.id}
                                                href={module.href}
                                                className="block px-4 py-2 rounded-md hover:bg-accent"
                                                onClick={() => setIsMobileOpen(false)}
                                            >
                                                <div className="font-medium">{module.name}</div>
                                                <div className="text-sm text-muted-foreground">{module.description}</div>
                                            </Link>
                                        ))}

                                        <h3 className="font-semibold text-lg mt-4">Solutions</h3>
                                        <Link
                                            href="/solutions"
                                            className="block px-4 py-2 rounded-md hover:bg-accent"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            View All Solutions
                                        </Link>

                                        <Link
                                            href="#community"
                                            className="block px-4 py-2 rounded-md hover:bg-accent font-medium"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            Community
                                        </Link>

                                        <Link
                                            href="#pricing"
                                            className="block px-4 py-2 rounded-md hover:bg-accent font-medium"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            Pricing
                                        </Link>

                                        <Button className="w-full mt-4">Get Started</Button>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const ListItem = React.forwardRef(({ className, title, children, icon, ...props }, ref) => {
    const IconComponent = require("lucide-react")[icon];

    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
                        {IconComponent && <IconComponent className="h-5 w-5" />}
                        {title}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
