module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "340px",
      xsm: "500px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1366px",
      xxxl: "1440px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'Graphik Web Regular':['Graphik Web Regular','Poppins',"Arial", "sans-serif"],
        Nunito: [  "Nunito", "Poppins", "Arial", "sans-serif"],
        Poppins: ["Poppins", "Nunito", "Arial", "sans-serif"],
      },
    },
    variants: {},
  },
  plugins: [],
};
