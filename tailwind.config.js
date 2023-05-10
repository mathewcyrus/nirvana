/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
      maxWidth: {
        "max-s-width": "1366px",
      },
      maxHeight: {
        mh: "756px",
      },
      borderRadius: {
        full: "50%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        100: "450px",
      },
      gap: {
        65: "270px",
      },
      transitionDuration: {
        1200: "10",
      },

      backgroundColor: {
        "brand-color": "#1A222A",
        bgdarkmode: "#1A222A",
        brandShade: "#1a2022",
        card1color: "#5d97009d",
        card1shade: "#5d97006f",
        card2color: "#a70619a7",
        card2shade: "#a706197a",
        card3color: "#53242cc7",
        card3shade: "#53242ca0",
        card4color: "#b2393db5",
        card4shade: "#b2393d96",
      },
      colors: {
        primary: "#1A222A",
        secondaryColor: "#5D9700",
      },

      fontFamily: {
        sans: ["Lato", "sans-serif"],
        corm: ["Cormorant SC", "serif"],
      },
    },
  },
  plugins: [],
};
