/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-purple": "#29066A",
        "gradient-blue": "burlywood",
      },
    },
  },
  plugins: [],
}