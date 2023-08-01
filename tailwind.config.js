/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cover-image': "url('./images/banner1.png')",
      }
    },
  },
  plugins: [],
}