"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, Mail, Settings, User } from "lucide-react";

export default function ShadcnDemo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <Navigation />

            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 mb-4"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Home
                        </Link>
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            shadcn/ui Components Demo
                        </h1>
                        <p className="text-xl text-gray-600">
                            Explore the beautiful, accessible components now available in your project
                        </p>
                    </div>

                    {/* Button Examples */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Buttons</CardTitle>
                            <CardDescription>
                                Multiple button variants for different use cases
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                <Button>Default Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon">
                                    <Sparkles className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card Examples */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card description goes here</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    This is a basic card component. You can put any content inside.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Action</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Badge className="w-fit mb-2">New Feature</Badge>
                                <CardTitle>With Badge</CardTitle>
                                <CardDescription>Cards can include badges</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-purple-600" />
                                        <span className="text-sm">Feature 1</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-purple-600" />
                                        <span className="text-sm">Feature 2</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-purple-200 bg-purple-50">
                            <CardHeader>
                                <CardTitle>Custom Styled</CardTitle>
                                <CardDescription>You can customize with Tailwind</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">
                                    All components work perfectly with Tailwind classes!
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Dialog Example */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Dialog (Modal)</CardTitle>
                            <CardDescription>
                                Accessible modal dialogs with keyboard navigation
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>Open Dialog</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you sure?</DialogTitle>
                                        <DialogDescription>
                                            This is an example dialog component. It's fully accessible
                                            and keyboard navigable.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4">
                                        <p className="text-sm text-gray-600">
                                            You can put any content here, including forms, images, or
                                            other components.
                                        </p>
                                    </div>
                                    <div className="flex gap-2 justify-end">
                                        <Button variant="outline">Cancel</Button>
                                        <Button>Confirm</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>

                    {/* Badges */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Badges</CardTitle>
                            <CardDescription>Labels and status indicators</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge className="bg-green-500">Custom Color</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Dropdown Menu */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Dropdown Menu</CardTitle>
                            <CardDescription>Context menus and action lists</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Open Menu
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Messages</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </Card>

                    {/* Code Example */}
                    <Card className="bg-gray-900 text-white">
                        <CardHeader>
                            <CardTitle>How to Use</CardTitle>
                            <CardDescription className="text-gray-400">
                                Import and use components in your files
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <pre className="text-sm overflow-x-auto">
                                <code>{`import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MyComponent() {
  return (
    <Card>
      <Button>Click me!</Button>
    </Card>
  );
}`}</code>
                            </pre>
                        </CardContent>
                        <CardFooter>
                            <Badge variant="outline" className="text-green-400 border-green-400">
                                ✓ Ready to use in your project!
                            </Badge>
                        </CardFooter>
                    </Card>

                    {/* Info Section */}
                    <div className="mt-12 p-6 bg-purple-100 rounded-lg border border-purple-200">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            What makes shadcn/ui special?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    ✓ You own the code
                                </h3>
                                <p className="text-gray-600">
                                    Components are copied into your project, not installed as a
                                    dependency.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    ✓ Fully customizable
                                </h3>
                                <p className="text-gray-600">
                                    Modify components to match your exact needs.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    ✓ Built on Radix UI
                                </h3>
                                <p className="text-gray-600">
                                    Accessible primitives under the hood.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    ✓ Works with Tailwind
                                </h3>
                                <p className="text-gray-600">
                                    Style everything with Tailwind classes.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button asChild>
                                <a
                                    href="https://ui.shadcn.com/docs/components"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Browse All Components →
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
