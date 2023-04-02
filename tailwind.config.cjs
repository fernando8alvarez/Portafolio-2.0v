/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
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
  plugins: [],
};
