import { useMemo, useState } from 'react'
import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'

import type { Application } from '../../models'
import { ApplicationService } from '../../services'
import type { FindAllResponse } from '../../types'
import type { Order, Search, SearchOptions } from '../../types/search-options'
import { useDebounce } from '../useDebounce'

type UseApplications = SearchOptions &
  UseQueryResult<FindAllResponse<Application>>

export const useApplications = (): UseApplications => {
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('id')
  const [search, setSearch] = useState<Search>({})
  const debouncedSearch = useDebounce<Search>(search, 500)

  const queryData = useQuery(
    ['applications list', page, order, orderBy, debouncedSearch],
    () =>
      ApplicationService.search({
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
