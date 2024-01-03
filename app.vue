<template>
  <div>
    <HeaderBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
const webTitle = 'LuisLorDev | Web y blog personal'
const webDescription = 'Programador web con más de 5 años de experiencia. Descubre mi perfil, experiencias laborales, stack tecnológico y blog en mi web personal.'
const webURL = 'https://luislordev.es'
const webImage = 'https://res.cloudinary.com/dmqgdno4p/image/upload/v1668784378/Blog/imageOpenGraph_se4jtg.png'

useHead({
  htmlAttrs: {
    lang: 'es',
  },
  title: webTitle,
  titleTemplate: title => title !== webTitle
    ? `${title} | LuisLorDev`
    : webTitle,
  meta: [
    { name: 'description', content: webDescription },
    { name: 'author', content: 'Luis Lorenzo Cuadrado' },
    // https://socialsharepreview.com for test
    { property: 'og:title', content: webTitle },
    { property: 'og:description', content: webDescription },
    { property: 'og:url', content: webURL },
    { property: 'og:site_name', content: webURL },
    { property: 'og:image', content: webImage },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:site', content: '@luislordev' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: webURL },
    { name: 'twitter:title', content: webTitle },
    { name: 'twitter:description', content: webDescription },
    { name: 'twitter:image', content: webImage },

  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'canonical',
      href: webURL,
    },
  ],
})
</script>