/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',    
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/torre.jpg")',
        'parallaxDos': 'url("/isla.jpg")',
        'parallaxTres': 'url("/paisaje-1.png")',
        'womanTatto':'url("/woman-tatto.jpg")',
        'artisttattoTatto':'url("/artistTatto.jpg")',
        "montains":'url("/montains.jpg")',
        "fairy":'url("/fairy.jpg")',
        "galaxy":'url("/space-galaxy.jpg")',
        "menu":'url("/menus.png")'

       

        
      }
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

