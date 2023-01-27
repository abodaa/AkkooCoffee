/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      Green: "#006400",
      lightCoffee: "#9A4505",
      darkCoffee: "#1f2a2e",
      white: "#ffffff",
      green: "#006400",
      lightGray: "#dedede",
      darkGray: "#615B62",
    },
    extend: {},
  },
  plugins: [],
};
