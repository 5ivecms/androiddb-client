import { useMemo } from 'react'
import type { UseQueryResult } from 'react-query'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import type { Application } from '../../models'
import { ApplicationService } from '../../services'

export const useApplication = (): UseQueryResult<Application> => {
  const params = useParams()
  const { applicationId } = params

  const queryData = useQuery(
    ['find one application', applicationId],
    () => ApplicationService.findOne(Number(applicationId)),
    {
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      select: ({ data }) => data
    }
  )

  return useMemo(() => ({ ...queryData }), [queryData])
}
