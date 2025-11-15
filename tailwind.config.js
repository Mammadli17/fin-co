/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#082444",
        primary: "#0b3b6f",
        accent: "#23b38a",
        gradientStart: "#082444",
        gradientEnd: "#23b38a"
      },
      borderRadius: {
        xl: "18px"
      }
    }
  },
  plugins: []
};
