// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      charset:'utf-8',
    },
  },
  modules:[
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/robots',
    'nuxt-gtag'
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
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark',
  },
  content: {
    highlight:{
      theme:'one-dark-pro'
    },
    markdown:{
      anchorLinks:false
    }
  }, 
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  vite: {
    plugins: [
      eslintPlugin(),
      svgLoader()
    ]
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
