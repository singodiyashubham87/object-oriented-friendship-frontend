/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#232121",
        "primary-silver": "#C7C2C2",
        "primary-silver-50": "#C7C2C27F",
        "primary-silver-80": "#C7C2C2CC",
        "secondary-silver": "#92918D",
        "secondary-silver-70": "#92918DB3",
        "input-placeholder-gray": "#92918D",
        "primary-gray": "#B0AFAF",
        "primary-gray-30": "#B0AFAF4D",
        "primary-dark": "#25221B",
        "secondary-dark": "#373737",
        "secondary-dark-80": "#373737CC",
        "dark-glassmorphism-30": "#3737374D",
        "dark-glassmorphism-40": "#37373766",
        "dark-glassmorphism-50": "#3737377F",
        "dark-glassmorphism-60": "#37373799",
        "dark-glassmorphism-70": "#373737B3",
        "primary-pink": "#AF5656",
        "primary-green": "#56AF59",
        "dark-cyan": "#56AF9B",
        "dark-cyan-70": "#56AF9BB3",
        "primary-cyan": "#68D8D8",
      },
      fontFamily: {
        primary: "JetBrains Mono",
        secondary: "Montserrat",
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
        "custom-xxs": "5px",
        "custom-xs": "10px",
        "custom-s": "20px",
        "custom-md": "30px",
      },
      fontSize: {
        xs: ["10px", "14px"],
        s: ["20px", "28px"],
        md: ["30px", "40px"],
      },
      backgroundImage: {
        "kali-desktop": "url('@/assets/images/kali-desktop.jpg')",
        "kali-mobile": "url('@/assets/images/kali-mobile.jpg')",
      },
      blur: {
        76: "76%",
      },
      backdropBlur: {
        76: "76%",
      },
      borderWidth: {
        xs: "1px",
        sm: "2px",
      },
      padding: {
        xs: "1px",
        sm: "2px",
      },
    },
  },
  plugins: [],
};
