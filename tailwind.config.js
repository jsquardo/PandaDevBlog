/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      gil: ["var(--font-gilroy)"],
      helv: ["var(--font-helv)"],
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
    }),
    require("@tailwindcss/typography"),
  ],
  darkMode: "class",
};
