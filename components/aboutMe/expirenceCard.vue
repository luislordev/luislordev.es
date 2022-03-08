<template>
  <div>
    <div class="flex items-center">
      <div class="w-1/4">
        <img :src="require(`@/assets/images/jobs/${job.logo}`)" :alt="job.name" :title="job.name" class="w-full rounded-md">
      </div>
      <div class="ml-5 flex flex-col w-3/4">
        <h4 class="font-bold text-xl md:tracking-wider">
          {{ job.position }}
        </h4>
        <p class="font-semibold text-sm">
          {{ job.name }}
        </p>
        <span class="text-sm">{{ job.startDate }} - {{ job.endDate }}</span>
        <span class="text-sm">{{ job.location }}</span>
      </div>
    </div>
    <div class="pt-3 text-base">
      <p>
        {{ job.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    job: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>

</style>
