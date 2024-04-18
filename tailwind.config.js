/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bricolage: "bricolage",
      },
    },
  },
  plugins: [],
};
