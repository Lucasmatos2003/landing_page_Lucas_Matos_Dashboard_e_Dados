/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulEscuro: "#0A192F",
        azulMedio: "#112240",
        azulHover: "#64ffda",
        azulClaro: "#4fc3f7",
        cinzaClaro: "#ccd6f6",
      },
    },
  },
  plugins: [],
}
