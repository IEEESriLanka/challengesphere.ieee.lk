/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      "text-white": "#C9C9C9",
      "background-black": "#1D1D1D",
      "background-white-1": "#F2F2F2",
      "background-white-2": "#FBF8F8",
      "text-black": "#383838",
      yellow: "#E1BE43",
      gray: "#263238",
      "light-gray": "#EEEEEE",
      "light-blue": "#1155CC",
      "light-blue-hover": "#104CB5",
      "hover-gray": "#e2e2e2",
      "dark-blue": "#082E3F",
      "sky-blue": "#006692",
      green: "#3EC932",
      "light-green": "#84DA83",
      red: "#DB4D4D",
      "dark-red": "#DC1F1F",
      background: "#DFDFDF",
      "placeholder-gray": "#9b9da3",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        marquee: "marquee 20s linear infinite",
      },
      screens: {
        tb: "480px",
      },
    },
  },
  plugins: [],
};
