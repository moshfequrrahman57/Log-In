/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend:{
      colors: {
        'light-chocolate': '#fefae0',
      },
      lineHeight: {
        'extra-tight': '.1',
      },
    fontFamily:{
      "Yesteryear": 'serif',
    }
      
    }
  },
  plugins: [],
}

