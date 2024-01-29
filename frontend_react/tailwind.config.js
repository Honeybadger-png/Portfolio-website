/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    fontFamily:{
      display:['Open Sans','sans-serif'],
      body:['Open Sans','sans-serif']
    },
    extend: {
      fontSize: {
        14:'14px'
      },
      backgroundColor:{
        'main-bg':'#FAFBFB',
        'main-dark-bg':'#20232A',
        'secondary-dark-bg':'#33373E',
        'light-gray':'#F7F7F7',
        'half-transparent':'rgba(0,0,0,0.5)',
      },
      borderWidth:{
        1:'1px'
      },
      borderColor:{
        color:'rgba(0,0,0,0.1)'
      },
      width:{
        400:'400px',
        760:'760px',
        780:'780px',
        800:'800px',
        1000:'1000px',
        1200:'1200px',
        1400:'1400px',
      },
      height:{
        80:'80px',
      },
      minHeight:{590:'590px'},
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "moon":"url('/src/assets/MoonLogin.png')",
        "admin-hero-pattern":"url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
    },
  },
  plugins: [],
};
