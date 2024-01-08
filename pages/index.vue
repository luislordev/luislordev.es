<template>
  <div class="container mx-auto px-3 md:px-0">
    <section
      class="flex flex-col-reverse   md:flex-row justify-around items-center h-screen-without-header md:minus-4rem"
    >
      <div class="font-semibold text-7xl space-y-4 mt-5 md:mt-0 text-center md:text-left">
        <h1 class="text-orange-400">
          ¡Hola!
        </h1>
        <h1 class="text-gray-900 dark:text-white">
          Soy Luis Lorenzo,
        </h1>
        <h1 class="text-orange-400">
          Full Stack Developer
        </h1>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dmqgdno4p/image/upload/v1647646802/Blog/yo_jxeqii.webp"
          alt="foto perfil"
          title="yo"
          class="h-64 w-64 md:h-96 md:w-96 object-cover border-8 border-orange-400 rounded-3xl"
        >
      </div>
    </section>
    <section class="flex justify-center py-16">
      <div class="px-5 text-xl text-center">
        <h3 class="text-4xl font-semibold">
          ¿Quieres saber más?
        </h3>
        <div class="p-5 flex flex-col md:flex-row justify-around">
          <nuxt-link
            to="/about"
            class="px-4 py-2 rounded-2xl bg-orange-400 text-white font-semibold hover:bg-orange-500"
          >
            Saber más
          </nuxt-link>
          <a
            href="/cv/Luis_Lorenzo_CV.pdf"
            target="_blank"
            class="px-4 py-2 mt-4 md:mt-0 border-2 rounded-2xl border-orange-400 hover:bg-orange-400 hover:text-white font-semibold"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
    <section>
      <h3 class="text-3xl font-semibold">
        Útimos artículos
      </h3>
    </section>
    <section class="mt-4">
      <div
        v-if="posts"
        class="flex flex-wrap  justify-center"
      >
        <div
          v-for="post in posts"
          :key="post._id"
          class="w-full md:w-1/2 lg:w-1/3 md:pr-3 pb-3"
        >
          <nuxt-link :to="`${post._path}`">
            <ArticleCard
              :post="post"
              class="cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-2"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types'

const { data: posts } = await useAsyncData('articles', () => queryContent<BlogPost>('blog')
  .limit(3)
  .sort({ createdAt: -1 })
  .find())
</script>

<style scoped>
.h-screen-without-header {
  min-height: calc(100vh - 4rem);
}

.minus-4rem {
  margin-top: -4rem;
}
</style>
