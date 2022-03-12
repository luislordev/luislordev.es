<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content(`articles/${params.slug}`).fetch()
    return { post }
  }
}
</script>
