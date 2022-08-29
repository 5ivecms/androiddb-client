import type { Dispatch, SetStateAction } from 'react'

export type Order = 'asc' | 'desc'

export type Search = Record<string, string>

export interface SearchParams<S> {
  order?: Order
  orderBy?: string
  page?: number
  search?: S
}
export interface SearchOptions {
  order: Order
  orderBy: string
  page: number
  search: Search
  setOrder: Dispatch<SetStateAction<Order>>
  setOrderBy: Dispatch<SetStateAction<string>>
  setPage: Dispatch<SetStateAction<number>>
  setSearch: Dispatch<SetStateAction<Search>>
}
