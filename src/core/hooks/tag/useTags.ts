import { useMemo, useState } from 'react'
import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import type { Tag } from '../../models/tag.model'
import { TagService } from '../../services'
import type { FindAllResponse } from '../../types'
import type { Order, Search, SearchOptions } from '../../types/search-options'
import { useDebounce } from '../useDebounce'

type UseTags = SearchOptions & UseQueryResult<FindAllResponse<Tag>>

export const useTags = (): UseTags => {
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('id')
  const [search, setSearch] = useState<Search>({})
  const debouncedSearch = useDebounce<Search>(search, 500)

  const queryData = useQuery(
    ['tag list', page, order, orderBy, debouncedSearch],
    () =>
      TagService.search({
        order,
        orderBy,
        page,
        search: debouncedSearch
      }),
    {
      keepPreviousData: true,
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      select: ({ data }) => data
    }
  )

  return useMemo(
    () => ({
      ...queryData,
      order,
      orderBy,
      page,
      search,
      setOrder,
      setOrderBy,
      setPage,
      setSearch
    }),
    [
      queryData,
      page,
      setPage,
      order,
      setOrder,
      orderBy,
      setOrderBy,
      search,
      setSearch
    ]
  )
}
