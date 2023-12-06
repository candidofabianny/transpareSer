/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rosarivo:["--rosarivo"],
        andisignature:["andi-signature"],
        voigante:["--font-voigante"],
        lovingambros:["--font-loving-ambros"],
        athenevoyage:["--font-athene-voyage"],
        autography:["--font-autography"],
        galabiyah:["--font-galabiyah"]
      },
      colors: {
        bordo: "#971E1E",
        stickyblack: "#181515",
        protonred: "#8c0606",
      },
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
}
