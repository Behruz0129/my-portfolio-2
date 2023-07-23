/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timGray: "#3E3E3E",
        blackish: "#1E1E1E",
        primaryColor: "#A387D7",
        lightPrimary: "#BABACA",
        darkPrimary: "#6C6C7C",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "2560px",
    },
  },

  plugins: [],
};
