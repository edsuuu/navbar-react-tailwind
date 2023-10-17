/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#312353',

      },

      borderColor: {
        'custom-border-color': '#7e35db', // Substitua a cor pelo valor desejado
      },

      fontFamily: {
        'inter': ['Inter', 'sans'],
        'jura': ['Jura', 'sans'],
        'poppins': ['Poppins', 'sans'],
      },

    },
  },
  plugins: [],
}