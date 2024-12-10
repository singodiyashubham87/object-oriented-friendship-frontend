/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'white': "#FFFFFF",
        'primary-silver': "#C7C2C2",
        'primary-silver-80': '#C7C2C2CC',
        'secondary-silver': '#92918D',
        'input-placeholder-gray': '#92918D',
        'primary-dark': '#25221B',
        'secondary-dark': '#373737',
        'secondary-dark-80': '#373737CC',
        'dark-glassmorphism': "#37373733",
        'pink': "#AF5656",
        'green': "#56AF59",
        'cyan': '#68D8D8'

      },
      fontFamily: {
        primary: "Montserrat",
      },
      screens: {
        xxl: "1751px",
        mmd: "851px",
        gsm: "571px",
        msm: "491px",
        vsm: "441px",
        vvsm: "351px",
      },
      backgroundImage: {
        instagram:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
      },
      textColor: {
        instagram: "#e1306c",
      },
    },
  },
  plugins: [],
};