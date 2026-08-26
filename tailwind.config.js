/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        walnut: {
          50: "#f8f5f2",
          100: "#efe6db",
          200: "#dcc7ab",
          300: "#c7a57c",
          400: "#b08757",
          500: "#8f6a41",
          600: "#6f5233",
          700: "#553f28",
          800: "#3e2e1e",
          900: "#2a1f15",
        },
        sage: {
          50: "#f4f6f3",
          100: "#e4e9e0",
          200: "#c7d2c0",
          300: "#a3b498",
          400: "#7e9670",
          500: "#617851",
          600: "#4b5e3f",
          700: "#3a4a31",
          800: "#293423",
          900: "#1a2216",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

