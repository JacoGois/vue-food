const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        vue: '#41b883',
        background: '#ff4b1d'
      },
      height: {
        mainHeight: `calc(100vh - 5rem)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}