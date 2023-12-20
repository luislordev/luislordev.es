<template>
  <section class="container mx-auto px-5">
    <div class="py-4">
      <h3 class="text-3xl font-semibold">
        Sobre mí
      </h3>
    </div>
    <div class="text-lg flex flex-grow flex-col space-y-9">
      <p>
        Empecé en el mundo de la programación allá por 2016, estudiando el FP de Grado Superior en Desarrollo de Aplicaciones Multiplataforma en la Universidad Francisco de Vitoria. Actualmente, trabajo desarrollando aplicaciones web de manera remota desde Madrid.
      </p>
      <p>
        Me considero una persona curiosa, por lo cual intento mantenerme siempre al día en las tecnologías con las que trabajo y estoy siempre dispuesto a aprender algo nuevo y afrontar nuevas metas o retos que encuentre en el camino.<span class="italic">#ThisIsTheWay</span>
      </p>
      <div>
        <h3 class="text-3xl text-center font-semibold">
          Mi stack principal
        </h3>
        <div class="py-5">
          <SkillCard />
        </div>
        <div class="flex flex-col lg:flex-row md:space-x-4 flex-grow  mt-3">
          <div class="lg:w-1/2 ">
            <h3 class="text-3xl text-center font-semibold">
              Experiencía
            </h3>
            <div
              v-for="job in jobs"
              :key="job.name"
              class="p2 m-3"
            >
              <ExperienceCard
                :item="job"
                type="job"
              />
            </div>
          </div>
          <div class="lg:w-1/2 ">
            <h3 class="text-3xl text-center font-semibold">
              Educación
            </h3>
            <div
              v-for="study in studies"
              :key="study.name"
              class="p2 m-3"
            >
              <ExperienceCard
                :item="study"
                type="job"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          A nivel más personal, entre mis aficiones está el tiro con arco; voy siempre que tengo tiempo. También soy un apasionado de los videojuegos y de la ciencia ficción, ya que ha marcado gran parte de mi vida desde que tengo memoria. Si tuviera que destacar alguna saga en concreto, esa sería Star Wars, sin lugar a dudas. Y, por último, quiero deciros que también participo como voluntario en la Legión 501, una asociación benéfica de Star Wars que nació con el propósito de manifestar la pasión por esta saga y aprovechó este potencial para ayudar en causas solidarias.
        </p>
        <div class="p-5">
          <img
            src="https://res.cloudinary.com/dmqgdno4p/image/upload/v1647648008/Blog/501st_utim7c.webp"
            alt="501st"
            title="501st"
            class="rounded-lg mx-auto"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {JOBS, STUDIES} from '@/data/experience'

const jobs = computed(()=> JOBS)
const studies = computed(()=> STUDIES)
</script>