/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3EAE93"
        }
      },
      fontSize: {
        '10xl': ['160px', '100px'],
        '7.5xl': ['80px', '50px'],
        '5.5xl': ['50px', '48px']
      }
    },
  },
  plugins: [],
}
