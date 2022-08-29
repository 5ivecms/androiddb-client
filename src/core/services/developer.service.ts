import type { AxiosResponse } from 'axios'
import QueryString from 'qs'

import { axiosPublic } from '../api/api.instances'
import { developerApiUrl } from '../config/api-routes.config'
import type {
  Developer,
  DeveloperSearch,
  DeveloperUpdateDto
} from '../models/developer.model'
import type { FindAllResponse } from '../types'
import type { SearchParams } from '../types/search-options'

export const DeveloperService = {
  findOne: (id: number): Promise<AxiosResponse<Developer>> => {
    return axiosPublic.get<Developer>(developerApiUrl.findOne(id))
  },

  search: (
    params: SearchParams<DeveloperSearch> = {}
  ): Promise<AxiosResponse<FindAllResponse<Developer>>> => {
    return axiosPublic.get<FindAllResponse<Developer>>(
      developerApiUrl.search(),
      {
        params,
        paramsSerializer: () => QueryString.stringify(params)
      }
    )
  },

  update: (id: number, data: DeveloperUpdateDto): Promise<AxiosResponse> => {
    return axiosPublic.patch(developerApiUrl.update(id), data)
  }
}
