/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.7)",
        secondary: "#00f6ff",
        dimWhite: " rgb(0, 0, 0).",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        boxColor: "#293f57",
        boxColor2: "#768292"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
};
