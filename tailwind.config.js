// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': '#2B937A',
        'main-text': '#9AA7A4',
        'gray-1': 'rgba(255, 255, 255, 0.2)',
        'neutral-200': 'rgba(205, 214, 212, 1)',
        'neutral-400': 'rgba(154, 167, 164, 1)',
        'neutral-0': 'rgba(255, 255, 255, 1)',
        'emphasis': 'rgba(148, 255, 223, 1)',
        'gray-2': 'rgba(19, 29, 32, 1)',
        'gray-3': 'rgba(255, 255, 255, 0.10)'
      }
    },
    screens: {
      fold: { max: '300px' },
      mobile: { max: '767px' },
      'not-mobile': { min: '768px' },
      'not-desktop': { max: '1024px' },
      tablet: { min: '768px', max: '1024px' },
      laptop: { max: '1280px' },
      desktop: { min: '1280px' },
      'desktop-1': {min: '1366px'},
      'desktop-2': {min: '1440px'},
      'ipad-pro': {min: '1023px', max: '1025px'},
      'desktop-3': {min: '1520px'},
      'screen-hide-sidebar': { max: '924px' }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
