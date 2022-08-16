import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { DeveloperSearch } from '../../models/developer.model'
import { DeveloperService } from '../../services'
import { Order } from '../../types'
import { useDebounce } from '../useDebounce'

export const useDevelopers = () => {
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('id')
  const [search, setSearch] = useState<DeveloperSearch>({} as DeveloperSearch)
  const debouncedSearch = useDebounce<DeveloperSearch>(search, 500)

  const queryData = useQuery(
    ['developers list', page, order, orderBy, debouncedSearch],
    () => DeveloperService.search({ page, order, orderBy, search: debouncedSearch }),
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.log(JSON.stringify(error))
      },
    }
  )

  return useMemo(
    () => ({ ...queryData, page, setPage, order, setOrder, orderBy, setOrderBy, search, setSearch }),
    [queryData, page, setPage, order, setOrder, orderBy, setOrderBy, search, setSearch]
  )
}
