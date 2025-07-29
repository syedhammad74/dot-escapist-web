import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Mathematical Constants */
      goldenRatio: {
        small: 1.618,
        large: 2.618,
      },

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

      /* Perfect Typography Scale */
      fontFamily: {
        sans: ["GeistSans", "system-ui", "sans-serif"],
        mono: ["GeistMono", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "-0.005em" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "0em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.005em" }],
        xl: ["1.25rem", { lineHeight: "1.25", letterSpacing: "0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.25", letterSpacing: "0.015em" }],
        "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "0.02em" }],
        "4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "0.025em" }],
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "0.03em" }],
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "0.035em" }],
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "0.04em" }],
        "8xl": ["6rem", { lineHeight: "1.1", letterSpacing: "0.045em" }],
      },

      /* Perfect Spacing Scale (Golden Ratio Progression) - 10% Bigger */
      spacing: {
        "4": "0.275rem" /* 4.4px - 10% bigger */,
        "8": "0.55rem" /* 8.8px - 10% bigger */,
        "12": "0.825rem" /* 13.2px - 10% bigger */,
        "16": "1.1rem" /* 17.6px - 10% bigger */,
        "20": "1.375rem" /* 22px - 10% bigger */,
        "24": "1.65rem" /* 26.4px - 10% bigger */,
        "28": "1.925rem" /* 30.8px - 10% bigger */,
        "32": "2.2rem" /* 35.2px - 10% bigger */,
        "36": "2.475rem" /* 39.6px - 10% bigger */,
        "40": "2.75rem" /* 44px - 10% bigger */,
        "44": "3.025rem" /* 48.4px - 10% bigger */,
        "48": "3.3rem" /* 52.8px - 10% bigger */,
        "52": "3.575rem" /* 57.2px - 10% bigger */,
        "56": "3.85rem" /* 61.6px - 10% bigger */,
        "60": "4.125rem" /* 66px - 10% bigger */,
        "64": "4.4rem" /* 70.4px - 10% bigger */,
        "72": "4.95rem" /* 79.2px - 10% bigger */,
        "80": "5.5rem" /* 88px - 10% bigger */,
        "88": "6.05rem" /* 96.8px - 10% bigger */,
        "96": "6.6rem" /* 105.6px - 10% bigger */,
        "104": "7.15rem" /* 114.4px - 10% bigger */,
        "112": "7.7rem" /* 123.2px - 10% bigger */,
        "120": "8.25rem" /* 132px - 10% bigger */,
        "128": "8.8rem" /* 140.8px - 10% bigger */,
        "144": "9.9rem" /* 158.4px - 10% bigger */,
        "160": "11rem" /* 176px - 10% bigger */,
        "176": "12.1rem" /* 193.6px - 10% bigger */,
        "192": "13.2rem" /* 211.2px - 10% bigger */,
        "208": "14.3rem" /* 228.8px - 10% bigger */,
        "224": "15.4rem" /* 246.4px - 10% bigger */,
        "240": "16.5rem" /* 264px - 10% bigger */,
        "256": "17.6rem" /* 281.6px - 10% bigger */,
        "288": "19.8rem" /* 316.8px - 10% bigger */,
        "320": "22rem" /* 352px - 10% bigger */,
        "352": "24.2rem" /* 387.2px - 10% bigger */,
        "384": "26.4rem" /* 422.4px - 10% bigger */,
        "416": "28.6rem" /* 457.6px - 10% bigger */,
        "448": "30.8rem" /* 492.8px - 10% bigger */,
        "480": "33rem" /* 528px - 10% bigger */,
        "512": "35.2rem" /* 563.2px - 10% bigger */,
        "576": "39.6rem" /* 633.6px - 10% bigger */,
        "640": "44rem" /* 704px - 10% bigger */,
        "704": "48.4rem" /* 774.4px - 10% bigger */,
        "768": "52.8rem" /* 844.8px - 10% bigger */,
        "832": "57.2rem" /* 915.2px - 10% bigger */,
        "896": "61.6rem" /* 985.6px - 10% bigger */,
        "960": "66rem" /* 1056px - 10% bigger */,
        "1024": "70.4rem" /* 1126.4px - 10% bigger */,
        "1088": "74.8rem" /* 1196.8px - 10% bigger */,
        "1152": "79.2rem" /* 1267.2px - 10% bigger */,
        "1216": "83.6rem" /* 1337.6px - 10% bigger */,
        "1280": "88rem" /* 1408px - 10% bigger */,
        "1344": "92.4rem" /* 1478.4px - 10% bigger */,
        "1408": "96.8rem" /* 1548.8px - 10% bigger */,
        "1472": "101.2rem" /* 1619.2px - 10% bigger */,
        "1536": "105.6rem" /* 1689.6px - 10% bigger */,
        "1600": "110rem" /* 1760px - 10% bigger */,
        "1664": "114.4rem" /* 1830.4px - 10% bigger */,
        "1728": "118.8rem" /* 1900.8px - 10% bigger */,
        "1792": "123.2rem" /* 1971.2px - 10% bigger */,
        "1856": "127.6rem" /* 2041.6px - 10% bigger */,
        "1920": "132rem" /* 2112px - 10% bigger */,
      },

      /* Perfect Border Radius */
      borderRadius: {
        none: "0",
        xs: "0.125rem" /* 2px */,
        sm: "0.25rem" /* 4px */,
        md: "0.375rem" /* 6px */,
        lg: "0.5rem" /* 8px */,
        xl: "0.75rem" /* 12px */,
        "2xl": "1rem" /* 16px */,
        "3xl": "1.5rem" /* 24px */,
        "4xl": "2rem" /* 32px */,
        "5xl": "2.5rem" /* 40px */,
        "6xl": "3rem" /* 48px */,
        full: "9999px",
      },

      /* Perfect Shadows */
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 50px 80px -20px rgba(0, 0, 0, 0.35)",
        glow: "0 0 20px rgba(142, 182, 155, 0.3)",
        "glow-lg": "0 0 40px rgba(142, 182, 155, 0.4)",
        "glow-xl": "0 0 60px rgba(142, 182, 155, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },

      /* Perfect Transitions */
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
        "ultra-fast": "100ms",
        "ultra-slow": "500ms",
      },

      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      },

      /* Perfect Animations */
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        breathing: "breathing 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "rotate-in": "rotateIn 0.5s ease-out",
        "bounce-in": "bounceIn 0.6s ease-out",
        "zoom-in": "zoomIn 0.3s ease-out",
        "zoom-out": "zoomOut 0.3s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
        "text-glow": "textGlow 2s ease-in-out infinite",
        "border-pulse": "borderPulse 2s ease-in-out infinite",
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
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-10deg) scale(0.95)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textGlow: {
          "0%, 100%": { textShadow: "0 0 5px rgba(142, 182, 155, 0.5)" },
          "50%": {
            textShadow:
              "0 0 20px rgba(142, 182, 155, 0.8), 0 0 30px rgba(142, 182, 155, 0.6)",
          },
        },
        borderPulse: {
          "0%, 100%": { borderColor: "rgba(142, 182, 155, 0.3)" },
          "50%": { borderColor: "rgba(142, 182, 155, 0.8)" },
        },
      },

      /* Perfect Background Images */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "radial-gradient(circle at 1px 1px, rgba(35, 83, 71, 0.05) 1px, transparent 0)",
        "grid-pattern":
          "linear-gradient(rgba(35, 83, 71, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(35, 83, 71, 0.1) 1px, transparent 1px)",
        "dots-pattern":
          "radial-gradient(circle, rgba(35, 83, 71, 0.1) 1px, transparent 1px)",
      },

      /* Perfect Container */
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1920px",
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
        "4xl": "2560px",
      },

      /* Perfect Aspect Ratios */
      aspectRatio: {
        square: "1 / 1",
        portrait: "3 / 4",
        landscape: "16 / 9",
        hero: "21 / 9",
        ultrawide: "32 / 9",
        golden: "1.618 / 1",
        "golden-vertical": "1 / 1.618",
      },

      /* Perfect Z-Index Scale */
      zIndex: {
        hide: "-1",
        auto: "auto",
        base: "0",
        docked: "10",
        dropdown: "1000",
        sticky: "1100",
        banner: "1200",
        overlay: "1300",
        modal: "1400",
        popover: "1500",
        skipLink: "1600",
        toast: "1700",
        tooltip: "1800",
      },

      /* Perfect Backdrop Blur */
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
        "4xl": "64px",
      },

      /* Perfect Blur */
      blur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
        "4xl": "64px",
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
