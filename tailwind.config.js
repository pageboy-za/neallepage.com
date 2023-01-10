/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        "copper": {
                50: "#FAF6F5",
                100: "#F3EAE7",
                200: "#E7D5CF",
                300: "#D8BAB1",
                400: "#C5998C",
                500: "#AE715E",
                600: "#A06350",
                700: "#8F5848",
                800: "#77493C",
                900: "#4E3027"
              },
        "gold": {
                    50: "#FAF7F4",
                    100: "#F5F0EA",
                    200: "#ECE0D5",
                    300: "#DFCBB9",
                    400: "#D1B499",
                    500: "#C29C78",
                    600: "#B88B61",
                    700: "#A5764B",
                    800: "#8D653F",
                    900: "#5F442B"
                  },
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-beige': '#FFFEFD', 
        'accent-7': '#333',
        'darkBG': '#222222',
        'success': '#0070f3',
        'cyan': '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
