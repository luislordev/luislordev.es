<template>
  <div>
    Hello there
    <button @click="changeTheme('dark')">
      dark
    </button>
    <br>
    <button @click="changeTheme('light')">
      light
    </button>

    <div class="w-full border-2 p-5 dark:bg-red-500" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    changeTheme (theme) {
      this.$colorMode.preference = theme
    }
  }
}
</script>
