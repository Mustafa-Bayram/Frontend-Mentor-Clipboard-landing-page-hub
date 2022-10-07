/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'body': ['Bai Jamjuree', 'sans-serif'],
    },
   
    screens: {
      sm:'375px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(auto-fit, minmax(min(100%, 15rem), 1fr))',
      },
      colors: {
        // ###Primary
        StrongCyan: 'hsl(171, 66%, 44%)',
        LightBlue: 'hsl(233, 100%, 69%)',
        // ### Neutral
        DarkGrayishBlue: 'hsl(210, 10%, 33%)',
        GrayishBlue: 'hsl(201, 11%, 66%)',
        
      },
    },
  },
  plugins: [],
}