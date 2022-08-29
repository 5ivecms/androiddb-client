import { useMemo } from 'react'
import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import type { Tag } from '../../models/tag.model'
import { TagService } from '../../services'

type UseTag = UseQueryResult<Tag, unknown>

export const useTag = (): UseTag => {
  const params = useParams()
  const { tagId } = params

  const queryData = useQuery(
    ['tag', tagId],
    () => TagService.findOne(Number(tagId)),
    {
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      select: ({ data }) => data
    }
  )

  return useMemo(() => ({ ...queryData }), [queryData])
}
