/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    container: {
  center: true,
  padding: '12px',
  screens: {
    sm: '640px',   
    md: '768px',   
    lg: '1024px',  
    xl: '1280px',  
    '2xl': '1536px', 
  },
},

      fontFamily:{
          'outfit':["Outfit, sans-serif"],                 
          'prata':["Prata, serif"]                            
      },
      animation:{
        'progress':"progressbar 2s  linear forwards"
      },
      keyframes:{
        "progressbar":{
          '0%':{width:"0%"},
          '100%':{width:"100%"},
        }
      }
    },
  },
  plugins: [],
}

