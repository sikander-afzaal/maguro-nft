/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lapsus", ...defaultTheme.fontFamily.sans],
        mont: ["Mont"],
      },
      backgroundImage: {
        roadmap: "url('/roadmap.png')",
        primaryGr: "linear-gradient(180deg, #F06464 0%, #8C244A 100%)",
      },
      colors: {
        main: "#FCBF49",
        secondary: "#303030",
      },
      dropShadow: {
        activeSlide: "12px 12px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
