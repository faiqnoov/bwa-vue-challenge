/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: '2rem',
      center: true,
    }
  },
  plugins: [],
}

