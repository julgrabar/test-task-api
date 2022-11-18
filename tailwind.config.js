
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      dropShadow: {
        sh: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)"
      },
      colors: {
        'mob-item-color': '#EFF0F5',
        "main-font" : "#3A4562",
        "font-grey" : "rgba(56, 65, 93, 0.82)",
        "secondary-font" : "#878D9D",
        "curr-page": "#5876C5",
        "blue-rgba" :"rgba(161, 177, 219, 0.3173)",
        "grey-rgba" : "rgba(0, 0, 0, 0.12)",
        "yellow-rgba" : "rgba(255, 207, 0, 0.15)",
        "contacts-col" : " #E7EAF0"
      },
    },
    container: {
      center: true,
      screens: {
        xl: '1400px',
      },
    },
    screens:{
      s: "480px",
      m:"800px",
      l:"1200px"
    }
  },
  plugins: [],
}
