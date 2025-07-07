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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#662481",
          light: "#8a3aa5",
          dark: "#4a1a5d",
        },
        secondary: {
          blue: "#029fe0",
          pink: "#e6067c",
        },
        flame: {
          orange: "#ff6b35",
          yellow: "#ffd93d",
          red: "#e63946",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        bebas: ["var(--font-bebas)"],
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        flame: "flame 2s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 0.5s ease-out",
        typewriter: "typewriter 2s steps(40) forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        flame: {
          "0%, 100%": {
            transform: "scaleY(1) translateY(0)",
          },
          "50%": {
            transform: "scaleY(1.2) translateY(-10px)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        typewriter: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;