const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
    },
   
    keyframes: {
      vline1anim: {
        "0%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(-100px)",
        },

        "20%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "30%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "10%": {
          transform: "translateX(100px)",
          opacity: 1,
          visibility: "visible",
        },
        "50%": {
          transform: "translateX(100px)",
          opacity: 1,
          visibility: "visible",
        },

        "80%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(0px)",
        },

        "100%": {
          opacity: 1,
          visibility: "visible",
          transform: "translateX(0)",
        },
      },

      vline2anim: {
        "0%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(-100px)",
        },

        "20%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "30%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "10%": {
          transform: "translateX(-100px)",
          opacity: 1,
          visibility: "visible",
        },

        "50%": {
          transform: "translateX(-100px)",
          opacity: 1,
          visibility: "visible",
        },

        "80%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(0px)",
        },

        "100%": {
          opacity: 1,
          visibility: "visible",
          transform: "translateX(0)",
        },
      },

      vline3anim: {
        "0%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(150px)",
        },

        "20%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "30%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "10%": {
          transform: "translateX(150px)",
          opacity: 1,
          visibility: "visible",
        },

        "50%": {
          transform: "translateX(150px)",
          opacity: 1,
          visibility: "visible",
        },

        "80%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(0px)",
        },

        "100%": {
          opacity: 1,
          visibility: "visible",
          transform: "translateX(0)",
        },
      },
      vline4anim: {
        "0%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(-100px)",
        },

        "20%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "30%": {
          transform: "translateX(0)",
          opacity: 1,
          visibility: "visible",
        },

        "10%": {
          transform: "translateX(-100px)",
          opacity: 1,
          visibility: "visible",
        },

        "50%": {
          transform: "translateX(-100px)",
          opacity: 1,
          visibility: "visible",
        },

        "80%": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateX(0px)",
        },

        "100%": {
          opacity: 1,
          visibility: "visible",
          transform: "translateX(0)",
        },
      },

      fadeIn : {
        0: {
            opacity: 0,
            transform: 'translateX(-20px)'
        },
        100: {
            opacity: 1,
            transform: 'translateX(0)'
      }
    },
    },

    boxShadow: {
      DEFAULT: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      nav: "0 0 3px rgb(255 255 255 / 20%)",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },

      colors: {
        green: {
          400: "#22cc6a",
          500: "#22cc6a",
          600: "#1db65b",
          700: "#1aa14c",
          800: "#178c3d",
          900: "#14772e",
        },
      },

      backgroundColor: {
        primary: "#22cc6a",
        secondary: "#1a242c",
        tertiary: "#20ce65",
      },

      animation: {
        vline1anim: "vline1anim 0.5s ease-in-out 4 forwards",
        vline2anim: "vline2anim 0.5s ease-in-out 4 forwards",
        vline3anim: "vline3anim 0.5s ease-in-out 4 forwards",
        vline4anim: "vline4anim 0.5s ease-in-out 4 forwards",
        fadeInTitle: "fadeIn 4s ease-in-out"
      },
    },
  },
  plugins: [],
};
