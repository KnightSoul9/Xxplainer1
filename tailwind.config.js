/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xm': '320px',
        // => @media (min-width: 320px) { ... }

        'sm': '374px',
        // => @media (min-width: 374px) { ... }

        'smd': '425px',
        // => @media (min-width: 374px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }  
        
        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... } 
        
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }  

        '5xl': '2400px',
        // => @media (min-width: 2400px) { ... }    
      },
      colors: {
        primary: '#1C64F2',
        primary_bold: '#1E429F',
        secondary: "#333333",
      },
    },
  },

  

  plugins: [require("@tailwindcss/typography")],
};
