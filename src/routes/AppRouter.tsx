import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  applicationBrowseRoutes,
  baseBrowseRoutes,
  categoryBrowseRoutes,
  developerBrowseRoutes,
  fileBrowseRoutes,
  tagBrowseRoutes,
} from '../core/config/browse-routes.config'
import {
  ApplicationCreate,
  ApplicationEdit,
  ApplicationIndex,
  ApplicationView,
  CategoryCreate,
  CategoryEdit,
  CategoryIndex,
  CategoryView,
  DeveloperCreate,
  DeveloperEdit,
  DeveloperIndex,
  DeveloperView,
  FileIndex,
  HomePage,
  NotFoundPage,
  TagCreate,
  TagEdit,
  TagIndex,
  TagView,
} from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={baseBrowseRoutes.home()} element={<HomePage />} />
      <Route path={baseBrowseRoutes.notFound()} element={<NotFoundPage />} />

      <Route path={applicationBrowseRoutes.index()} element={<ApplicationIndex />} />
      <Route path={applicationBrowseRoutes.create()} element={<ApplicationCreate />} />
      <Route path={applicationBrowseRoutes.view()} element={<ApplicationView />} />
      <Route path={applicationBrowseRoutes.edit()} element={<ApplicationEdit />} />

      <Route path={categoryBrowseRoutes.index()} element={<CategoryIndex />} />
      <Route path={categoryBrowseRoutes.create()} element={<CategoryCreate />} />
      <Route path={categoryBrowseRoutes.view()} element={<CategoryView />} />
      <Route path={categoryBrowseRoutes.edit()} element={<CategoryEdit />} />

      <Route path={tagBrowseRoutes.index()} element={<TagIndex />} />
      <Route path={tagBrowseRoutes.create()} element={<TagCreate />} />
      <Route path={tagBrowseRoutes.view()} element={<TagView />} />
      <Route path={tagBrowseRoutes.edit()} element={<TagEdit />} />

      <Route path={developerBrowseRoutes.index()} element={<DeveloperIndex />} />
      <Route path={developerBrowseRoutes.create()} element={<DeveloperCreate />} />
      <Route path={developerBrowseRoutes.view()} element={<DeveloperView />} />
      <Route path={developerBrowseRoutes.edit()} element={<DeveloperEdit />} />

      <Route path={fileBrowseRoutes.index()} element={<FileIndex />} />
    </Routes>
  )
}

export default AppRouter
