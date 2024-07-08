/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        kaddu: {
          100: "#FCDDEC",
          200: "#EDEDED",
          300: "#FBC6C6",
          400: "#FF9898",
          500:"#FF5656",
          600:"#FF6666",
          700:"#A964E3",
          800:"#EDEDED"
        },
      },
    },
  },
  plugins: [],
});
