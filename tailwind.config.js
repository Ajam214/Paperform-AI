/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // add pages for Next.js
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // support small phones like iPhone SE
      },
    },
  },
  plugins: [],
};
