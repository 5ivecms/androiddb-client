import { useSnackbar } from 'notistack'
import { useCallback, useMemo } from 'react'
import type { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import type { UseQueryResult } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import type { Application, ApplicationUpdateDto } from '../../models'
import { ApplicationService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

type UseApplicationEdit = UseQueryResult<Application> & {
  onSubmit: SubmitHandler<ApplicationUpdateDto>
}

export const useApplicationEdit = (
  setValue: UseFormSetValue<ApplicationUpdateDto>
): UseApplicationEdit => {
  const params = useParams()
  const { applicationId } = params
  const { enqueueSnackbar } = useSnackbar()

  const queryData = useQuery(
    ['application edit', applicationId],
    () => ApplicationService.findOne(Number(applicationId)),
    {
      enabled: Boolean(applicationId),
      keepPreviousData: false,
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      onSuccess: (data) => {
        getKeys(data).forEach((key) => {
          if (
            key === 'id' ||
            key === 'developer' ||
            key === 'categories' ||
            key === 'tags' ||
            key === 'screenshots' ||
            key === 'applicationVersions'
          ) {
            return
          }
          setValue(key, data[key])
        })
      },
      select: ({ data }: { data: Application }) => data
    }
  )

  const { mutateAsync } = useMutation(
    'update application',
    (data: ApplicationUpdateDto) =>
      ApplicationService.update(Number(applicationId), data),
    {
      onError: () => {
        enqueueSnackbar('При обновлении приложения произошла ошибка', {
          variant: 'error'
        })
      },
      onSuccess: () => {
        enqueueSnackbar('Приложение обновлено', { variant: 'success' })
      }
    }
  )

  const onSubmit: SubmitHandler<ApplicationUpdateDto> = useCallback(
    async (data) => {
      await mutateAsync(data)
      // navigate(applicationBrowseRoutes.index())
    },
    [mutateAsync]
  )

  return useMemo(() => ({ onSubmit, ...queryData }), [onSubmit, queryData])
}
