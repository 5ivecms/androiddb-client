export const baseBrowseRoutes = {
  notFound: () => '*',
  home: () => '/',
}

export const applicationBrowseRoutes = {
  index: () => '/applications',
  create: () => `/application/create`,
  view: (to: string | number = ':applicationId') => `/application/view/${to}`,
  edit: (to: string | number = ':applicationId') => `/application/edit/${to}`,
}

export const categoryBrowseRoutes = {
  index: () => '/categories',
  create: () => `/category/create`,
  view: (to: string | number = ':categoryId') => `/category/view/${to}`,
  edit: (to: string | number = ':categoryId') => `/category/edit/${to}`,
}

export const tagBrowseRoutes = {
  index: () => '/tags',
  create: () => `/tag/create`,
  view: (to: string | number = ':tagId') => `/tag/view/${to}`,
  edit: (to: string | number = ':tagId') => `/tag/edit/${to}`,
}

export const developerBrowseRoutes = {
  index: () => '/developers',
  create: () => `/developer/create`,
  view: (to: string | number = ':developerId') => `/developer/view/${to}`,
  edit: (to: string | number = ':developerId') => `/developer/edit/${to}`,
}

export const fileBrowseRoutes = {
  index: () => '/files',
  create: () => `/file/create`,
  view: (to: string | number = ':fileId') => `/file/view/${to}`,
  edit: (to: string | number = ':fileId') => `/file/edit/${to}`,
}
