/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable manual dark/light switching via .dark
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366F1", // Indigo 500
          dark: "#8B5CF6",  // Purple 500
        },
        background: {
          light: "#F9FAFB", // Light gray
          dark: "#0B1120",  // Deep navy
        },
        text: {
          light: "#0F172A", // Slate 900
          dark: "#F9FAFB",  // White
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 10px rgba(139, 92, 246, 0.6)",
        "glow-indigo": "0 0 10px rgba(99, 102, 241, 0.6)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
