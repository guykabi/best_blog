import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //Dark mode by selector
  darkMode: "selector",

  //Defined global colors set
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          dark: "#272727",
          DEFAULT: "#ffffff",
          blur: "gray", 
          light: "#ffffff",
          exlight: "#f6f9ff",
       }
      },
    },
  },
  plugins: [],
} satisfies Config;