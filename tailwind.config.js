module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        facebook: "#4267B2",
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) and (max-width: 1279px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
