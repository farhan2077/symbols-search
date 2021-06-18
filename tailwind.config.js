const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...fontFamily.sans],
        display: ["IBM Plex Sans"],
      },
      colors: {
        teal: colors.teal,
      },
      width: {
        7.5: "1.875rem",
      },
      margin: {
        8.5: "2.125rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["focus-within"],
      placeholderColor: ["focus", "dark"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
