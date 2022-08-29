import type { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  applicationBrowseRoutes,
  baseBrowseRoutes,
  categoryBrowseRoutes,
  developerBrowseRoutes,
  fileBrowseRoutes,
  tagBrowseRoutes
} from '../core/config/browse-routes.config'
import {
  ApplicationCreate,
  ApplicationEdit,
  ApplicationIndex,
  ApplicationView
} from '../pages/application'
import {
  CategoryCreate,
  CategoryEdit,
  CategoryIndex,
  CategoryView
} from '../pages/category'
import {
  DeveloperCreate,
  DeveloperEdit,
  DeveloperIndex,
  DeveloperView
} from '../pages/developer'
import { FileIndex } from '../pages/file'
import { HomePage, NotFoundPage } from '../pages/main'
import { TagCreate, TagEdit, TagIndex, TagView } from '../pages/tag'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path={baseBrowseRoutes.home()} />
      <Route element={<NotFoundPage />} path={baseBrowseRoutes.notFound()} />

      <Route
        element={<ApplicationIndex />}
        path={applicationBrowseRoutes.index()}
      />
      <Route
        element={<ApplicationCreate />}
        path={applicationBrowseRoutes.create()}
      />
      <Route
        element={<ApplicationView />}
        path={applicationBrowseRoutes.view()}
      />
      <Route
        element={<ApplicationEdit />}
        path={applicationBrowseRoutes.edit()}
      />

      <Route element={<CategoryIndex />} path={categoryBrowseRoutes.index()} />
      <Route
        element={<CategoryCreate />}
        path={categoryBrowseRoutes.create()}
      />
      <Route element={<CategoryView />} path={categoryBrowseRoutes.view()} />
      <Route element={<CategoryEdit />} path={categoryBrowseRoutes.edit()} />

      <Route element={<TagIndex />} path={tagBrowseRoutes.index()} />
      <Route element={<TagCreate />} path={tagBrowseRoutes.create()} />
      <Route element={<TagView />} path={tagBrowseRoutes.view()} />
      <Route element={<TagEdit />} path={tagBrowseRoutes.edit()} />

      <Route
        element={<DeveloperIndex />}
        path={developerBrowseRoutes.index()}
      />
      <Route
        element={<DeveloperCreate />}
        path={developerBrowseRoutes.create()}
      />
      <Route element={<DeveloperView />} path={developerBrowseRoutes.view()} />
      <Route element={<DeveloperEdit />} path={developerBrowseRoutes.edit()} />

      <Route element={<FileIndex />} path={fileBrowseRoutes.index()} />
    </Routes>
  )
}

export default AppRouter
