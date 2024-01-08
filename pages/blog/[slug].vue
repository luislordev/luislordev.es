<template>
  <section class="container mx-auto px-3">
    <div class="py-4">
      <h2 class="text-4xl font-semibold">
        {{ post?.title }}
      </h2>
    </div>
    <div class="py-3">
      <span>📅 {{ formatDate }}</span> |
      <span>⌛️ {{ post?.read }} minutos</span>
    </div>
    <div class="prose dark:prose-invert max-w-none mt-4 break-words">
      <ContentRenderer :value="post!" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types'

const { path } = useRoute()
const { data: post } = await useAsyncData('article',
  () => queryContent<BlogPost>('blog')
    .where({ _path: path })
    .findOne())

const articleTitle = post.value?.title || ''
const articleDescription = post.value?.description || ''
const articleImage = post.value?.image || 'https://res.cloudinary.com/dmqgdno4p/image/upload/v1668784378/Blog/imageOpenGraph_se4jtg.png'

useSeoMeta({
  title: articleTitle,
  description: articleDescription,
  ogTitle: articleTitle,
  ogDescription: articleDescription,
  ogUrl: 'https://luislordev.es',
  ogImage: articleImage,
  ogType: "website",
  twitterSite: '@luislordev',
  twitterCard: "summary_large_image",
  twitterTitle: articleTitle,
  twitterDescription: articleDescription,
  twitterImage: articleImage
})

const formatDate = computed(() => {
  const createdAt = post.value?.createdAt
  if (createdAt) {
    const dateObject = typeof createdAt === 'string' ? new Date(createdAt) : createdAt
    if (dateObject instanceof Date) {
      return dateObject.toLocaleDateString('es', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
  return ''
})

</script>