import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mbBlue: "#5482C3",
        darkBlue: "#061A48",
        mbOrange: "#EE5719",
        darkGary: "#606060",
      },
    },
  },
  plugins: [],
} satisfies Config;
