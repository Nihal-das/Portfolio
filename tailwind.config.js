/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { light: "#6366F1", dark: "#8B5CF6" },
        background: { light: "#F9FAFB", dark: "#0B1120" },
        text: { light: "#0F172A", dark: "#F9FAFB" },
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