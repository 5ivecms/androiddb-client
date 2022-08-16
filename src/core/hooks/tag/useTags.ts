import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { TagSearch } from '../../models/tag.model'
import { TagService } from '../../services'
import { Order } from '../../types'
import { useDebounce } from '../useDebounce'

export const useTags = () => {
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('id')
  const [search, setSearch] = useState<TagSearch>({})
  const debouncedSearch = useDebounce<TagSearch>(search, 500)

  const queryData = useQuery(
    ['tag list', page, order, orderBy, debouncedSearch],
    () => TagService.search({ page, order, orderBy, search: debouncedSearch }),
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
