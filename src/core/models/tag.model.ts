export interface Tag {
  id: number
  title: string
}

export interface TagSearch {
  id?: number
  title?: string
}

export type TagUpdateDto = Omit<Partial<Tag>, 'id'>
