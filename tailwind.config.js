/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '520px',
      tablet: '920px',
      ...defaultTheme.screens,
    },
    colors: {
      'main-deep': '#800080',
      ...colors,
    },
  },
  plugins: [],
};
