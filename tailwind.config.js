/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'prim-cyan': '#0ED3CF',
      'prim-yellow': '#FACC15',
      'prim-red': '#FA455A',
      'white': 'white',
      'prim-gray': '#626968'
    }
  },
  plugins: [],
}

