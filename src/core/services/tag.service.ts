import type { AxiosResponse } from 'axios'
import QueryString from 'qs'

import { axiosPublic } from '../api/api.instances'
import { tagsApiUrl } from '../config/api-routes.config'
import type { Tag, TagSearch, TagUpdateDto } from '../models/tag.model'
import type { FindAllResponse } from '../types'
import type { SearchParams } from '../types/search-options'

export const TagService = {
  findOne: (id: number): Promise<AxiosResponse<Tag>> => {
    return axiosPublic.get<Tag>(tagsApiUrl.findOne(id))
  },

  search: (
    params: SearchParams<TagSearch>
  ): Promise<AxiosResponse<FindAllResponse<Tag>>> => {
    return axiosPublic.get<FindAllResponse<Tag>>(tagsApiUrl.search(), {
      params,
      paramsSerializer: () => QueryString.stringify(params)
    })
  },

  update: (id: number, data: TagUpdateDto): Promise<AxiosResponse<Tag>> => {
    return axiosPublic.patch(tagsApiUrl.update(id), data)
  }
}
