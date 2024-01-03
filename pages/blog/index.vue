<template>
  <section class="container mx-auto px-3">
    <div class="py-4">
      <h3 class="text-3xl font-semibold">
        Artículos
      </h3>
    </div>
    <div class="flex flex-col space-y-4">
      <div
        v-for="post in posts"
        :key="post._id"
      >
        <nuxt-link :to="`${post._path}`">
          <ArticleCard
            :post="post"
            class="transition duration-500 ease-in-out transform hover:-translate-y-2"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { BlogPost } from '@/types'

useSeoMeta({
  title:'Blog',
  description:'Listado de todos mis artículos'
})

const { data: posts } = await useAsyncData('articles', () => queryContent<BlogPost>('blog')
  .sort({ createdAt: -1 })
  .find())
</script>