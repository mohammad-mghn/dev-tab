import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161513",
        secondary: "#1C1C22",
        lighter: "#F0F1F4",
        light: "#B8B8B8",
        dark: "#B8B8B830",
        lightSecondary: "#86878B",
        lightgray: "#86878B",
      },
    },
  },

  plugins: [],
};
export default config;
