<template>
  <div>
    <h1 class="text-7xl font-black text-center">
      New on the blog
    </h1>
    <div v-for="post in posts" :key="post.title">
      <h2 class="mt-2 text-3xl font-semibold">
        {{ post.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content }) {
    const posts = await $content('articles')
      .only(['title', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    console.log('posts', posts)
    return {
      posts
    }
  }

}
</script>

<style>

</style>
