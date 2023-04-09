/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dullGrey: "#4D4D4D",
        lightRed: "#B46060",
        peach: "#FFBF9B",
        lightPeach: "#FFF4E0",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        Animation: {
          blob: "blob 1s infinite",
        },
        blob: {
          "0%": {
            transform: " translate (0px,0px) scale(1)",
          },
          "33%": {
            transform: " translate (30px,-50px) scale(1.2)",
          },
          "66%": {
            transform: "translate (-20px,20px) scale(0.8)",
          },
          "100%": {
            transform: "translate (0px,0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
