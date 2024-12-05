/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      "sphones": "320px",
    },
    extend: {
      backgroundImage: {
        'background-img': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}

