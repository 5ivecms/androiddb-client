import QueryString from 'qs'
import { axiosPublic } from '../api/api.instances'
import { tagsApiUrl } from '../config/api-routes.config'
import { Tag, TagSearch, TagUpdateDto } from '../models/tag.model'
import { FindAllResponse, SearchParams } from '../types'

export const TagService = {
  search: (params: SearchParams<TagSearch>) => {
    return axiosPublic.get<FindAllResponse<Tag>>(tagsApiUrl.search(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  findOne: (id: string | number) => {
    return axiosPublic.get<Tag>(tagsApiUrl.findOne(id))
  },

  update: (id: number, data: TagUpdateDto) => {
    return axiosPublic.patch(tagsApiUrl.update(id), data)
  },
}
