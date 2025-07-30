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

      /* Perfect Color System - Inspired by First Image */
      colors: {
        /* Primary Brand Colors - Forest Green Palette */
        primary: {
          50: "hsl(160, 52%, 96%)",
          100: "hsl(160, 52%, 92%)",
          200: "hsl(160, 52%, 84%)",
          300: "hsl(160, 52%, 72%)",
          400: "hsl(160, 52%, 56%)",
          500: "hsl(160, 52%, 44%)", // Main brand color
          600: "hsl(160, 52%, 36%)",
          700: "hsl(160, 52%, 28%)",
          800: "hsl(160, 52%, 20%)",
          900: "hsl(160, 52%, 12%)",
          950: "hsl(160, 52%, 6%)",
        },

        /* Forest Green Specific Colors */
        forest: {
          primary: "#235347",
          dark: "#163832", 
          sage: "#8EB69B",
          mint: "#DAF1DE",
          light: "#8EB69B",
          medium: "#235347",
          "medium-dark": "#163832",
        },

        /* Secondary Colors - Teal Accent */
        secondary: {
          50: "hsl(180, 52%, 96%)",
          100: "hsl(180, 52%, 92%)",
          200: "hsl(180, 52%, 84%)",
          300: "hsl(180, 52%, 72%)",
          400: "hsl(180, 52%, 56%)",
          500: "hsl(180, 52%, 44%)",
          600: "hsl(180, 52%, 36%)",
          700: "hsl(180, 52%, 28%)",
          800: "hsl(180, 52%, 20%)",
          900: "hsl(180, 52%, 12%)",
          950: "hsl(180, 52%, 6%)",
        },

        /* Neutral Colors - Perfect for Text and Backgrounds */
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
          950: "hsl(0, 0%, 4%)",
        },

        /* Success Colors */
        success: {
          50: "hsl(142, 76%, 97%)",
          100: "hsl(141, 84%, 93%)",
          200: "hsl(141, 79%, 85%)",
          300: "hsl(142, 77%, 73%)",
          400: "hsl(142, 69%, 58%)",
          500: "hsl(142, 71%, 45%)",
          600: "hsl(142, 76%, 36%)",
          700: "hsl(142, 72%, 29%)",
          800: "hsl(143, 64%, 24%)",
          900: "hsl(144, 61%, 20%)",
          950: "hsl(145, 80%, 10%)",
        },

        /* Warning Colors */
        warning: {
          50: "hsl(48, 96%, 97%)",
          100: "hsl(48, 100%, 93%)",
          200: "hsl(48, 96%, 85%)",
          300: "hsl(48, 94%, 73%)",
          400: "hsl(48, 92%, 58%)",
          500: "hsl(48, 96%, 45%)",
          600: "hsl(48, 96%, 36%)",
          700: "hsl(48, 94%, 29%)",
          800: "hsl(48, 90%, 24%)",
          900: "hsl(48, 88%, 20%)",
          950: "hsl(48, 100%, 10%)",
        },

        /* Error Colors */
        error: {
          50: "hsl(0, 85%, 97%)",
          100: "hsl(0, 93%, 94%)",
          200: "hsl(0, 96%, 89%)",
          300: "hsl(0, 94%, 82%)",
          400: "hsl(0, 91%, 71%)",
          500: "hsl(0, 84%, 60%)",
          600: "hsl(0, 72%, 51%)",
          700: "hsl(0, 74%, 42%)",
          800: "hsl(0, 70%, 35%)",
          900: "hsl(0, 63%, 31%)",
          950: "hsl(0, 85%, 15%)",
        },

        /* Semantic UI Colors */
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
        ring: "hsl(160, 52%, 44%)",
      },

      /* Perfect Typography Scale - Mathematical Progression */
      fontFamily: {
        sans: ["GeistSans", "system-ui", "sans-serif"],
        mono: ["GeistMono", "monospace"],
        display: ["GeistSans", "system-ui", "sans-serif"],
      },

      fontSize: {
        /* Mathematical Typography Scale (Golden Ratio Progression) */
        xs: ["0.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }], /* 12px */
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "-0.005em" }], /* 14px */
        base: ["1rem", { lineHeight: "1.6", letterSpacing: "0em" }], /* 16px */
        lg: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.005em" }], /* 18px */
        xl: ["1.25rem", { lineHeight: "1.4", letterSpacing: "0.01em" }], /* 20px */
        "2xl": ["1.5rem", { lineHeight: "1.3", letterSpacing: "0.015em" }], /* 24px */
        "3xl": ["1.875rem", { lineHeight: "1.2", letterSpacing: "0.02em" }], /* 30px */
        "4xl": ["2.25rem", { lineHeight: "1.1", letterSpacing: "0.025em" }], /* 36px */
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "0.03em" }], /* 48px */
        "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "0.035em" }], /* 60px */
        "7xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "0.04em" }], /* 72px */
        "8xl": ["6rem", { lineHeight: "1.1", letterSpacing: "0.045em" }], /* 96px */
        "9xl": ["8rem", { lineHeight: "1.1", letterSpacing: "0.05em" }], /* 128px */
      },

      /* Perfect Spacing Scale (8px Grid with Golden Ratio) */
      spacing: {
        /* 8px Grid System with Golden Ratio Progression */
        "0": "0",
        "1": "0.25rem", /* 4px */
        "2": "0.5rem", /* 8px */
        "3": "0.75rem", /* 12px */
        "4": "1rem", /* 16px */
        "5": "1.25rem", /* 20px */
        "6": "1.5rem", /* 24px */
        "7": "1.75rem", /* 28px */
        "8": "2rem", /* 32px */
        "9": "2.25rem", /* 36px */
        "10": "2.5rem", /* 40px */
        "11": "2.75rem", /* 44px */
        "12": "3rem", /* 48px */
        "14": "3.5rem", /* 56px */
        "16": "4rem", /* 64px */
        "20": "5rem", /* 80px */
        "24": "6rem", /* 96px */
        "28": "7rem", /* 112px */
        "32": "8rem", /* 128px */
        "36": "9rem", /* 144px */
        "40": "10rem", /* 160px */
        "44": "11rem", /* 176px */
        "48": "12rem", /* 192px */
        "52": "13rem", /* 208px */
        "56": "14rem", /* 224px */
        "60": "15rem", /* 240px */
        "64": "16rem", /* 256px */
        "72": "18rem", /* 288px */
        "80": "20rem", /* 320px */
        "96": "24rem", /* 384px */
        "128": "32rem", /* 512px */
        "160": "40rem", /* 640px */
        "192": "48rem", /* 768px */
        "224": "56rem", /* 896px */
        "256": "64rem", /* 1024px */
        "288": "72rem", /* 1152px */
        "320": "80rem", /* 1280px */
        "384": "96rem", /* 1536px */
        "448": "112rem", /* 1792px */
        "512": "128rem", /* 2048px */
      },

      /* Perfect Border Radius */
      borderRadius: {
        none: "0",
        xs: "0.125rem", /* 2px */
        sm: "0.25rem", /* 4px */
        md: "0.375rem", /* 6px */
        lg: "0.5rem", /* 8px */
        xl: "0.75rem", /* 12px */
        "2xl": "1rem", /* 16px */
        "3xl": "1.5rem", /* 24px */
        "4xl": "2rem", /* 32px */
        "5xl": "2.5rem", /* 40px */
        "6xl": "3rem", /* 48px */
        full: "9999px",
      },

      /* Perfect Shadow System */
      boxShadow: {
        /* Subtle shadows for depth */
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 50px 80px -20px rgba(0, 0, 0, 0.35)",
        
        /* Colored shadows for brand consistency */
        "primary-sm": "0 1px 3px 0 rgba(34, 197, 94, 0.1), 0 1px 2px -1px rgba(34, 197, 94, 0.1)",
        "primary-md": "0 4px 6px -1px rgba(34, 197, 94, 0.1), 0 2px 4px -2px rgba(34, 197, 94, 0.1)",
        "primary-lg": "0 10px 15px -3px rgba(34, 197, 94, 0.1), 0 4px 6px -4px rgba(34, 197, 94, 0.1)",
        "primary-xl": "0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 8px 10px -6px rgba(34, 197, 94, 0.1)",
        
        /* Glass morphism effects */
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        
        /* Glow effects */
        glow: "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-lg": "0 0 40px rgba(34, 197, 94, 0.4)",
        "glow-xl": "0 0 60px rgba(34, 197, 94, 0.5)",
        
        /* Inner shadows */
        "inner-sm": "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "inner-md": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "inner-lg": "inset 0 4px 6px 0 rgba(0, 0, 0, 0.1)",
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
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "scale-in-up": "scaleInUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
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
          "0%, 100%": { textShadow: "0 0 5px rgba(34, 197, 94, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.6)" },
        },
        borderPulse: {
          "0%, 100%": { borderColor: "rgba(34, 197, 94, 0.3)" },
          "50%": { borderColor: "rgba(34, 197, 94, 0.8)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleInUp: {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      /* Perfect Background Images */
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.05) 1px, transparent 0)",
        "grid-pattern": "linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(circle, rgba(34, 197, 94, 0.1) 1px, transparent 1px)",
        "gradient-primary": "linear-gradient(135deg, hsl(160, 52%, 44%) 0%, hsl(180, 52%, 44%) 100%)",
        "gradient-secondary": "linear-gradient(135deg, hsl(160, 52%, 96%) 0%, hsl(180, 52%, 96%) 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
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

      /* Perfect Responsive Breakpoints */
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
        "square": "1 / 1",
        "portrait": "3 / 4",
        "landscape": "16 / 9",
        "hero": "21 / 9",
        "ultrawide": "32 / 9",
        "golden": "1.618 / 1",
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
