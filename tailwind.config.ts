/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        peru: {
          DEFAULT: "#D87D4A",
          light: "#FBAF85",
        },
        black: {
          DEFAULT: "#000000",
          900: "#101010",
          500: "#00000080",
        },
        white: {
          DEFAULT: "#FFFFFF",
          900: "#FAFAFA",
          800: "#F1F1F1",
          500: "#FFFFFF80",
        },
      },
      fontFamily: {
        manrope: "Manrope, sans-serif",
      },
    },
  },
  plugins: [],
};
