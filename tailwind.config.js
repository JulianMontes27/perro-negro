/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'perro-red': '#B93A32', // ROJO PERRO - PANTONE V3556 C
        'perro-black': '#2B2B2A', // NEGRO SÓTANO - PANTONE BLACK 3 C
        'perro-gray-light': '#BFBFBF', // GRIS CLARO - PANTONE BLACK 3 C - 20%
        'perro-gray': '#808080', // GRIS OSCURO - PANTONE BLACK 3 C - 55%
      },
      fontFamily: {
        'glitch': ['Courier New', 'monospace'],
        'sans': ['Arial Narrow', 'Arial', 'sans-serif'],
        'title': ['PENITENTE SANS BT VARIABLE', 'Arial Narrow', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.02em' }],
        'base': ['1.3rem', { lineHeight: '1.5rem', letterSpacing: '-0.02em' }],
        'lg': ['1.56rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        'xl': ['1.69rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        '2xl': ['2.6rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['3.12rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['3.64rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3.9rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['4.94rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '7xl': ['5.85rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['7.8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['10.4rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
}