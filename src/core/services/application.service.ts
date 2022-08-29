import type { AxiosResponse } from 'axios'
import QueryString from 'qs'

import { axiosPublic } from '../api/api.instances'
import { applicationsApiUrl } from '../config/api-routes.config'
import type {
  Application,
  ApplicationSearch,
  ApplicationUpdateDto
} from '../models'
import type { FindAllResponse } from '../types'
import type { SearchParams } from '../types/search-options'

export const ApplicationService = {
  findAll: (
    params: SearchParams<ApplicationSearch> = {}
  ): Promise<AxiosResponse<Application[]>> => {
    return axiosPublic.get<Application[]>(applicationsApiUrl.findAll(), {
      params,
      paramsSerializer: () => QueryString.stringify(params)
    })
  },

  findOne: (id: number): Promise<AxiosResponse<Application>> => {
    return axiosPublic.get<Application>(applicationsApiUrl.findOne(id))
  },

  search: (
    params: SearchParams<ApplicationSearch>
  ): Promise<AxiosResponse<FindAllResponse<Application>>> => {
    return axiosPublic.get<FindAllResponse<Application>>(
      applicationsApiUrl.search(),
      {
        params,
        paramsSerializer: () => QueryString.stringify(params)
      }
    )
  },

  update: (
    id: number,
    data: ApplicationUpdateDto
  ): Promise<AxiosResponse<Application>> => {
    return axiosPublic.patch(applicationsApiUrl.update(id), data)
  }
}
