<template>
  <div>
    <div class="flex items-center">
      <div class="w-1/4">
        <a :href="item.url" target="_blank" class="cursor-pointer">
          <img :src="require(`@/assets/images/${item.path}`)" :alt="item.path" :title="item.name" class="w-full rounded-md">
        </a>
      </div>
      <div class="ml-5 flex flex-col w-3/4">
        <h4 class="font-bold text-xl md:tracking-wider">
          {{ item.position }}
        </h4>
        <p class="font-semibold text-sm">
          {{ item.name }}
        </p>
        <span class="text-sm">{{ item.startDate }} - {{ item.endDate }}</span>
        <span class="text-sm">{{ item.location }}</span>
      </div>
    </div>
    <div v-if="type == 'job'" class="pt-3 text-base">
      <p>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>
