import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Perfect Color System */
      colors: {
        /* Forest Green Palette (Primary) */
        forest: {
          50: "hsl(160, 40%, 95%)",
          100: "hsl(160, 40%, 90%)",
          200: "hsl(160, 40%, 80%)",
          300: "hsl(160, 40%, 70%)",
          400: "hsl(160, 40%, 60%)",
          500: "hsl(160, 40%, 50%)",
          600: "hsl(160, 40%, 40%)",
          700: "hsl(160, 40%, 30%)",
          800: "hsl(160, 40%, 20%)",
          900: "hsl(160, 40%, 10%)",
        },
        /* Teal Palette (Secondary) */
        teal: {
          50: "hsl(180, 40%, 95%)",
          100: "hsl(180, 40%, 90%)",
          200: "hsl(180, 40%, 80%)",
          300: "hsl(180, 40%, 70%)",
          400: "hsl(180, 40%, 60%)",
          500: "hsl(180, 40%, 50%)",
          600: "hsl(180, 40%, 40%)",
          700: "hsl(180, 40%, 30%)",
          800: "hsl(180, 40%, 20%)",
          900: "hsl(180, 40%, 10%)",
        },
        /* Neutral Palette */
        neutral: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 96%)",
          200: "hsl(0, 0%, 90%)",
          300: "hsl(0, 0%, 83%)",
          400: "hsl(0, 0%, 64%)",
          500: "hsl(0, 0%, 45%)",
          600: "hsl(0, 0%, 32%)",
          700: "hsl(0, 0%, 25%)",
          800: "hsl(0, 0%, 15%)",
          900: "hsl(0, 0%, 9%)",
        },
        /* Semantic Colors */
        primary: {
          50: "hsl(160, 40%, 95%)",
          100: "hsl(160, 40%, 90%)",
          200: "hsl(160, 40%, 80%)",
          300: "hsl(160, 40%, 70%)",
          400: "hsl(160, 40%, 60%)",
          500: "hsl(160, 40%, 50%)",
          600: "hsl(160, 40%, 40%)",
          700: "hsl(160, 40%, 30%)",
          800: "hsl(160, 40%, 20%)",
          900: "hsl(160, 40%, 10%)",
        },
        secondary: {
          50: "hsl(180, 40%, 95%)",
          100: "hsl(180, 40%, 90%)",
          200: "hsl(180, 40%, 80%)",
          300: "hsl(180, 40%, 70%)",
          400: "hsl(180, 40%, 60%)",
          500: "hsl(180, 40%, 50%)",
          600: "hsl(180, 40%, 40%)",
          700: "hsl(180, 40%, 30%)",
          800: "hsl(180, 40%, 20%)",
          900: "hsl(180, 40%, 10%)",
        },
        /* UI Colors */
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 9%)",
        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(0, 0%, 9%)",
        popover: "hsl(0, 0%, 100%)",
        "popover-foreground": "hsl(0, 0%, 9%)",
        muted: "hsl(0, 0%, 96%)",
        "muted-foreground": "hsl(0, 0%, 45%)",
        accent: "hsl(0, 0%, 96%)",
        "accent-foreground": "hsl(0, 0%, 9%)",
        destructive: "hsl(0, 84%, 60%)",
        "destructive-foreground": "hsl(0, 0%, 98%)",
        border: "hsl(0, 0%, 90%)",
        input: "hsl(0, 0%, 90%)",
        ring: "hsl(160, 40%, 50%)",
      },

      /* Perfect Typography */
      fontFamily: {
        sans: ["GeistSans", "system-ui", "sans-serif"],
        mono: ["GeistMono", "monospace"],
      },

      fontSize: {
        xs: ["var(--font-size-xs)", { lineHeight: "var(--line-height-tight)" }],
        sm: [
          "var(--font-size-sm)",
          { lineHeight: "var(--line-height-normal)" },
        ],
        base: [
          "var(--font-size-base)",
          { lineHeight: "var(--line-height-normal)" },
        ],
        lg: [
          "var(--font-size-lg)",
          { lineHeight: "var(--line-height-normal)" },
        ],
        xl: ["var(--font-size-xl)", { lineHeight: "var(--line-height-tight)" }],
        "2xl": [
          "var(--font-size-2xl)",
          { lineHeight: "var(--line-height-tight)" },
        ],
        "3xl": [
          "var(--font-size-3xl)",
          { lineHeight: "var(--line-height-tight)" },
        ],
        "4xl": [
          "var(--font-size-4xl)",
          { lineHeight: "var(--line-height-tight)" },
        ],
        "5xl": [
          "var(--font-size-5xl)",
          { lineHeight: "var(--line-height-tight)" },
        ],
        "6xl": [
          "var(--font-size-6xl)",
          { lineHeight: "var(--line-height-tight)" },
        ],
      },

      /* Perfect Spacing */
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },

      /* Perfect Border Radius */
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },

      /* Perfect Shadows */
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        glow: "0 0 20px rgba(142, 182, 155, 0.3)",
        "glow-lg": "0 0 40px rgba(142, 182, 155, 0.4)",
      },

      /* Perfect Transitions */
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },

      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      /* Perfect Animations */
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        breathing: "breathing 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },

      /* Perfect Keyframes */
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(-20px) translateX(0px)" },
          "75%": { transform: "translateY(-10px) translateX(-5px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      /* Perfect Background Images */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "radial-gradient(circle at 1px 1px, rgba(35, 83, 71, 0.05) 1px, transparent 0)",
      },

      /* Perfect Container */
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--space-md)",
          sm: "var(--space-lg)",
          lg: "var(--space-xl)",
          xl: "var(--space-2xl)",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },

      /* Perfect Screens */
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
