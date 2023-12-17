<template>
  <div class="flex flex-wrap justify-around text-center">
    <div v-for="(skill, index) in skills" :key="index" class="p-2">
      <component :is="skill.logo" class=" w-16 h-16" />
      {{ skill.name }}
    </div>
  </div>
</template>

<script>
import { SKILLS } from '@/constants/skills'

export default {
  name: 'Skill',
  computed: {
    skills () {
      return SKILLS
    }
  }

}
</script>

<style>

</style>
