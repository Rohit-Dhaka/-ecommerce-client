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
    sm: '640px',   // Small devices (phones)
    md: '768px',   // Medium devices (tablets)
    lg: '1024px',  // Large devices (laptops)
    xl: '1280px',  // Extra large devices (desktops)
    '2xl': '1536px', // Ultra-wide screens
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

