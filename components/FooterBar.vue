<template>
  <footer class="py-5">
    <div class="p-5 flex flex-col md:flex-row justify-around items-center">
      <p class="font-mono items-center text-sm md:text-base">
        {{ year }} | Hecho con
        <Icon
          name="tabler:heart"
          class="text-red-500 text-3xl"
        />
        por <span class="text-gray-400">LuisLorDev</span>
      </p>
      <div class="mt-5 md:mt-0">
        <a
          v-for="social in socialsNetwork"
          :key="social.name"
          :href="social.url"
          target="_blank"
          :aria-label="social.name"
          class="ml-3 p-3 cursor-pointer"
        >
          <Icon
            :name="social.icon"
            class="text-3xl text-orange-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-orange-500 duration-150"
          />
        </a>
      </div>
    </div>
    <div class="px-5 pt-5 pb-10 flex flex-col md:flex-row justify-center items-center">
      <nuxt-link
        to="/privacy"
        class="mb-3 md:mb-0 md:mr-10"
      >
        Política de privacidad
      </nuxt-link>
      <nuxt-link to="/cookies">
        Política de cookies
      </nuxt-link>
    </div>
  </footer>
</template>

<script setup lang="ts"> 
const  year = new Date().getFullYear()
const  socialsNetwork = [
          { name: 'linkedin', icon: 'tabler:brand-linkedin', url: 'https://www.linkedin.com/in/luis-lorenzo-cuadrado-13b000143' },
          { name: 'instagram', icon: 'tabler:brand-instagram', url: 'https://www.instagram.com/luislor.dev/' },
          { name: 'twitter', icon: 'tabler:brand-twitter', url: 'https://twitter.com/luislordev' },
          { name: 'github', icon: 'tabler:brand-github', url: 'https://github.com/luislordev' }
        ]
</script>