import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#868EBB",
        accent: "#EEE8A9",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif", // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
} satisfies Config;
