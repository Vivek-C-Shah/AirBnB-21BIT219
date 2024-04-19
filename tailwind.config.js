/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        15: '60px',
        1.25: '5px',
      }
    },
  },
  plugins: [],
}

