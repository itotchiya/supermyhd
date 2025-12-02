"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AppCard({ module, index }) {
    const IconComponent = Icons[module.icon];

    return (
        <Link href={module.href} className="block group">
            <Card
                className="h-full hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
            >
                <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            {IconComponent && (
                                <IconComponent className="text-background w-6 h-6" />
                            )}
                        </div>
                    </div>
                    <CardTitle className="text-xl group-hover:underline">
                        {module.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                        {module.description}
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <ul className="space-y-2">
                        {module.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                <Icons.Check size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter>
                    <Button
                        variant="ghost"
                        className="w-full justify-between"
                    >
                        <span>Learn more</span>
                        <Icons.ArrowRight
                            size={16}
                            className="transform group-hover:translate-x-1 transition-transform"
                        />
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
