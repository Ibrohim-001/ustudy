module.exports = {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  

  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out ',
        pulse: 'pulse 5s ease-in-out ',
        'slide-up': 'slide-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
