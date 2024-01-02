import type {Config} from 'tailwindcss'

const config: Config = {
  content:[],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config