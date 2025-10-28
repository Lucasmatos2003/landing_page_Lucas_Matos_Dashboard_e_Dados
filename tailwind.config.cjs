/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azulEscuro: "#0D1B2A",
        azulMedio: "#1B263B",
        azulClaro: "#3E92CC",
        azulHover: "#61A5C2",
        cinzaClaro: "#E0E1DD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
