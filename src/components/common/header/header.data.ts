import {
  applicationBrowseRoutes,
  categoryBrowseRoutes,
  developerBrowseRoutes,
  tagBrowseRoutes,
} from '../../../core/config/browse-routes.config'
import { IHeaderMenuItem } from './header.interfaces'

export const headerMenu: IHeaderMenuItem[] = [
  {
    title: 'Приложения',
    url: applicationBrowseRoutes.index(),
  },
  {
    title: 'Категории',
    url: categoryBrowseRoutes.index(),
  },
  {
    title: 'Теги',
    url: tagBrowseRoutes.index(),
  },
  {
    title: 'Разработчики',
    url: developerBrowseRoutes.index(),
  },
]
