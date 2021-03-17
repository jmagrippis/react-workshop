const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  corePlugins: {
    fontFamily: false,
  },
  theme: {
    container: {
      center: true,
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
