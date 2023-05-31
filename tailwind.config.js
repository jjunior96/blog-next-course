/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        primary: '#201f27',
        secundary: '#2E3038',
        link: '#f72585'
      }
    }
  },
  plugins: []
};
