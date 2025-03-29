/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'color':' rgb(85 81 227)',
       ' projcolor':'#082bc9'

      },
      // textColor:{
      //   'text':
      // }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

