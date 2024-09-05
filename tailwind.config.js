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
        "primary-color" : "#d6eaf8",
        "card-bg-color" : "#f8f9f9",
        "placeholder" : "#1f618d",
        "light-blue" : "#ebf5fb",
        "tag-bg" : "#2874a6 ",
      },

      boxShadow: {
        "card-box-shadow": "0px 10px 10px 0px #00000040"
      }
    },
  },
  plugins: [],
}

