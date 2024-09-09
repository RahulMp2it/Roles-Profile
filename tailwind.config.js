/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: [' "Nunito Sans", sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    // require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}

