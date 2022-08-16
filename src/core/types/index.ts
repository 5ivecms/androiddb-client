export type Order = 'asc' | 'desc'

export interface Search {
  [key: string]: string
}

export interface SearchParams<S> {
  page?: number
  order?: Order
  orderBy?: string
  search?: S
}

export interface FindAllResponse<I> {
  items: I[]
  total: number
  page: number
  limit: number
}
