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
        "primary-color" : "#ebf5fb",
        "card-bg-color" : "#f8f9f9",
        "placeholder" : "#1f618d",
        "light-blue" : "#aed6f1",  
        "tag-bg" : "#5499c7",
        "selected-tag": "#1a5276",
        "done-task": "#f8f9f9",
      },

      boxShadow: {
        "card-box-shadow": "0px 10px 10px 0px #00000040"
      }
    },
  },
  plugins: [],
}