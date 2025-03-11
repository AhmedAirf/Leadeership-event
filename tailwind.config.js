/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#273053",
        primary: "#0dcaf0",
        secondary: "#0d6efd",
        P: "#717275",
      },
      fontFamily: {
        main: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        normal: 400, // Removed the extra `0` here
      },
    },
  },
  plugins: [],
});
