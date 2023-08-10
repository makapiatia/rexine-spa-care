/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      borderRadius: {
        extraLarge: '12rem'
      },
      colors: {
        'light-blue': '#C0F0FF',
        'green-blue': '#007DB6',
        'rexine-blue': '#0F52BA',
        'medium-blue': '#005D9E',
        'deep-blue': '#0B387E'
      },
    },
  },
  plugins: [],
}

