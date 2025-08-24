/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d1117',
        'dark-card': '#161b22',
        'dark-border': '#30363d',
        'dark-text': '#c9d1d9',
        'dark-text-secondary': '#8b949e',
        'dark-green': '#238636',
        'dark-green-hover': '#2ea043',
        'dark-green-text': '#39d353',
      },
      fontFamily: {
        sans: ['"ui-sans-serif"', 'system-ui', 'sans-serif'],
        mono: ['"ui-monospace"', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blinkTextCursor: {
          from: { 'border-right-color': 'rgba(201, 209, 217, .75)' },
          to: { 'border-right-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
}