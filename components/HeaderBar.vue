
import type { ThemeSelector } from '#build/components';
<template>
  <header>
    <div class="p-5 items-center flex flex-col md:flex-row justify-around">
      <nuxt-link
        to="/"
        class="flex font-medium items-center mb-4 md:mb-0"
      >
        <img
          :src="getImage"
          alt="logo"
          title="logo"
          class="h-16 rounded-full"
          height="64"
          width="64"
        >
        <span class="font-bold text-4xl ml-3 tracking-wider">
          LUISLOR
          <span class="text-3xl font-extrabold text-orange-400">
            DEV
          </span>
        </span>
      </nuxt-link>
      <nav class="flex flex-row items-center font-semibold">
        <nuxt-link
          class="mr-5 text-xl"
          to="/"
        >
          Inicio
        </nuxt-link>
        <nuxt-link
          class="mr-5 text-xl"
          to="/about"
        >
          Sobre mí
        </nuxt-link>
        <nuxt-link
          class="mr-5 text-xl"
          to="/"
        >
          Blog
        </nuxt-link>
        <!-- <nuxt-link
          class="mr-5 text-xl"
          to="/blog"
        >
          Blog
        </nuxt-link> -->
        <div>
          <ThemeSelector />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const getImage = computed(() => {
  return colorMode.preference === 'light'
    ? 'https://res.cloudinary.com/dmqgdno4p/image/upload/v1653589215/Blog/LogoClaro_ebtens.webp'
    : 'https://res.cloudinary.com/dmqgdno4p/image/upload/v1653589215/Blog/LogoOscuro_nbkprl.webp'
})
</script>
  
<style scoped>
nav > a.router-link-active {
  @apply font-extrabold;
}

nav > a.router-link-exact-active {
  color: var(--color-primary);
}
</style>