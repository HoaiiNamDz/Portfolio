module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'navbar-border': '#B8B9BE',
          'primary-bg': '#E0E5EC',
          'primary-color': '#FF4C60'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}

