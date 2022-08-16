import { Application } from './application.model'

export interface Category {
  id: number
  title: string
  children: Category[]
  parent?: Category
  applications?: Application
}

export interface CategorySearch {
  id?: number
  title?: string
}

export interface CategoryUpdateDto {
  title: string
}
