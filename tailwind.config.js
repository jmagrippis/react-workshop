const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      mono: ['"Fira Code"', 'mono'],
    },
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
        gray: colors.blueGray,
      },
    },
  },
  plugins: [
    typography({
      modifiers: ['lg', 'xl'],
    }),
  ],
}
