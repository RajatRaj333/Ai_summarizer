/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "src/App.css",

  ],
 
  theme: {
    extend: {
      fontFamily:{
        satoshi:["satoshi","sans-serif"],
        inter:["Inter","sans-serif"],
      }
    },
  },
  plugins: [],
} 