<template>
  <div class="container mx-auto">
    <section class="py-4">
      <h2 class="text-4xl font-semibold">
        {{ post.title }}
      </h2>
      <div class="py-3">
        <span>📅 {{ formatDate }}</span> |
        <span>⌛️ {{ post.read }} minutos</span>
      </div>
    </section>

    <nuxt-content class="mt-4 prose dark:prose-dark max-w-none" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content(`articles/${params.slug}`).fetch()
    return { post }
  },
  head () {
    return {
      title: `LuisLorDev | ${this.post.title}`
    }
  },
  computed: {
    formatDate () {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(this.post.createdAt).toLocaleDateString('es', options)
    }
  }
}
</script>
