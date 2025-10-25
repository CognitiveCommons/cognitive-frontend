import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "dark:hidden",
    "dark:block",
    "dark:bg-gray-900",
    "dark:border-gray-800",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Northern Palette - Canadian-inspired colors
        northern: {
          // Base darks - Canadian winter sky
          dark: "#0B0F19",
          slate: "#1A1F2E",
          "deep-forest": "#0F1419",
          // Elevated surfaces
          surface: "#1E2433",
          "surface-hover": "#252B3D",
        },
        aurora: {
          // Northern Lights accents
          green: "#00C896",
          "green-muted": "#00A67D",
          blue: "#0EA5E9",
          "blue-muted": "#0284C7",
          purple: "#A855F7",
        },
        canadian: {
          // Natural landscape colors
          pine: "#059669",
          "pine-dark": "#047857",
          maple: "#F59E0B",
          "maple-dark": "#D97706",
          snow: "#F8FAFC",
          "snow-muted": "#E2E8F0",
          red: "#DC2626",
          "red-muted": "#B91C1C",
        },
        // Legacy accent colors (for gradual migration)
        accent: {
          purple: "#A855F7",
          blue: "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      spacing: {
        // Canadian Shield spacing scale
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
      },
      fontSize: {
        // Fluid typography scale
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-aurora': '0 0 20px rgba(0, 200, 150, 0.3)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.3)',
        'elevation-1': '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        'elevation-2': '0 4px 6px -1px rgb(0 0 0 / 0.3)',
        'elevation-3': '0 10px 15px -3px rgb(0 0 0 / 0.3)',
        'elevation-4': '0 20px 25px -5px rgb(0 0 0 / 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
