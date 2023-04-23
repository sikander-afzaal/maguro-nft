/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lapsus", ...defaultTheme.fontFamily.sans],
        mont: ["Mont"],
      },
      backgroundImage: {
        roadmap: "url('/roadmap.png')",
        bg2: "url('/bg2.png')",
        primaryGr: "linear-gradient(180deg, #F06464 0%, #8C244A 100%)",
      },
      colors: {
        main: "#FCBF49",
        secondary: "#303030",
        aspidBlue: "rgba(0, 48, 73, 1)",
        success: "rgba(0, 207, 83, 1)",
        fail: "rgba(255, 0, 0, 1)",
        mainRed: "#E53935",
      },
      dropShadow: {
        activeSlide: "12px 12px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
