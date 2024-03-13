/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "#E55555",
        Orange: "#F59F50",
        Yellow: "#EFEEDE",
        Green: "#9EB97D",
        Gray: "#AEAEAE",
      },
    },
  },
  plugins: [require("daisyui")],
};
