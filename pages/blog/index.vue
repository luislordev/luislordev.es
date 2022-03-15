<template>
  <div class="container mx-auto">
    <section class="py-4">
      <h3 class="text-3xl font-semibold">
        Articulos
      </h3>
    </section>
    <section class="flex flex-col space-y-4">
      <div v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`blog/${post.slug}`">
          <article-card :post="post" class="transition duration-500 ease-in-out transform hover:-translate-y-2" />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import articleCard from '~/components/common/articleCard.vue'
export default {
  name: 'Blog',
  components: { articleCard },
  async asyncData ({ $content }) {
    const posts = await $content('articles')
      .sortBy('createdAt', 'desc')
      .only(['title', 'tags', 'slug', 'createdAt', 'description', 'read'])
      .fetch()

    return {
      posts
    }
  }

}
</script>

<style scoped>
.prueba {
  @apply border-2 border-orange-400 translate-y-1 bg-red-500
}

</style>
