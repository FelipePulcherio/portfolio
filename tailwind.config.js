/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '3.5xl': ['2.0625rem', '2.375rem'],
        '5xl': ['3rem', '6rem'],
        '6xl': ['3.75rem', '6rem'],
        '7xl': ['4.5rem', '6rem'],
        '8xl': ['6rem', '6rem'],
        '9xl': ['8rem', '6rem'],
      },
    },
  },
  plugins: [],
};
