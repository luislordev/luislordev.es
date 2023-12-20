import type { FunctionalComponent } from "vue";

export interface Experience {
  name: string,
  location: string,
  startDate: string,
  endDate: string,
  position: string,
  path: string,
  description?: string,
  url: string,
}

export interface Skill {
  name:string,
  logo:FunctionalComponent
}