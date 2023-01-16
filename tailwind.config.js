/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#161513",
      secondary: "#1C1C22",
      lighter: "#F0F1F4",
      light: "#B8B8B8",
      dark: "#B8B8B830",
      ...colors,
    },
  },
  plugins: [],
};
