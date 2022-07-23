module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        facebook: {
          primary: "#1977F2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
        instagram: {
          primary: "#262626",
          secondary: "#8E8E8E",
          tertiary: "#64676B",
          blue: "#0095F6",
        },
      },
      backgroundColor: () => ({
        facebook: {
          primary: "#1977F2",
          light: "#E3E6E9",
          normal: "#64676B",
          dark: "#050505",
        },
        instagram: {
          primary: "#262626",
          secondary: "#8E8E8E",
          tertiary: "#64676B",
          blue: "#0095F6",
        },
      }),
      height: {
        18: "4.5rem",
      },
      zIndex: {
        1: "1",
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
