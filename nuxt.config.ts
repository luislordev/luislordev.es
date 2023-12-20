// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  components: [
    {
      path: '@/components',
     pathPrefix: false,
    },
  ],
  css:[
    '@/assets/css/main.css'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark',
  },
  vite: {
    plugins: [
      eslintPlugin(),
      svgLoader()
    ]
  },
})
