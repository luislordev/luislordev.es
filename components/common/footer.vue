<template>
  <footer class="py-5">
    <div class="p-5 flex flex-col md:flex-row justify-around items-center">
      <p class="font-mono items-center text-sm md:text-base">
        {{ new Date().getFullYear() }} | Hecho con
        <client-only>
          <unicon name="heart" fill="#f44336" />
        </client-only>

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
          <client-only>
            <unicon :name="social.icon" fill="#ffaa3b" hover-fill="#e7972f" />
          </client-only>
        </a>
      </div>
    </div>
    <div class="px-5 pt-5 pb-10 flex flex-col md:flex-row justify-center items-center">
      <nuxt-link to="/privacy" class="mb-3 md:mb-0 md:mr-10">
        Política de privacidad
      </nuxt-link>
      <nuxt-link to="/cookies">
        Política de cookies
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      socialsNetwork: [
        { name: 'linkedin', icon: 'linkedin-alt', url: 'https://www.linkedin.com/in/luis-lorenzo-cuadrado-13b000143' },
        { name: 'instagram', icon: 'instagram', url: 'https://www.instagram.com/luislor.dev/' },
        { name: 'twitter', icon: 'twitter-alt', url: 'https://twitter.com/luislordev' },
        { name: 'github', icon: 'github-alt', url: 'https://github.com/luislordev' }
      ]
    }
  }
}
</script>
