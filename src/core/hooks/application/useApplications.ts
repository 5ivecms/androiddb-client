import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { ApplicationService } from '../../services/application.service'
import { Order, Search } from '../../types'
import { useDebounce } from '../useDebounce'

export const useApplications = () => {
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('id')
  const [search, setSearch] = useState<Search>({})
  const debouncedSearch = useDebounce<Search>(search, 500)

  const queryData = useQuery(
    ['applications list', page, order, orderBy, debouncedSearch],
    () => ApplicationService.search({ page, order, orderBy, search: debouncedSearch }),
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.log(JSON.stringify(error))
      },
      keepPreviousData: true,
    }
  )

  return useMemo(
    () => ({ ...queryData, page, setPage, order, setOrder, orderBy, setOrderBy, search, setSearch }),
    [queryData, page, setPage, order, setOrder, orderBy, setOrderBy, search, setSearch]
  )
}
