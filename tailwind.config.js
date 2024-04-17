import tailwindcss_animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        text: "#F9F9F9",
        red: "#D83B3B",
        yellow: "#E2C423",
        green: "#03CA0B",
        black: "#131313",
        bg: "#1b2021",
        gray: {
          50: "#F5F5F5", 100: "#808080",
        }
      }
    },
  }, plugins: [tailwindcss_animated],
}

