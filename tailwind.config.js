/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { abp: { orange: '#CE4B1A', ink: '#38251D', cream: '#FFF8ED', sand: '#F3E5D0', sage: '#56705D' } },
      fontFamily: { display: ['Georgia', 'serif'], sans: ['Arial', 'sans-serif'] }
    }
  },
  plugins: []
};