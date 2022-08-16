import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { ApplicationService } from '../../services'

export const useApplication = () => {
  const params = useParams()
  const { applicationId } = params

  const queryData = useQuery(
    ['find one application', applicationId],
    () => ApplicationService.findOne(Number(applicationId)),
    {
      select: ({ data }) => data,
      onError: (error) => {
        console.log(JSON.stringify(error))
      },
    }
  )

  return useMemo(() => ({ ...queryData }), [queryData])
}
