import QueryString from 'qs'
import { axiosPublic } from '../api/api.instances'
import { applicationsApiUrl } from '../config/api-routes.config'
import { Application } from '../models'

export const ApplicationService = {
  findAll: (params: any = {}) => {
    return axiosPublic.get<Application[]>(applicationsApiUrl.findAll(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },
}
