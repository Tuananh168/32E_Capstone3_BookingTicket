/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontSize: {
        1: "1px",
        2: "2px",
        3: "3px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        40: "40px"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}
