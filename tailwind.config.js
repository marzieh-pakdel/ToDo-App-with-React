/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-color" : "#EA5959",
        "dark-gray-text" : "#525252",
        "gray1" : "#F3F3F3",
        "gray2" : "#B5B5B5",
        "gray3" : "#525252",
      },

      boxShadow: {
        "card-box-shadow": "0px 10px 10px 0px #00000040"
      }
    },
  },
  plugins: [],
}

