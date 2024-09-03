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
      backgroundImage: {
        "foundify-gradient":
          "linear-gradient(to right, #060413, #1d0479, #160457, #10042f, #14043f)",
      },
      colors: {
        kaddu: {
          100: "#FCDDEC",
          200: "#EDEDED",
          300: "#FBC6C6",
          400: "#FF9898",
          500: "#FF5656",
          600: "#FF6666",
          700: "#A964E3",
          123: "#EDEDED",
          800: "#F3F3F3",
          900: "#A9A9A9",
          1000: "#FF8989",
          1100: "#FFC2B8",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
});
