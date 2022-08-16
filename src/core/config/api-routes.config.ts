export const applicationsApiUrl = {
  search: () => `/applications/search`,
  findOne: (id: number | string) => `/applications/${id}`,
  findAll: () => `/applications`,
  update: (id: number | string) => `/application/${id}`,
}

export const categoriesApiUrl = {
  search: () => `/category/search`,
  findOne: (id: number | string) => `/category/${id}`,
  findAll: () => `/category`,
  update: (id: number | string) => `/category/${id}`,
}

export const tagsApiUrl = {
  search: () => `/tag/search`,
  findOne: (id: number | string) => `/tag/${id}`,
  findAll: () => `/tag`,
  update: (id: number | string) => `/tag/${id}`,
}

export const developerApiUrl = {
  search: () => `/developer/search`,
  findOne: (id: number | string) => `/developer/${id}`,
  update: (id: number) => `/developer/${id}`,
}
