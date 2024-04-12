/** @type {import('tailwindcss').Config} */
export default {
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
          200: "#D7FFE7",
          300: "#FBC6C6",
          400: "#DABABA",
        },
      },
    },
  },
  plugins: [],
};
