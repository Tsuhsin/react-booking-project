/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
      },
      fontFamily: {
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'center': '0 0 10px 0px rgba(0, 0, 0, 0.1)',
        'center-lg': '0 0 30px 0px rgba(0, 0, 0, 0.1)',
        'bottom': '0 10px 10px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ 
      strategy : 'class', 
    }), 
  ],
}
