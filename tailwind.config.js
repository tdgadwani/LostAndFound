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
        "darkBg": "linear-gradient(to right, #C566FF 0%, #754DFF 64%)",
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
        flowing: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flowing: "flowing 30s linear infinite",
      },
    },
  },
  plugins: [],
});
