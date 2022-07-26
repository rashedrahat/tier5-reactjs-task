module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
          body: "#F1F2F5",
        },
        instagram: {
          primary: "#262626",
          secondary: "#8E8E8E",
          tertiary: "#64676B",
          blue: "#0095F6",
          body: "#FAFAFA",
        },
      }),
      height: {
        18: "4.5rem",
      },
      zIndex: {
        1: "1",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
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
