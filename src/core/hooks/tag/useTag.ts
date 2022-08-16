import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { TagService } from '../../services'

export const useTag = () => {
  const params = useParams()
  const { tagId } = params

  const queryData = useQuery(['tag', tagId], () => TagService.findOne(Number(tagId)), {
    select: ({ data }) => data,
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
    onSuccess: () => {
      console.log('Тег получен')
    },
  })

  return useMemo(() => ({ ...queryData }), [queryData])
}
