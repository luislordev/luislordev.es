<template>
  <article
    class="rounded-xl px-3 py-2 border-2 border-gray-700 dark:border-white hover:border-orange-400  dark:hover:border-orange-400"
  >
    <h4 class="text-2xl font-semibold">
      {{ post.title }}
    </h4>
    <div class="mt-3">
      <div>
        <span>📅 {{ formatDate }}</span> |
        <span>⌛️ {{ post.read }} minutos</span>
      </div>
      <div class="mt-3">
        {{ post.description }}
      </div>
    </div>
  </article>
</template>
  
<script setup lang="ts">
import type { BlogPost } from '@/types'


interface Props {
  post: BlogPost
}
const { post } = defineProps<Props>()

const formatDate = computed(() => {
  return new Date(post.createdAt).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>
  