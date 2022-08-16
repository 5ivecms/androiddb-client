import { Category } from './category.model'
import { Developer } from './developer.model'
import { Screenshot } from './screenshot.model'

export interface Application {
  id: number
  title: string
  thumb: string
  shortDescription: string
  description: string
  pdalifeUrl: string
  googlePlayUrl: string
  lang: string
  parsingStatus: number
  developer?: Developer
  categories?: Category[]
  tags?: any
  screenshots?: Screenshot[]
  applicationVersions?: any
}

export interface ApplicationSearch {
  id?: number
  title?: string
}

export interface ApplicationUpdateDto {
  title: string
  thumb: string
  description: string
  shortDescription: string
  pdalifeUrl: string
  lang: string
  parsingStatus: number
  googlePlayUrl: string
  developerId: number
  tagIds: number[]
  categoryIds: number[]
  screenshotIds: number[]
}
