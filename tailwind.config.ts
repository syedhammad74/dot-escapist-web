import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom Screens (Breakpoints)
      screens: {
        w: "200px", // Smartwatches and very small devices
        xs: "320px", // Older small phones
        sm: "360px", // Small smartphones (Most Android phones)
        md: "375px", // Medium smartphones (iPhone SE, iPhone 6/7/8)
        lg: "414px", // Larger smartphones (iPhone Pro Max)
        tsm: "600px", // Small tablets and phablets
        tmd: "768px", // Standard tablets (iPad Mini, older iPads)
        tlg: "834px", // Larger tablets (iPad Air, iPad Pro)
        lsm: "1024px", // Small laptops or Chromebooks
        lmd: "1280px", // Older laptops
        lnm: "1366px", // Standard laptops
        llg: "1440px", // High-res laptops
        dsm: "1600px", // Smaller desktops
        dmd: "1920px", // Full HD desktops
        dlg: "2560px", // Quad HD desktops
        uw: "3440px", // Ultrawide monitors
        uwl: "3840px", // High-end ultrawide
        "4k": "3840px", // 4K monitors
        "5k": "5120px", // 5K monitors
        "8k": "7680px", // 8K TVs or monitors
      },

      // Custom Font Sizes
      fontSize: {
        xs: "0.84rem",
        sm: "0.97rem",
        base: "1.1rem",
        lg: "1.23rem",
        xl: "1.41rem",
        "2xl": "1.67rem",
        "3xl": "2.02rem",
        "4xl": "2.46rem",
        "5xl": "2.99rem",
        "6xl": "3.52rem",
        "7xl": "4.14rem",
        "8xl": "4.75rem",
        "9xl": "5.37rem",
      },

      // Custom Colors
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#235347",
          50: "#f0f9f6",
          100: "#daf1de",
          200: "#b8e3c4",
          300: "#8eb69b",
          400: "#5a9b7a",
          500: "#235347",
          600: "#163832",
          700: "#0b2b26",
          800: "#051f20",
          900: "#021a1c",
          950: "#000f0f",
        },
        secondary: {
          DEFAULT: "#8EB69B",
          50: "#f0f9f6",
          100: "#daf1de",
          200: "#b8e3c4",
          300: "#8eb69b",
          400: "#5a9b7a",
          500: "#235347",
          600: "#163832",
          700: "#0b2b26",
          800: "#051f20",
          900: "#021a1c",
        },
        accent: {
          DEFAULT: "#8EB69B",
          foreground: "#235347",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#64748b",
          foreground: "#94a3b8",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Forest Green Color Palette (Custom CSS Variables)
        "primary-green": "#235347",
        "medium-green": "#163832",
        "light-green": "#8EB69B",
        "very-light-green": "#DAF1DE",
        "dark-green": "#051F20",
        "medium-dark": "#0B2B26",
        // Luxury Real Estate Theme Colors
        forest: {
          50: "#f0f9f6",
          100: "#daf1de",
          200: "#b8e3c4",
          300: "#8eb69b",
          400: "#5a9b7a",
          500: "#235347",
          600: "#163832",
          700: "#0b2b26",
          800: "#051f20",
          900: "#021a1c",
        },
        sage: {
          50: "#f8faf8",
          100: "#eef5ee",
          200: "#dce8dc",
          300: "#c1d5c1",
          400: "#9bb99b",
          500: "#8eb69b",
          600: "#6b9a6b",
          700: "#547a54",
          800: "#456145",
          900: "#3a513a",
        },
        luxury: {
          gold: "#d4af37",
          silver: "#c0c0c0",
          bronze: "#cd7f32",
          cream: "#f5f5dc",
          ivory: "#fffff0",
        },
      },

      // Custom Border Radius
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        components: "1rem",
        buttons: "0.75rem",
        large: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },

      // Custom Shadows
      boxShadow: {
        minimal: "0 2px 8px rgba(0, 0, 0, 0.04)",
        "minimal-hover": "0 4px 16px rgba(0, 0, 0, 0.08)",
        primary: "0 4px 12px hsl(var(--primary) / 0.3)",
        "primary-hover": "0 8px 24px hsl(var(--primary) / 0.4)",
        neumorph: "0 4px 24px 0 rgba(8, 32, 24, 0.12)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        luxury: "0 20px 40px rgba(35, 83, 71, 0.15)",
        elegant: "0 10px 30px rgba(35, 83, 71, 0.1)",
      },

      // Custom Animations
      animation: {
        "parallax-slow": "parallax-slow 20s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        wave: "wave 3s ease-in-out infinite",
        breathing: "breathing 4s ease-in-out infinite",
        "bounce-slow": "bounce 3s infinite",
      },

      // Custom Keyframes
      keyframes: {
        "parallax-slow": {
          "0%": { transform: "translateY(0px) scale(1.1)" },
          "100%": { transform: "translateY(-20px) scale(1.1)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-15px) translateX(5px)" },
          "100%": { transform: "translateY(0px) translateX(0px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "0.9" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        wave: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(5px) translateY(-5px)" },
          "50%": { transform: "translateX(10px) translateY(0)" },
          "75%": { transform: "translateX(5px) translateY(5px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
      },

      // Custom Transitions
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      // Custom Background Images
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
        "about-pattern": "url('/images/about-bg.jpg')",
        "services-pattern": "url('/images/services-bg.jpg')",
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        // Parallax utilities
        ".parallax-bg": {
          position: "relative",
          overflow: "hidden",
        },
        ".parallax-bg::before": {
          content: '""',
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "140%",
          height: "140%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.05",
          zIndex: "-1",
          willChange: "transform",
        },
        ".parallax-animate::before": {
          animation: "parallax-slow 20s ease-in-out infinite alternate",
        },

        // Glass morphism utilities
        ".glass-card": {
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
        },
        ".glass-nav": {
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        },

        // Enhanced card utilities
        ".enhanced-card": {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
        ".enhanced-card:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        },

        // Button utilities
        ".btn-enhanced": {
          position: "relative",
          overflow: "hidden",
        },
        ".btn-enhanced::after": {
          content: '""',
          position: "absolute",
          inset: "0",
          background: "rgba(255, 255, 255, 0.2)",
          opacity: "0",
          transition: "opacity 0.3s ease",
        },
        ".btn-enhanced:hover::after": {
          opacity: "1",
        },

        // Transition utilities
        ".transition-smooth": {
          transition: "all 0.2s ease",
        },
        ".transition-smooth-slow": {
          transition: "all 0.3s ease",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
