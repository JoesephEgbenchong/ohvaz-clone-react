/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Berkshire': ['Berkshire Swash', 'cursive']
      },
      colors: {
        'primary': '#ff3c00',
        'primary-dark-1': '#d93300',
        'primary-dark-2' : '#c22d00',
        'default-background': '#fcf8f7',
        'textBlack': '#222222',
        'sectionSeparate' : '#f5e0db'
      }
    },
  },
  plugins: [],
}
