/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE",
        dark: "#121212",
        // primary: "#E275AA",
        primary: "#8cbf65",
        primary1: "#81e979",
        off: {
          dark: "#2b2b2b",
          white: "#e6e6e6",
        },
      },
    },
  },
  plugins: [],
};
