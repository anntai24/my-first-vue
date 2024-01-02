/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      'sm': '520px',
      'tablet':'920px',
    },
    colors:{
      'main-deep':'#800080',
      // ...colors
    }
  },
  plugins: [],
};
