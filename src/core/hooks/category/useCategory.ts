import { useMemo } from 'react'
import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import type { Category } from '../../models'
import { CategoryService } from '../../services'

export const useCategory = (): UseQueryResult<Category> => {
  const params = useParams()
  const { categoryId } = params

  const queryData = useQuery(
    ['category', categoryId],
    () => CategoryService.findOne(Number(categoryId)),
    {
      enabled: Boolean(categoryId),
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      select: ({ data }) => data
    }
  )

  return useMemo(() => ({ ...queryData }), [queryData])
}
