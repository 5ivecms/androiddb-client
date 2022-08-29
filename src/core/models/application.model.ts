import type { Category } from './category.model'
import type { Developer } from './developer.model'
import type { Screenshot } from './screenshot.model'

export interface Application {
  applicationVersions?: any
  categories?: Category[]
  description: string
  developer?: Developer
  googlePlayUrl: string
  id: number
  lang: string
  parsingStatus: number
  pdalifeUrl: string
  screenshots?: Screenshot[]
  shortDescription: string
  tags?: any
  thumb: string
  title: string
}

export interface ApplicationSearch {
  id?: number
  title?: string
}

export interface ApplicationUpdateDto {
  categoryIds: number[]
  description: string
  developerId: number
  googlePlayUrl: string
  lang: string
  parsingStatus: number
  pdalifeUrl: string
  screenshotIds: number[]
  shortDescription: string
  tagIds: number[]
  thumb: string
  title: string
}
