module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-3': 'bounce 1s 2.5',
        'ping-3': 'pinging 2s 3'
      },
      keyframes: {
        pinging: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: 1
          },
          '50%': {
            transform: 'scale(1.3)',
            opacity: 0.4
          }
      }
      }
    },
    fontFamily: {
      'ui': ['Roboto', 'Helvetica', 'ui-sans-serif', 'system-ui'],
      'body': ['Merriweather', 'Georgia', 'ui-serif', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
