/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cool-gray': "#7A83A0",
      'light-gray': "#C6CAD6",
      'russian-violet': "#231942",
      'ultra-violet': "#5E548E",
      'african-violet': "#9F86C0",
      'lilac': "#BE95C4",
      'pink-lavander': '#E0B1CB',
      'white': "#FFFFFF",
      'dark-gray': '#1E1E1E',
    },
  },
  plugins: [],
}

