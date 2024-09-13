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
      backgroundImage: {
        'progress-img': 'url("progress.png")',
      }
    },
  },
  plugins: [
    require('daisyui'),
    // require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}

//  0px 6px 58px 0px #C4CBD61A;
