module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '250px',
      'sm2': '550px',
      'xm': '765px',
      'md': '950px',
      'lg': '1100px',
      'lg2': '1250px',
      'xl': '1400px',
      '2xl': '1536px',
    },
    
    extend: {
      colors: {
        first: "#393232",
        second: "#F2EDD7",
        third: '#3A6351',
        hovercolor: "#E48257",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body:['Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
        animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
