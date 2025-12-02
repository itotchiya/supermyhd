"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { modules } from "@/lib/modules";

export default function MegaMenu({ isOpen }) {
    if (!isOpen) return null;

    return (
        <>
            {/* Overlay - Only dims content below navigation (starts at top-16) */}
            <div
                className="fixed top-16 left-0 right-0 bottom-0 z-30 animate-fade-in pointer-events-none"
                style={{ backgroundColor: 'rgba(18, 18, 18, 0.48)' }}
            ></div>

            {/* Mega Menu Content */}
            <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-40 animate-slide-down border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Section - CTA Card */}
                        <div className="lg:col-span-4">
                            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium mb-4">
                                        <Icons.Sparkles size={14} />
                                        <span>All-in-One Platform</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                                        Manage Your Entire Business in{" "}
                                        <span className="text-purple-400 italic">One Place</span>
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        From client management to sales automation, from supplier
                                        coordination to data analytics—SuperMyHD brings everything
                                        together seamlessly.
                                    </p>

                                    <Link
                                        href="#try"
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition-all hover:shadow-xl group"
                                    >
                                        <span>Get Started Free</span>
                                        <Icons.ArrowRight
                                            size={16}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Apps Grid */}
                        <div className="lg:col-span-8">
                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    Explore All Apps
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Choose from our complete suite of integrated business solutions
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {modules.map((module, index) => {
                                    const IconComponent = Icons[module.icon];

                                    return (
                                        <Link
                                            key={module.id}
                                            href={module.href}
                                            className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
                                        >
                                            {/* Icon */}
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 ${module.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                                            >
                                                {IconComponent && (
                                                    <IconComponent
                                                        className={`${module.iconColor} w-6 h-6`}
                                                    />
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <h5 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                                                    {module.name}
                                                </h5>
                                                <p className="text-xs text-gray-600 line-clamp-2">
                                                    {module.description}
                                                </p>
                                            </div>

                                            {/* Arrow Icon */}
                                            <Icons.ArrowRight
                                                size={16}
                                                className="flex-shrink-0 text-gray-400 group-hover:text-purple-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                                            />
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-600">
                                        Need help choosing the right solution?
                                    </p>
                                    <Link
                                        href="#contact"
                                        className="text-sm font-semibold text-purple-600 hover:text-purple-700 flex items-center space-x-1"
                                    >
                                        <span>Talk to an expert</span>
                                        <Icons.ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
