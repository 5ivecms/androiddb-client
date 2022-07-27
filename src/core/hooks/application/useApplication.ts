import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ApplicationService } from '../../services/application.service'

export const useApplications = () => {
  const queryData = useQuery(['applications list'], () => ApplicationService.findAll(), {
    select: ({ data }) => {
      return data
    },
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
  })

  return useMemo(() => ({ ...queryData }), [queryData])
}
