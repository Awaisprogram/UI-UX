import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "#252B42",
        Background: "#FAFAFA",
        Light:"#737373",
        Color:"#23A6F0",
        para:"#737373",
        dark:"#23856D"
      },
    },
  },
  plugins: [],
} satisfies Config;
