import QueryString from 'qs'
import { axiosPublic } from '../api/api.instances'
import { developerApiUrl } from '../config/api-routes.config'
import { Developer, DeveloperSearch, DeveloperUpdateDto } from '../models/developer.model'
import { FindAllResponse, SearchParams } from '../types'

export const DeveloperService = {
  search: (params: SearchParams<DeveloperSearch> = {}) => {
    return axiosPublic.get<FindAllResponse<Developer>>(developerApiUrl.search(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  findOne: (id: string | number) => {
    return axiosPublic.get<Developer>(developerApiUrl.findOne(id))
  },

  update: (id: number, data: DeveloperUpdateDto) => {
    return axiosPublic.patch(developerApiUrl.update(id), data)
  },
}
