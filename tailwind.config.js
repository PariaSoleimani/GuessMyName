/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/*.js'],
  theme: {
    screens: {
      sm: '360px',
      md: '700px',
      lg: '1024px',
    },
    fontFamily: {sans: ['Press\\ Start\\ 2P', 'sans-serif']},
    extend: {},
  },
  plugins: [],
};
