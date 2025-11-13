/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6366F1",
          dark: "#8B5CF6",
        },
        background: {
          light: "#F9FAFB",
          dark: "#0B1120",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
      },
    },
  },
};
