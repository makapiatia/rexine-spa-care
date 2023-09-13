/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '500px',
      'md': '768px',
      'tablet': '830px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1476px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'signika': ['Signika', 'sans-serif'],
       },
      borderRadius: {
        extraLarge: '12rem'
      },
      colors: {
        'extra-light-blue': '#E8FAFF',
        'light-blue': '#c3edfa',
        'green-blue': '#007DB6',
        'rexine-blue': '#0F52BA',
        'medium-blue': '#005D9E',
        'deep-blue': '#0B387E',
        'light-teal': '#00bfb9',
        'medium-teal': '#029794',
        'light-green': '#00ba69',
        'medium-green': '#029756',
        'pricing-yellow': '#FFF300'
      },
    },
  },
  plugins: [],
}

