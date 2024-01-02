import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types"
import type { FunctionalComponent } from "vue"

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
  name: string,
  logo: FunctionalComponent
}

export interface BlogPost extends MarkdownParsedContent {
  title: string
  description: string
  alt: string
  read: string
  createdAt: string
}
