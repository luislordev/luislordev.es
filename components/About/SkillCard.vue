<template>
  <div class="flex flex-wrap justify-around text-center">
    <div
      v-for="(skill, index) in skills"
      :key="index"
      class="p-2"
    >
      <div class="flex flex-col items-center">
        <component
          :is="skill.logo"
          class=" w-16 h-16"
        />
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import {SKILLS} from '@/data/skills'
import type { Skill } from '~/types'

const skills = computed<Skill[]>(()=> SKILLS)
</script>