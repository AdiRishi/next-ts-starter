/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,cjs,cts,mjs,mts,jsx,tsx}',
    './pages/**/*.{js,ts,cjs,cts,mjs,mts,jsx,tsx}',
    './components/**/*.{js,ts,cjs,cts,mjs,mts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
