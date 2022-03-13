<template>
  <div>
    {{ post.title }}

    <nuxt-content class="mt-4 prose dark:prose-dark max-w-none" :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content(`articles/${params.slug}`).fetch()
    return { post }
  }
}
</script>
