export default {
  // Target: https://go.nuxtjs.dev/confitarget
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LuisLorDev | Web y blog personal',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Soy  Luis Lorenzo, soy programador web desde hace más de 4 años. Esta es mi web personal en ella encontrarás  más cosas sobre mí, los lugares donde he trabajado, mi stack tecnológico y también una sección de blog en el que hay artículos sobre programación y otros temas' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'url', content: 'https://luislordev.es' },
      { name: 'canonical', content: 'https://luislordev.es' },
      { name: 'author', content: 'Luis Lorenzo Cuadrado' },
      { name: 'robots', content: 'index,follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://github.com/antonreshetov/vue-unicons
    { src: '~/plugins/vue-unicons', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // Google Analytics
    '@nuxtjs/google-analytics',
    // Custom router generator
    '@/modules/sitemapRouteGenerator'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap' // Siempre tiene que estar en ultima posición
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Color mode
  colorMode: {
    prefence: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  tailwindcss: {
    exposeConfig: true
  },

  // Config nuxt-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Sitemap config
  sitemap: {
    hostname: process.env.BASE_URL || 'https://luislordev.es',
    gzip: true
  },

  // Robots config
  robots: {
    Allow: '/',
    Host: process.env.BASE_URL || 'https://luislordev.es',
    sitemap: `${process.env.BASE_URL || 'https://luislordev.es'}/sitemap.xml`
  }
}
