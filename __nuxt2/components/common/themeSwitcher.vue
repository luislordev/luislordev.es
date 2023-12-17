<template>
  <button
    class="sm:ml-6 p-2 shadow-sm rounded-lg
            cursor-pointer bg-gray-200 bg-opacity-90 dark:bg-opacity-20"
    name="themeSwicherButton"
    aria-label="themeSwicherButton"
    @click="changeTheme()"
  >
    <!-- Dark mode icon -->
    <svg
      v-if="$colorMode.value == 'light'"
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-700 hover:text-orange-400
              w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <!-- Light mode icon -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="text-gray-200 hover:text-orange-400 w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  methods: {
    changeTheme () {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }

}
</script>

<style>

</style>
