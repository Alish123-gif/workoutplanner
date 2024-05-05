/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        custom: ['DM Serif Display', 'sans-serif']
      },
      backgroundColor: {
        liquid: ['liquid-text'],
        custom12: ["custom-background"]
      },
      colors: {
        custom1: "#C0C0C0"
      }
    },
  },
}