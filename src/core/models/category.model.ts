import type { Application } from './application.model'

export interface Category {
  applications?: Application
  children: Category[]
  id: number
  parent?: Category
  title: string
}

export interface CategorySearch {
  id?: number
  title?: string
}

export interface CategoryUpdateDto {
  title: string
}
