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
      borderRadius: {
        'custom-xs': "10px",
        'custom-s': '20px',
        'custom-md': '30px',
      },
      fontSize: {
        'xs': ['10px', '14px'], 
        's': ['20px', '28px'], 
        'md': ['30px', '40px'], 
      },
      backgroundImage: {
        'kali': "url('/public/images/linux.jpg')",
      }
    },
  },
  plugins: [],
};