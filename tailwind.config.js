/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      },
      colors: {
        ink: "#0b1020",
        accent: "#78a9ff",
        mint: "#7ce7c4"
      },
      boxShadow: {
        glow: "0 0 80px rgba(120,169,255,.14)"
      }
    }
  },
  plugins: []
};
