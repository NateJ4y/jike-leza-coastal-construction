/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { coast: { navy: '#102638', slate: '#304653', gold: '#C5A36A', sand: '#F5F3EE' } }, fontFamily: { display: ['Manrope', 'sans-serif'], body: ['DM Sans', 'sans-serif'] } } },
  plugins: []
}