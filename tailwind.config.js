module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbarBackground: "#131921",
        amazonYellow: "#febd69",
        pageBackground: "#EAEDED",
        btnBackgroundYellow: "#FFD814",
        btnBackgroundGray: "#EDFDFF",
        btnHoverYellow: "#F7CA00",
        btnHoverGray: "#F7FAFA",
        btnBorder: "#FCD200",
        amazonText: "#0F1111",
        amazonBorder: "#D5D9D9",
        amazonBlue: "#232f3e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
