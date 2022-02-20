<template>
  <div class="dark:text-white">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/footer.vue'
import Header from '~/components/common/header.vue'
export default {
  components: { Header, Footer }

}
</script>

<style>

</style>
