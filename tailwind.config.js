/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#DBDBDB", // Add your custom color
        customRed: "#F93B1D",
      },
      boxShadow: {
        "custom-light": "4px 3px 11px rgba(0, 0, 0, 0.12)",
        "custom-dark": "0 4px 14px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
