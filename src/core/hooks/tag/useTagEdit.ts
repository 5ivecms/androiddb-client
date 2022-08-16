import { useCallback, useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { tagBrowseRoutes } from '../../config/browse-routes.config'
import { TagUpdateDto } from '../../models/tag.model'
import { TagService } from '../../services'
import { getKeys } from '../../utils/object/get-keys'

export const useTagEdit = (setValue: UseFormSetValue<TagUpdateDto>) => {
  const params = useParams()
  const { tagId } = params
  const navigate = useNavigate()

  const queryData = useQuery(['tag edit', tagId], () => TagService.findOne(Number(tagId)), {
    select: ({ data }) => data,
    onSuccess: (data) => {
      getKeys(data).forEach((key) => {
        if (key === 'id') return
        setValue(key, data[key])
      })
    },
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
    enabled: !!tagId,
    keepPreviousData: false,
  })

  const { mutateAsync } = useMutation('update tag', (data: TagUpdateDto) => TagService.update(Number(tagId), data), {
    onError: (error) => {
      console.log(JSON.stringify(error))
    },
    onSuccess: () => {
      console.log('тег обновлен')
    },
  })

  const onSubmit: SubmitHandler<TagUpdateDto> = useCallback(
    async (data) => {
      await mutateAsync(data)
      navigate(tagBrowseRoutes.index())
    },
    [mutateAsync, navigate]
  )

  return useMemo(() => ({ onSubmit, ...queryData }), [onSubmit, queryData])
}
