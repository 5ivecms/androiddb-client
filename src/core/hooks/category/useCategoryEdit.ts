import { useSnackbar } from 'notistack'
import { useCallback, useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryBrowseRoutes } from '../../config/browse-routes.config'
import { CategoryUpdateDto } from '../../models'
import { CategoryService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

export const useCategoryEdit = (setValue: UseFormSetValue<CategoryUpdateDto>) => {
  const params = useParams()
  const { categoryId } = params
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const queryData = useQuery(['category edit', categoryId], () => CategoryService.findOne(Number(categoryId)), {
    select: ({ data }) => data,
    onSuccess: (data) => {
      getKeys(data).forEach((key) => {
        if (key === 'id' || key === 'parent' || key === 'children' || key === 'applications') return
        setValue(key, data[key])
      })
    },
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
    enabled: !!categoryId,
    keepPreviousData: false,
  })

  const { mutateAsync } = useMutation(
    'update category',
    (data: CategoryUpdateDto) => CategoryService.update(Number(categoryId), data),
    {
      onSuccess: () => {
        enqueueSnackbar('Категория обновлена', { variant: 'success' })
      },
      onError: (error) => {
        console.log(JSON.stringify(error))
        enqueueSnackbar('При обновлении категории произошла ошибка', { variant: 'error' })
      },
    }
  )

  const onSubmit: SubmitHandler<CategoryUpdateDto> = useCallback(
    async (data) => {
      await mutateAsync(data)
      navigate(categoryBrowseRoutes.index())
    },
    [mutateAsync, navigate]
  )

  return useMemo(() => ({ ...queryData, onSubmit }), [queryData, onSubmit])
}
