/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      border: ["active", "focus",],
    },
  },
  plugins: [],
};
