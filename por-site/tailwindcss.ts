/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c10",
        panel: "#121218",
        accent: "#7c5cff"
      }
    }
  },
  plugins: []
};
