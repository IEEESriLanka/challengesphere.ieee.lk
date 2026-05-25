/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#FFF",
      "text-white": "#C9C9C9",
      "background-black": "#1D1D1D",
      "background-white-1": "#F2F2F2",
      "background-white-2": "#FBF8F8",
      "text-black": "#383838",
      yellow: "#E1BE43",
      gray: "#263238",
      "light-gray": "#EEEEEE",
      "light-blue2": "#05ddff",
      "hover-gray": "#e2e2e2",
      "dark-blue": "#082E3F",
      "sky-blue": "#006692",
      "light-blue": "#0E445B80",
      green: "#3EC932",
      "light-green": "#84DA83",
      red: "#DB4D4D",
      "dark-red": "#DC1F1F",
      background: "#DFDFDF",
      "placeholder-gray": "#9b9da3",
      // Chess theme palette (dark hero rebrand)
      "chess-bg": "#020511",
      "chess-bg-2": "#01040d",
      "chess-surface": "#0a1124",
      "chess-surface-2": "#101a34",
      "chess-border": "#1f2a44",
      "chess-muted": "#9CA3AF",
      "chess-text": "#E6EAF2",
      "chess-cyan": "#05ddff",
      "chess-cyan-soft": "#3FE7FF",
      "chess-blue": "#0067A8",
      "chess-blue-deep": "#082E3F",
    },
    extend: {
      backgroundImage: {
        "chess-grid":
          "linear-gradient(to right,#1f2937 1px,transparent 1px),linear-gradient(to bottom,#1f2937 1px,transparent 1px)",
        "chess-radial":
          "radial-gradient(ellipse at top, rgba(5,221,255,0.08), transparent 60%)",
        "chess-section":
          "linear-gradient(180deg,#020511 0%,#040a1f 50%,#020511 100%)",
      },
      boxShadow: {
        "chess-glow": "0 0 30px rgba(5,221,255,0.18)",
        "chess-card":
          "0 10px 30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            textShadow:
              "0 0 20px rgba(5,221,255,0.45), 0 0 40px rgba(5,221,255,0.25), 0 4px 12px rgba(0,0,0,0.85)",
          },
          "50%": {
            textShadow:
              "0 0 32px rgba(5,221,255,0.75), 0 0 70px rgba(5,221,255,0.4), 0 4px 12px rgba(0,0,0,0.9)",
          },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        "float-up": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(0)",
            opacity: "0",
          },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.6" },
          "100%": {
            transform:
              "translateY(-110vh) translateX(var(--drift,0)) scale(1)",
            opacity: "0",
          },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0.6" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        marquee: "marquee 20s linear infinite",
        "glow-pulse": "glow-pulse 4.5s ease-in-out infinite",
        "aurora-pulse": "aurora-pulse 7s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        "line-grow": "line-grow 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      screens: {
        tb: "480px",
      },
    },
  },
  plugins: [],
};
