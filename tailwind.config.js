/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "Roboto"],
      body: ["Roboto", "Roboto"],
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"],
        poppins: ["Poppins"],
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: 0 },
          "51%, 100%": { opacity: 1 },
        },
      },
      colors: {
        "deep-blue": "#1E2A53",
        "deep-blue-2": "#a2a6b4",
        "deep-blue-3": "#BCC3D4",
        "deep-blue-4": "#F2F1F3",
        "light-blue": "#025EFE",
      },
      rotate: {
        15: "15deg",
      },
    },
  },
  plugins: [],
};
