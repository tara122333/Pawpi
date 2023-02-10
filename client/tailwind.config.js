/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brown' : '#272c24',
        'green' : '#45785e',
        'cream-light' : '#ebeae8',
        'green-light' : '#28aa65',
      }
    },
  },
  plugins: [],
}