/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      garamond: ["EB Garamond", "serif"],
    },
    extend: {
      screens: {
        desktop: "1440px",
      },
    },
    colors: {
      ink: "#1B1C1D",
      cream: "#EDE5DA",
      stone: "#ADADAD",
    },
  },
  plugins: [],
};
