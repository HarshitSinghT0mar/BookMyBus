/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #ef4444, #f87171, #ccc)',
      },
      colors: {
        primary: '#ef4444',
        primaryDark: '#dc2626',
        disabled: '#d1d5db'
      },
      fontFamily: {
        primaryFont: ['Santoshi', 'sans-serif']
      },
      fontSize: {
        'heading': '2rem',    // 32px
        'subtitle': '1.25rem', // 20px
        'small-text': '0.875rem', // 14px
      },
      fontWeight: {
        'heading': '700', // Bold
        'subtitle': '600', // Semi-bold
        'small-text': '400', // Normal
      },
    },
  },
  plugins: [],
}

