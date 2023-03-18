const { theme } = require('app/design/tailwind/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../packages/app/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
  },
}
