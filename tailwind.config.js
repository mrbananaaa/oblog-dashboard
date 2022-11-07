/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: 'Poppins'
      },
      colors: {
        "dark": "#222222",
        "light": "#FAFAFA",
        "light-orange": "#FFFCF0",
        "stroke": "#989898",
        "dark-gray": "#444444",
        "subtitle": "#666666",
        "dark-yellow": "#E5A500",
        "red": "#FF2222",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
