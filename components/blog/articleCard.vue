<template>
  <article class="border-0 border-orange-400 rounded-xl px-3 py-2">
    <h4 class="text-2xl font-semibold">
      {{ post.title }}
    </h4>
    <div>
      <div>
        📅 {{ formatDate }}
      </div>
    </div>
    <div class="mt-3">
      {{ post.description }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    post: {
      type: Object,
      required: true
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

<style>

</style>
