import QueryString from 'qs'
import { axiosPublic } from '../api/api.instances'
import { categoriesApiUrl } from '../config/api-routes.config'
import { Category, CategorySearch, CategoryUpdateDto } from '../models'
import { FindAllResponse, SearchParams } from '../types'

export const CategoryService = {
  search: (params: SearchParams<CategorySearch>) => {
    return axiosPublic.get<FindAllResponse<Category>>(categoriesApiUrl.search(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  findOne: (id: string | number) => {
    return axiosPublic.get<Category>(categoriesApiUrl.findOne(id))
  },

  findAll: (params: SearchParams<CategorySearch> = {}) => {
    return axiosPublic.get<FindAllResponse<Category>>(categoriesApiUrl.findAll(), {
      params,
      paramsSerializer: (params) => QueryString.stringify(params),
    })
  },

  update: (id: number, data: CategoryUpdateDto) => {
    return axiosPublic.patch(categoriesApiUrl.update(id), data)
  },
}
