<template>
  <header>
    <div class="p-5 items-center flex flex-col md:flex-row justify-around">
      <nuxt-link to="/" class="flex font-medium items-center mb-4 md:mb-0">
        <img src="@/assets/images/logo.png" alt="logo" title="logo" class="h-16 rounded-full">

        <span class="font-bold text-4xl ml-3 text-gray-600 dark:text-white tracking-wider">LUISLOR<span class="text-3xl font-extrabold text-orange-400">DEV</span></span>
      </nuxt-link>
      <nav class="flex flex-row items-center">
        <nuxt-link class="mr-5 text-xl" to="/">
          Inicio
        </nuxt-link>
        <nuxt-link class="mr-5 text-xl" to="/aboutMe">
          Sobre mi
        </nuxt-link>
        <nuxt-link class="mr-5 text-xl" to="/blog">
          Blog
        </nuxt-link>
        <div>
          <theme-switcher />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import themeSwitcher from './themeSwitcher.vue'
export default {
  name: 'Header',
  components: { themeSwitcher }

}
</script>

<style scoped>

a.nuxt-link-active {
  font-weight: bold;
}

a.nuxt-link-exact-active {
  color: var(--color-primary);
}
</style>
