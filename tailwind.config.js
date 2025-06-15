/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014", 
        secondary: "#151312",
        light:{
          100: "#D6C6FF",
          200: "#A8B5DB", 
          300: "#9CA4AB", 
        },
        dark:{
          100: "#221F3D", 
          200: "#0F0D23", 
        },
        accent: "#AB8BFF", // pink-400
        background: "#F9FAFB", // gray-100
        text: "#111827", // gray-900
      },
    },
  },
  plugins: [],
}