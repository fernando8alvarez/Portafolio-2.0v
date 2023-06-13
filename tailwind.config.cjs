/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
      Bungee: ['Bungee Outline']
    },
    extend: {
      animation: {
        giro: "giro 5s linear infinite",
      },
      keyframes: {
        giro: {

          "100%": {
            transform: "rotate(180deg)",
          },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
