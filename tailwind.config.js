const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":'#267ffc',
        'special-button-hover':'#ffde00',
        'special-button-hover-text':'#222c30',
        'text-color-black':'#222c30'
      },
     
    },
    fontFamily:{
      popins:["Poppins", "sans-serif"],
      jost:["Jost", "sans-serif"]
    },
   
    
    
    
  },
  darkMode: "class",
    plugins: [nextui(),require('daisyui')]
    // plugins:,require('daisyui'),
}

