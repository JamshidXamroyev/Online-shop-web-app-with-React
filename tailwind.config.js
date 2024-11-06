/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Itim", "sans-serif"],
        subtitleFont: "sans-serif"
      }
    },
    screens: {
      pl: "900px"
    }
  },
  plugins: [],
}
