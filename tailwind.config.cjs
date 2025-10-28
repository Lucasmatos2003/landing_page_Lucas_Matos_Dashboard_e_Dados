/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  purge: false,
  theme: {
    extend: {
      colors: {
        azulEscuro: "#0A192F",
        azulMedio: "#112240",
        azulClaro: "#233554",
        azulHover: "#64FFDA",
        cinzaClaro: "#E6F1FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
};
