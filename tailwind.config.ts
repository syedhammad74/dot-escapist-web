import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
     screens: {
        "w": "200px", // Smartwatches and very small devices
        "xs": "320px", // Older small phones
        "sm": "360px", // Small smartphones (Most Android phones)
        "md": "375px", // Medium smartphones (iPhone SE, iPhone 6/7/8)
        "lsg": "414px", // Larger smartphones (iPhone Pro Max)
        "tsm": "600px", // Small tablets and phablets
        "tmd": "768px", // Standard tablets (iPad Mini, older iPads)
        "lg": "834px", // Larger tablets (iPad Air, iPad Pro)
        "lsm": "1024px", // Small laptops or Chromebooks
        "lmd": "1280px", // Older laptops
        "lnm": "1366px", // Standard laptops
        "llg": "1440px", // High-res laptops
        "dsm": "1600px", // Smaller desktops
        "dmd": "1920px", // Full HD desktops
        "dlg": "2560px", // Quad HD desktops
        "uw": "3440px", // Ultrawide monitors
        "uwl": "3840px", // High-end ultrawide
        "4k": "3840px", // 4K monitors
        "5k": "5120px", // 5K monitors
        "8k": "7680px", // 8K TVs or monitors
      }
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Use "Poppins" or Roboto
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), "addVariablesForColors"],
} satisfies Config;

export default config;
