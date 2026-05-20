import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111217",
        muted: "#626977",
        line: "#e8ecf3",
        surface: "#f7f9fc",
        purple: "#5b35d5",
        royal: "#2457e6",
        cyan: "#23b8d4"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23, 32, 54, 0.10)",
        soft: "0 14px 35px rgba(22, 30, 50, 0.08)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
