/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', "sans-serif"]
        
      },
      backgroundImage: {
        'hero-pattern': "url('/hero/rightHero.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
     
    },
  },
  plugins: [],
};
