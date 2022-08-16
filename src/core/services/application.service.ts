import QueryString from 'qs'
import { axiosPublic } from '../api/api.instances'
import { applicationsApiUrl } from '../config/api-routes.config'
import { Application, ApplicationSearch, ApplicationUpdateDto } from '../models'
import { FindAllResponse, SearchParams } from '../types'

export const ApplicationService = {
  search: (params: SearchParams<ApplicationSearch>) => {
    return axiosPublic.get<FindAllResponse<Application>>(applicationsApiUrl.search(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  findOne: (id: number) => {
    return axiosPublic.get<Application>(applicationsApiUrl.findOne(id))
  },

  findAll: (params: SearchParams<ApplicationSearch> = {}) => {
    return axiosPublic.get<Application[]>(applicationsApiUrl.findAll(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  update: (id: number, data: ApplicationUpdateDto) => {
    return axiosPublic.patch(applicationsApiUrl.update(id), data)
  },
}
