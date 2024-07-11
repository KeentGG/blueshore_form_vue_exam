/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-blue": {
          200: "#E1EAF4",
          300: "#BFD1E9",
          500: "#0A87C9",
        },
        "accent-yellow": {
          50: "#FEF9F3",
          200: "#FEF3E1",
          300: "#FFE6BE",
          500: "#FFC100",
        },
      },
    },
  },
  plugins: [],
};
