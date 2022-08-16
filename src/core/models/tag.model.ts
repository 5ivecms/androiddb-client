export interface Tag {
  id: number
  title: string
}

export interface TagSearch {
  id?: number
  title?: string
}

export interface TagUpdateDto extends Omit<Partial<Tag>, 'id'> {}
