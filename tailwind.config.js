/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1120px"
      }
    },
    extend: {},
  },
  plugins: [],
}

