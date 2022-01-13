module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-3': 'bounce 1s 2.5'
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
