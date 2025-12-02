/**
 * Design System Configuration
 * 
 * This file centralizes all design tokens for easy theming and customization.
 * To change the entire app's look, modify values here instead of individual components.
 */

export const designSystem = {
    // TYPOGRAPHY
    // Change these font families to update fonts across the entire app
    fonts: {
        display: "var(--font-geist-sans)", // For headings (h1, h2, h3, etc.)
        body: "var(--font-geist-sans)",    // For body text and paragraphs
        mono: "var(--font-geist-mono)",    // For code and monospace text
    },

    fontWeights: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
    },

    // COLORS
    // Brand colors - change these to rebrand the entire app
    colors: {
        primary: {
            50: "#F5F3FF",
            100: "#EDE9FE",
            200: "#DDD6FE",
            300: "#C4B5FD",
            400: "#A78BFA",
            500: "#8B5CF6",  // Main brand color
            600: "#7C3AED",
            700: "#6D28D9",
            800: "#5B21B6",
            900: "#4C1D95",
        },
        // Module-specific colors
        modules: {
            clientPortal: "#0066CC",
            internalCockpit: "#8B5CF6",
            salesCockpit: "#10B981",
            supplierPortal: "#F59E0B",
            resellerHub: "#EF4444",
            dataAnalytics: "#14B8A6",
        },
    },

    // SPACING
    spacing: {
        xs: "0.5rem",    // 8px
        sm: "0.75rem",   // 12px
        md: "1rem",      // 16px
        lg: "1.5rem",    // 24px
        xl: "2rem",      // 32px
        "2xl": "3rem",   // 48px
        "3xl": "4rem",   // 64px
    },

    // BORDER RADIUS
    radius: {
        none: "0",
        sm: "0.375rem",   // 6px
        md: "0.5rem",     // 8px
        lg: "0.75rem",    // 12px
        xl: "1rem",       // 16px
        "2xl": "1.5rem",  // 24px
        full: "9999px",
    },

    // SHADOWS
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    },

    // TRANSITIONS
    transitions: {
        fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
        base: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
        slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    },

    // BREAKPOINTS
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
};

// HELPER FUNCTIONS
// Use these to apply design tokens consistently

/**
 * Get a font family from the design system
 * @param {'display' | 'body' | 'mono'} type - Font type
 * @returns {string} CSS font-family value
 */
export const getFont = (type = 'body') => designSystem.fonts[type];

/**
 * Get a color from the design system
 * @param {string} path - Dot notation path to color (e.g., 'primary.500')
 * @returns {string} Color value
 */
export const getColor = (path) => {
    const keys = path.split('.');
    let value = designSystem.colors;
    for (const key of keys) {
        value = value[key];
    }
    return value;
};

/**
 * Get spacing value
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'} size
 * @returns {string} Spacing value
 */
export const getSpacing = (size) => designSystem.spacing[size];

/**
 * Get border radius value
 * @param {'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'} size
 * @returns {string} Border radius value
 */
export const getRadius = (size) => designSystem.radius[size];

export default designSystem;
