/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      primary: "rgba(0, 222, 255, 1)",
      "btn-primary": "rgba(0, 222, 255, 0.6)",
      secondary: "hsl(0, 0%, 90%)",
      white: "rgb(255, 255, 255)",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        badScript: ["Bad Script", "sans-serif"],
      },
      className: {
        gm: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "16px",
          backdropFilter: "blur(5px)",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
