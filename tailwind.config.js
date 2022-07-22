module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        facebook: {
          primary: "#4267B2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
      },
      backgroundColor: () => ({
        facebook: {
          primary: "#4267B2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
      }),
      height: {
        18: "4.5rem",
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
  plugins: [require("tailwind-scrollbar-hide")],
};
