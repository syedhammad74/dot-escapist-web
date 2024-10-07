/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

// Custom plugin to add CSS variables for colors
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 10s ease-in-out infinite",
        float: "floatUp 10s ease-in-out infinite",
        twinkle: "twinkle 5s infinite",
        move: "move 5s ease-in-out infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(-100vh)", opacity: 0 },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        move: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, 20px)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "stars-pattern":
          "url('https://images.unsplash.com/photo-1601038630684-7ce5f007efc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        jadu: "250px",
        xsm: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "blue-custom": "#3490dc",
        "pink-custom": "#e3342f",
        "purple-custom": "#6b5b95",
        "orange-custom": "#ff9000",
      },
    },
  },
  plugins: [addVariablesForColors],
};
