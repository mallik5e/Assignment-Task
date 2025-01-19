/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38': '10rem', // 34px is equivalent to 8.5rem
      },
    },
  },
  plugins: [],
}