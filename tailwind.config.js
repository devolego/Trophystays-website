/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptopScreen: "1250px",
      },
      colors: {
        white: "#ffffff",
        black: "#292021",
        blackLight: "#333333",
        primary: "#886750",
        secondary: "#CAB08F",
        darkGrey: "#939393",
        lightBrown: "#F5EADB",
        greyishBrown: "#E1D9CE",
        offWhite: "#FAFAFA",
      },
      gridTemplateColumns: {
        "image-gallery-4": "160px repeat(3 , 1fr)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-image": "url('../images/hero.jpg')",
        "banner-overlay": "url('../images/banner-overlay.png')",
      },
      container: {
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
