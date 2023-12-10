/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleblue: "hsl(225, 100%, 94%)",
        brightblue: "hsl(245, 75%, 52%)",
        brightbluelight: "hsla(245, 83%, 68%, 1)",
        verypaleblue: "hsl(225, 100%, 98%)",
        desaturatedblue: "hsl(224, 23%, 55%)",
        darkblue: "hsl(223, 47%, 23%)",
      },
    },
    fontFamily: {
      redhatdisplay: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [],
}
