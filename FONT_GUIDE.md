# How to Change Fonts in SuperMyHD

This app uses a centralized design system that makes changing fonts super easy!

## Current Fonts
- **Display/Headings**: Geist Sans
- **Body Text**: Geist Sans
- **Monospace/Code**: Geist Mono

## How to Change Fonts (3 Simple Steps)

### Step 1: Install Your Fonts
For Google Fonts:
```bash
# Example: Installing Roboto and Open Sans
npm install @next/font
```

Or use the `next/font/google` import (already available):
```javascript
import { Roboto, Open_Sans } from "next/font/google";
```

### Step 2: Update `src/app/layout.js`
Replace the font imports and variables:

```javascript
// OLD:
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// NEW (example with Roboto):
import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-geist-sans",  // Keep the same variable name!
  weight: ["300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",  // Keep the same variable name!
  weight: ["400", "700"],
});

// Then in the HTML:
<html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
```

### Step 3: That's It!
Because we use CSS variables (`--font-geist-sans` and `--font-geist-mono`), the entire app will automatically use your new fonts. No need to touch any other files!

## Optional: Update Design System
If you want to document your font choices, update `src/lib/designSystem.js`:

```javascript
export const designSystem = {
  fonts: {
    display: "var(--font-geist-sans)", // Your new font
    body: "var(--font-geist-sans)",    // Your new font
    mono: "var(--font-geist-mono)",    // Your new mono font
  },
  // ... rest stays the same
};
```

## Where Fonts Are Used
- **Headings (h1-h6)**: Uses `--font-geist-sans`
- **Body text**: Uses `--font-geist-sans`
- **Code blocks**: Uses `--font-geist-mono`
- **shadcn/ui components**: Automatically inherit from CSS variables

## PRO TIP
Keep the CSS variable names the same (`--font-geist-sans` and `--font-geist-mono`) even when using different fonts. This ensures you only need to change fonts in ONE place (layout.js) instead of hunting through the entire codebase!
