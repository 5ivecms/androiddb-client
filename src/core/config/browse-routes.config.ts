export const baseBrowseRoutes = {
  home: (): string => '/',
  notFound: (): string => '*'
}

export const applicationBrowseRoutes = {
  create: (): string => '/application/create',
  edit: (to: number | string = ':applicationId'): string =>
    `/application/edit/${to}`,
  index: (): string => '/applications',
  view: (to: number | string = ':applicationId'): string =>
    `/application/view/${to}`
}

export const categoryBrowseRoutes = {
  create: (): string => '/category/create',
  edit: (to: number | string = ':categoryId'): string => `/category/edit/${to}`,
  index: (): string => '/categories',
  view: (to: number | string = ':categoryId'): string => `/category/view/${to}`
}

export const tagBrowseRoutes = {
  create: (): string => '/tag/create',
  edit: (to: number | string = ':tagId'): string => `/tag/edit/${to}`,
  index: (): string => '/tags',
  view: (to: number | string = ':tagId'): string => `/tag/view/${to}`
}

export const developerBrowseRoutes = {
  create: (): string => '/developer/create',
  edit: (to: number | string = ':developerId'): string =>
    `/developer/edit/${to}`,
  index: (): string => '/developers',
  view: (to: number | string = ':developerId'): string =>
    `/developer/view/${to}`
}

export const fileBrowseRoutes = {
  create: (): string => '/file/create',
  edit: (to: number | string = ':fileId'): string => `/file/edit/${to}`,
  index: (): string => '/files',
  view: (to: number | string = ':fileId'): string => `/file/view/${to}`
}
