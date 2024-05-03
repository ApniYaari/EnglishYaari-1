/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

     colors: {
        btnColor: "#7B17CA",
        secondry: "#666476",
        background: "#F7F5FF",
        stroke_Color: "#DBDBDB",
        theme: "#7B17CA",
        lightPurpule: "#EEECF8",
        darkVolted: "#28253C",
        gradinet: "#C597FF",
        darkBackground: "#000000",
        sucess: "#1DA96E",
        lightSucess: "#DBF4EC",
        errror: "#DD4040",
        errorLight: "#FBEAEA",
        pur:'#7429D4',
        foot:'#25232F',
        purpleShade:'#7B17CA',
        yellow900:'#FFDO2A',
        primaryB:'#4D16A4',
        primary: {
          50: "#EBE7FF",
          100: "#E9DBFF",
          200: "#D9C0FF",
          300:'#C39DFF',
          400:'#803EE7',
          500:'#6D28D9',
          600:'#5D20BC',
          700:'#4D16A4',
          800:'#461495',
          900:'#310B6C',


        },
 
      },
    },
    screens: {
      '2xll': '1500px',
      '3xxl':'1600px'
    },
  },
  plugins: [],
})
