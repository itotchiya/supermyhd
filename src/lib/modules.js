/**
 * Module definitions for SuperMyHD
 * Contains all app modules with their metadata, icons, and routing
 */

export const modules = [
    {
        id: "client-portal",
        name: "Client Portal",
        description: "Premium dashboard for clients with ordering, tracking, and support",
        icon: "Users",
        color: "blue",
        gradient: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        href: "/client",
        features: [
            "Dashboard with KPIs",
            "Order tracking",
            "File management",
            "AI assistant",
            "Payment integration",
        ],
    },
    {
        id: "internal-cockpit",
        name: "Internal Cockpit",
        description: "Powerful admin hub for team collaboration and project management",
        icon: "LayoutDashboard",
        color: "purple",
        gradient: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        href: "/admin",
        features: [
            "Client management",
            "Project tracking",
            "Team collaboration",
            "Document base",
            "Automation",
        ],
    },
    {
        id: "sales-cockpit",
        name: "Sales Cockpit",
        description: "Complete sales pipeline with AI-powered insights and automation",
        icon: "TrendingUp",
        color: "green",
        gradient: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
        href: "/sales",
        features: [
            "Sales pipeline",
            "Lead scoring",
            "Quote generator",
            "AI assistant",
            "Follow-up automation",
        ],
    },
    {
        id: "supplier-portal",
        name: "Supplier Portal",
        description: "Streamlined supplier collaboration and order management",
        icon: "Package",
        color: "orange",
        gradient: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
        href: "/supplier",
        features: [
            "Request management",
            "Offer submission",
            "Order tracking",
            "Performance metrics",
            "Document upload",
        ],
    },
    {
        id: "reseller-hub",
        name: "Reseller Hub",
        description: "Regional tools for resellers and distributors",
        icon: "Store",
        color: "red",
        gradient: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        iconColor: "text-red-600",
        href: "/reseller",
        features: [
            "White label ordering",
            "Commission tracking",
            "Marketing tools",
            "Regional support",
            "Custom catalog",
        ],
    },
    {
        id: "data-analytics",
        name: "Data Analytics",
        description: "Comprehensive analytics and AI-powered business insights",
        icon: "BarChart3",
        color: "teal",
        gradient: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        iconColor: "text-teal-600",
        href: "/data",
        features: [
            "Global dashboard",
            "Custom reports",
            "AI predictions",
            "Trend analysis",
            "Forecasting",
        ],
    },
];

/**
 * Get module by ID
 */
export function getModuleById(id) {
    return modules.find((module) => module.id === id);
}

/**
 * Get modules by role
 */
export function getModulesByRole(role) {
    const roleModules = {
        client: ["client-portal", "data-analytics"],
        admin: ["internal-cockpit", "data-analytics"],
        sales: ["sales-cockpit", "client-portal", "data-analytics"],
        supplier: ["supplier-portal"],
        reseller: ["reseller-hub", "data-analytics"],
    };

    return modules.filter((module) => roleModules[role]?.includes(module.id));
}
