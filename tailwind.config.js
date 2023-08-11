/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'gradient-bg1': 'var(--RadialGradient1)',
        'gradient-bg2': 'var(--RadialGradient2)',
        'gradient-rock1': 'var(--RockGradient1)',
        'gradient-rock2': 'var(--RockGradient2)',
        'winnerColor': 'hsl(230, 49%, 15%)'
      },
      width: {
        '112': '28rem',
        '92': '23rem',
        '72': '18rem'
      },
      height: {
        '112': '28rem',
        '92': '23rem',
        '72': '18rem'
      },
      keyframes: {
        wave: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(3)' }
        }
      },
      animation: {
        wave: 'wave 4s infinite cubic-bezier(0.39, 0.575, 0.565, 1)'
      },
      screens: {
        'xxs': '350px',
        'xs': '450px',
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
}
