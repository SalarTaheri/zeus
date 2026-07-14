/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./zeus.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['Vazirmatn', 'sans-serif'] },
      colors: {
        amoled: {
          bg: '#000105',
          card: '#040914',
          input: '#081224',
          border: '#102040'
        }
      }
    }
  },
  plugins: [],
}
