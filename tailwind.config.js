/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    
    animation: {
      ["infinite-slider"]: "infiniteSlider 20s linear infinite",
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
    },
    
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
        btnColor: "#30237B",
        secondry: "#666476",
        background: "#FAFAFA",
        stroke_Color: "#DBDBDB",
        theme: "#30237B",
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

        // dark mode colror
        darkSecondry: "#000000",
        darkBackground: "#111827",
        darkText:'#1F2937',
        Stroke_Color: "#000000",
        darkTheme: "red",
        darkLightPurpule: "#EEECF8",
        darkVolted: "#28253C",
        darkGradinet: "#C597FF",
        darkBackground: "#000000",
      },
    },
    screens: {
      '2xll': '1500px',
      '3xxl':'1600px'
    },
  },
  plugins: [],
});