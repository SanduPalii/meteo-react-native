/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}','./node_modules/@rnr/**/*.{ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
      alata: 'Alata-Regular',
    },
    extend: {},
  },
  plugins: [],
};
