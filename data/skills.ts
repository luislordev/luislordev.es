import type { Skill } from '@/types'

import NuxtLogo from '@/assets/images/svg/nuxt.svg?component'
import vue from '@/assets/images/svg/vue.svg?component'
import git from '@/assets/images/svg/git.svg?component'
import grails from '@/assets/images/svg/grails.svg?component'
import java from '@/assets/images/svg/java.svg?component'
import spring from '@/assets/images/svg/spring.svg?component'
import tailwind from '@/assets/images/svg/tailwindcss.svg?component'
import html from '@/assets/images/svg/html.svg?component'
import css from '@/assets/images/svg/css.svg?component'
import javaScript from '@/assets/images/svg/javaScript.svg?component'

export const SKILLS: Skill[] = [
  {
    name: 'NuxtJS',
    logo: NuxtLogo
  },
  {
    name: 'VueJS',
    logo: vue
  },
  {
    name: 'JavaScript',
    logo: javaScript
  },
  {
    name: 'HTML',
    logo: html
  },
  {
    name: 'CSS',
    logo: css
  },
  {
    name: 'Git',
    logo: git
  },
  {
    name: 'Grails',
    logo: grails
  },
  {
    name: 'Java',
    logo: java
  },
  {
    name: 'Spring',
    logo: spring
  },
  {
    name: 'Tailwind',
    logo: tailwind
  }
]
