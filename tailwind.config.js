/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#050A13",
        panel: "#0C1321",
        ink: "#EAF2FF",
        accent: "#38BDF8",
        accentStrong: "#0EA5E9",
        accentSoft: "#1E293B"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.25), 0 24px 48px rgba(2, 132, 199, 0.18)"
      }
    }
  },
  plugins: []
};
