/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      '--primary': '#31446F',
      '--secondary': '#6786CC',
      '--theme-dark': '#13213D',
      '--highlight':'#01EEC7',
      '--text-gray': '#DBDBDB',
      transparent: 'transparent',
      white: '#fff',
    },
  },
  plugins: [],
}

