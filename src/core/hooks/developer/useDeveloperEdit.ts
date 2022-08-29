import { useCallback, useMemo } from 'react'
import type { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import type { UseQueryResult } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { developerBrowseRoutes } from '../../config/browse-routes.config'
import type {
  Developer,
  DeveloperUpdateDto
} from '../../models/developer.model'
import { DeveloperService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

type UseDeveloperEdit = UseQueryResult<Developer> & {
  onSubmit: SubmitHandler<DeveloperUpdateDto>
}

export const useDeveloperEdit = (
  setValue: UseFormSetValue<DeveloperUpdateDto>
): UseDeveloperEdit => {
  const navigate = useNavigate()
  const params = useParams()
  const { developerId } = params

  const queryData = useQuery(
    ['developer edit', developerId],
    () => DeveloperService.findOne(Number(developerId)),
    {
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      onSuccess: (data) => {
        setValue('name', data.name)
        getKeys(data).forEach((key) => {
          if (key === 'id' || key === 'applications') return
          setValue(key, data[key])
        })
      },
      select: ({ data }: { data: Developer }) => data
    }
  )

  const { mutateAsync } = useMutation(
    'update developer',
    (data: DeveloperUpdateDto) =>
      DeveloperService.update(Number(developerId), data),
    {
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      onSuccess: () => {
        navigate(developerBrowseRoutes.index())
      }
    }
  )

  const onSubmit: SubmitHandler<DeveloperUpdateDto> = useCallback(
    async (data) => {
      await mutateAsync(data)
    },
    [mutateAsync]
  )

  return useMemo(() => ({ onSubmit, ...queryData }), [queryData, onSubmit])
}
