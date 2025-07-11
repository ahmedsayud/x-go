/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E6911E",
        "brand-dark": "#b86f13",
      },
      width: {
        hero: '70vw', // عرض 70% من عرض الشاشة
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

