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
      boxShadow: {
        "md-gray":
          "0 7px 6px -1px rgba(17,24,39, 0.1), 0 3px 4px -1px rgba(17,24,39, 0.06)",
      },
    },
  },
  variants: {
    boxShadow: ["dark"],
    extend: {
      borderWidth: ["focus-within"],
      placeholderColor: ["focus", "dark"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
