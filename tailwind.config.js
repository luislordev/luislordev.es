module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aquamarine: {
          50: '#3fc6ba',
          100: '#35bcb0',
          200: '#2bb2a6',
          300: '#21a89c',
          400: '#179e92',
          500: '#0d9488',
          600: '#038a7e',
          700: '#008074',
          800: '#00766a',
          900: '#006c60'
        },
        customBlue: {
          50: '#70a1ff',
          100: '#6697fb',
          200: '#5c8df1',
          300: '#5283e7',
          400: '#4879dd',
          500: '#3e6fd3',
          600: '#3465c9',
          700: '#2a5bbf',
          800: '#2051b5',
          900: '#1647ab'
        },
        orange: {
          50: '#ffecd2',
          100: '#ffdcac',
          200: '#ffcb87',
          300: '#ffbb61',
          400: '#ffaa3b',
          500: '#e7972f',
          600: '#cf8523',
          700: '#b77218',
          800: '#9f600c',
          900: '#874d00'
        }
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    }
  },
  variants: {
    extend: {
      typography: ['dark'],
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
