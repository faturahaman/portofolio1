/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(-45deg)",
            opacity: "0.2",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            transform: "translateX(-200px) translateY(200px) rotate(-45deg)",
            opacity: "0.2",
          },
        },
      },
      animation: {
        meteor: "meteor linear infinite",
      },
    },
  },
  plugins: [],
};
