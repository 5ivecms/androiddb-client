import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CategoryService } from '../../services'

export const useCategory = () => {
  const params = useParams()
  const { categoryId } = params

  const queryData = useQuery(['category', categoryId], () => CategoryService.findOne(Number(categoryId)), {
    select: ({ data }) => data,
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
    onSuccess: () => {
      console.log('Получили категорию')
    },
  })

  return useMemo(() => ({ ...queryData }), [queryData])
}
