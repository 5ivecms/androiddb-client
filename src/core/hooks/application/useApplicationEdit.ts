import { useSnackbar } from 'notistack'
import { useCallback, useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { ApplicationUpdateDto } from '../../models'
import { ApplicationService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

export const useApplicationEdit = (setValue: UseFormSetValue<ApplicationUpdateDto>) => {
  const params = useParams()
  const { applicationId } = params
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const queryData = useQuery(
    ['application edit', applicationId],
    () => ApplicationService.findOne(Number(applicationId)),
    {
      select: ({ data }) => data,
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
      onError: (error) => {
        console.log(JSON.stringify(error))
      },
      enabled: !!applicationId,
      keepPreviousData: false,
    }
  )

  const { mutateAsync } = useMutation(
    'update application',
    (data: ApplicationUpdateDto) => ApplicationService.update(Number(applicationId), data),
    {
      onSuccess: () => {
        enqueueSnackbar('Приложение обновлено', { variant: 'success' })
      },
      onError: (error) => {
        enqueueSnackbar('При обновлении приложения произошла ошибка', { variant: 'error' })
      },
    }
  )

  const onSubmit: SubmitHandler<ApplicationUpdateDto> = useCallback(async (data) => {
    console.log(data)
    //await mutateAsync(data)
    //navigate(applicationBrowseRoutes.index())
  }, [])

  return useMemo(() => ({ onSubmit, ...queryData }), [onSubmit, queryData])
}
