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

        <p>
          Pero no todo en la vida va a ser programar también tengo otros hobbies (algunos de ellos muy frikis) siempre que tengo
          hueco me gusta jugar algún videojuego, leer un buen libro de ciencia ficción o practicar tiro con arco pero si hay algo
          que me gusta por encima de todo (incluso la informática) es Star Wars y es que soy muy friki de esta saga.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import skill from '~/components/aboutMe/skill.vue'
export default {
  name: 'AboutMe',
  components: { skill },
  computed: {
    birthday () {
      const yearBirthday = new Date('1997-01-21')
      const today = new Date()

      let years = (today.getTime() - yearBirthday.getTime()) / 1000
      years /= (60 * 60 * 24)

      return Math.abs(Math.round(years / 365.25))
    }
  }

}
</script>

<style>

</style>
