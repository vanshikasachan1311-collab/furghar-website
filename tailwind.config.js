/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        forest: '#355E3B',
        orangeWarm: '#D97706',
        cream: '#FFF8F0',
        beige: '#F2DFC7',
        brownLight: '#B88963',
        ink: '#263326',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(53, 94, 59, 0.12)',
        warm: '0 18px 45px rgba(217, 119, 6, 0.16)',
      },
      backgroundImage: {
        'warm-radial': 'radial-gradient(circle at top left, rgba(217, 119, 6, 0.18), transparent 32%), radial-gradient(circle at top right, rgba(53, 94, 59, 0.15), transparent 28%)',
      },
    },
  },
  plugins: [],
}
