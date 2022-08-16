import { useCallback, useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { developerBrowseRoutes } from '../../config/browse-routes.config'
import { DeveloperUpdateDto } from '../../models/developer.model'
import { DeveloperService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

export const useDeveloperEdit = (setValue: UseFormSetValue<DeveloperUpdateDto>) => {
  const navigate = useNavigate()
  const params = useParams()
  const { developerId } = params

  const queryData = useQuery(['developer edit', developerId], () => DeveloperService.findOne(Number(developerId)), {
    select: ({ data }) => data,
    onSuccess: (data) => {
      getKeys(data).forEach((key) => {
        if (key === 'id' || key === 'applications') return
        setValue(key, data[key])
      })
    },
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
  })

  const { mutateAsync } = useMutation(
    'update developer',
    (data: DeveloperUpdateDto) => DeveloperService.update(Number(developerId), data),
    {
      onError: (error) => {
        console.log(JSON.stringify(error))
      },
      onSuccess: () => {
        navigate(developerBrowseRoutes.index())
        console.log('разработчик обновлен')
      },
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
