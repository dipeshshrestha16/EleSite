/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#123C63",
        yellow: "#FFC107",
        cta: "#F59E0B",
        success: "#147a14",
        successBright: "#1cbf1b",
        info: "#5bc0de",
        paper: "#F5F7FA",
        ink: "#1F2933"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 45px rgba(16, 16, 24, 0.08)"
      },
      keyframes: {
        ringPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.45)" },
          "50%": { boxShadow: "0 0 0 14px rgba(245, 158, 11, 0)" }
        }
      },
      animation: {
        "ring-pulse": "ringPulse 1.9s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
