import type { AxiosResponse } from 'axios'
import QueryString from 'qs'

import { axiosPublic } from '../api/api.instances'
import { categoriesApiUrl } from '../config/api-routes.config'
import type { Category, CategorySearch, CategoryUpdateDto } from '../models'
import type { FindAllResponse } from '../types'
import type { SearchParams } from '../types/search-options'

export const CategoryService = {
  findAll: (
    params: SearchParams<CategorySearch> = {}
  ): Promise<AxiosResponse<FindAllResponse<Category>>> => {
    return axiosPublic.get<FindAllResponse<Category>>(
      categoriesApiUrl.findAll(),
      {
        params,
        paramsSerializer: () => QueryString.stringify(params)
      }
    )
  },

  findOne: (id: number): Promise<AxiosResponse<Category>> => {
    return axiosPublic.get<Category>(categoriesApiUrl.findOne(id))
  },

  search: (
    params: SearchParams<CategorySearch>
  ): Promise<AxiosResponse<FindAllResponse<Category>>> => {
    return axiosPublic.get<FindAllResponse<Category>>(
      categoriesApiUrl.search(),
      {
        params,
        paramsSerializer: () => QueryString.stringify(params)
      }
    )
  },

  update: (id: number, data: CategoryUpdateDto): Promise<AxiosResponse> => {
    return axiosPublic.patch(categoriesApiUrl.update(id), data)
  }
}
