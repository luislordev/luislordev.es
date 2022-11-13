<template>
  <div class="dark:text-white">
    <Header />
    <nuxt class="px-5" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/footer.vue'
import Header from '~/components/common/header.vue'
export default {
  components: { Header, Footer },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://luislordev.es' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style>

</style>
