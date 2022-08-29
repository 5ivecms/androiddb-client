import { useSnackbar } from 'notistack'
import { useCallback, useMemo } from 'react'
import type { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import type { UseQueryResult } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { categoryBrowseRoutes } from '../../config/browse-routes.config'
import type { Category, CategoryUpdateDto } from '../../models'
import { CategoryService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

type UseCategoryEdit = UseQueryResult<Category> & {
  onSubmit: SubmitHandler<CategoryUpdateDto>
}

export const useCategoryEdit = (
  setValue: UseFormSetValue<CategoryUpdateDto>
): UseCategoryEdit => {
  const params = useParams()
  const { categoryId } = params
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const queryData = useQuery(
    ['category edit', categoryId],
    () => CategoryService.findOne(Number(categoryId)),
    {
      enabled: Boolean(categoryId),
      keepPreviousData: false,
      onError: (error) => {
        console.error(JSON.stringify(error))
      },
      onSuccess: (data) => {
        getKeys(data).forEach((key) => {
          if (
            key === 'id' ||
            key === 'parent' ||
            key === 'children' ||
            key === 'applications'
          ) {
            return
          }
          setValue(key, data[key])
        })
      },
      select: ({ data }: { data: Category }): Category => data
    }
  )

  const { mutateAsync } = useMutation(
    'update category',
    (data: CategoryUpdateDto) =>
      CategoryService.update(Number(categoryId), data),
    {
      onError: (error) => {
        console.error(JSON.stringify(error))
        enqueueSnackbar('При обновлении категории произошла ошибка', {
          variant: 'error'
        })
      },
      onSuccess: () => {
        enqueueSnackbar('Категория обновлена', { variant: 'success' })
      }
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
