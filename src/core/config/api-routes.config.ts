export const applicationsApiUrl = {
  findAll: (): string => '/applications',
  findOne: (id: number): string => `/applications/${id}`,
  search: (): string => '/applications/search',
  update: (id: number): string => `/application/${id}`
}

export const categoriesApiUrl = {
  findAll: (): string => '/category',
  findOne: (id: number): string => `/category/${id}`,
  search: (): string => '/category/search',
  update: (id: number): string => `/category/${id}`
}

export const tagsApiUrl = {
  findAll: (): string => '/tag',
  findOne: (id: number): string => `/tag/${id}`,
  search: (): string => '/tag/search',
  update: (id: number): string => `/tag/${id}`
}

export const developerApiUrl = {
  findOne: (id: number): string => `/developer/${id}`,
  search: (): string => '/developer/search',
  update: (id: number): string => `/developer/${id}`
}

export const fileApiUrl = {
  upload: (): string => `/file/upload`
}
