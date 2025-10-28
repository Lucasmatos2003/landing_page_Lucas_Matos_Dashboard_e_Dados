/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  purge: false,
  safelist: [
    'animate-gradient',
    'particle',
    'bg-azulHover',
    'text-azulHover',
    'text-cinzaClaro',
    'shadow-2xl',
    'hover:shadow-azulHover/40',
    'hover:bg-azulClaro',
  ],
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
      keyframes: {
        gradientAnimation: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradientAnimation 10s ease infinite",
      },
    },
  },
  plugins: [],
};
