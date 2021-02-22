const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fogra': '#0A090C',
        'jet': '#3B3A3D',
        'ghost': '#F4F4F4',
        'slate': '#6D8EA0',
        'chestnut': '#BC4749',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [    
    require('@tailwindcss/typography'),
  ],
}
