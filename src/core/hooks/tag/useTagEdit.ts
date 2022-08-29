import { useCallback, useMemo } from 'react'
import type { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import type { UseQueryResult } from 'react-query'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { tagBrowseRoutes } from '../../config/browse-routes.config'
import type { Tag, TagUpdateDto } from '../../models/tag.model'
import { TagService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

type UseTagEdit = UseQueryResult<Tag, unknown> & {
  onSubmit: SubmitHandler<TagUpdateDto>
}

export const useTagEdit = (
  setValue: UseFormSetValue<TagUpdateDto>
): UseTagEdit => {
  const params = useParams()
  const { tagId } = params
  const navigate = useNavigate()

  const queryData = useQuery(
    ['tag edit', tagId],
    () => TagService.findOne(Number(tagId)),
    {
      enabled: Boolean(tagId),
      keepPreviousData: false,
      onError: (error) => {
        console.info(JSON.stringify(error))
      },
      onSuccess: (data) => {
        getKeys(data).forEach((key) => {
          if (key === 'id') return
          setValue(key, data[key])
        })
      },
      select: ({ data }: { data: Tag }) => data
    }
  )

  const { mutateAsync } = useMutation(
    'update tag',
    (data: TagUpdateDto) => TagService.update(Number(tagId), data),
    {
      onError: (error) => {
        console.info(JSON.stringify(error))
      },
      onSuccess: () => {
        console.info('тег обновлен')
      }
    }
  )

  const onSubmit: SubmitHandler<TagUpdateDto> = useCallback(
    async (data) => {
      await mutateAsync(data)
      navigate(tagBrowseRoutes.index())
    },
    [mutateAsync, navigate]
  )

  return useMemo(() => ({ onSubmit, ...queryData }), [onSubmit, queryData])
}
