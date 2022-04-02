<template>
  <section class="container mx-auto">
    <div class="py-4">
      <h3 class="text-3xl font-semibold">
        Sobre mí
      </h3>
    </div>
    <div class="py-7">
      <h4 class="text-xl text-center">
        <b>¡Hola!</b> Me llamo Luis Lorenzo. Soy Full Stack Developer.
      </h4>
    </div>
    <div class="text-lg flex flex-grow flex-col space-y-9">
      <p>
        Nací en un gélido mes de enero allá por 1997 en Madrid. Estudié un FP de Grado Superior Desarrollo de Aplicaciones
        Multiplataforma en la Universidad Francisco de Vitoria. Actualmente trabajo como desarrollador web en el mundo de
        consultoria en el cual tengo más de 4 años de experiencía.
      </p>
      <p>
        Me considero una persona curiosa por ello intento mantenerme siempre al día en las tecnolgias con las que trabajo
        y siempre estoy dispuesto a aprender algo nuevo y afrontar nuevas metas o retos que me encuentre por el camino <span>#ThisIsTheWay</span>
      </p>

      <div>
        <h3 class="text-3xl text-center font-semibold">
          Mi stack principal
        </h3>

        <div class="py-5">
          <skill />
        </div>

        <div class="flex flex-col lg:flex-row md:space-x-4 flex-grow  mt-3">
          <div class="lg:w-1/2 ">
            <h3 class="text-3xl text-center font-semibold">
              Experiencia
            </h3>
            <div v-for="job in jobs" :key="job.name" class="p2 m-3">
              <expirence-card :item="job" type="job" />
            </div>
          </div>
          <div class="lg:w-1/2 ">
            <h3 class="text-3xl text-center font-semibold">
              Educación
            </h3>
            <div v-for="study in studies" :key="study.name" class="p2 m-3">
              <expirence-card :item="study" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          Pero no todo en la vida va a ser programar también tengo otros hobbies (algunos de ellos muy frikis) siempre que tengo
          hueco me gusta jugar algún videojuego, leer un buen libro de ciencia ficción o practicar tiro con arco pero si hay algo
          que me gusta por encima de todo (incluso la informática) es Star Wars, es que soy muy friki de esta saga y para muestra
          un botón
        </p>

        <div class="p-5">
          <img src="https://res.cloudinary.com/dmqgdno4p/image/upload/v1647648008/Blog/501st_utim7c.webp" alt="501st" title="501st" class="rounded-lg mx-auto">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExpirenceCard from '~/components/aboutMe/expirenceCard.vue'
import skill from '~/components/aboutMe/skill.vue'
import { JOBS } from '@/constants/jobs'
import { STUDIES } from '@/constants/studies'
export default {
  name: 'AboutMe',
  components: { skill, ExpirenceCard },
  head () {
    return {
      title: 'LuisLorDev | Sobre mí',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Descripción sobre mí, mi stack tecnológico, experiencia laboral y un poco sobre mis hobbies'
        }
      ]
    }
  },
  computed: {
    jobs () {
      return JOBS
    },
    studies () {
      return STUDIES
    }
  }
}

</script>

<style>

</style>
