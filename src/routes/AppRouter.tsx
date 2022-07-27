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
  ApplicationIndex,
  CategoryCreate,
  CategoryIndex,
  DeveloperCreate,
  DeveloperIndex,
  FileIndex,
  HomePage,
  NotFoundPage,
  TagCreate,
  TagIndex,
} from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={baseBrowseRoutes.home()} element={<HomePage />} />
      <Route path={baseBrowseRoutes.notFound()} element={<NotFoundPage />} />

      <Route path={applicationBrowseRoutes.index()} element={<ApplicationIndex />} />
      <Route path={applicationBrowseRoutes.create()} element={<ApplicationCreate />} />

      <Route path={categoryBrowseRoutes.index()} element={<CategoryIndex />} />
      <Route path={categoryBrowseRoutes.create()} element={<CategoryCreate />} />

      <Route path={tagBrowseRoutes.index()} element={<TagIndex />} />
      <Route path={tagBrowseRoutes.create()} element={<TagCreate />} />

      <Route path={developerBrowseRoutes.index()} element={<DeveloperIndex />} />
      <Route path={developerBrowseRoutes.create()} element={<DeveloperCreate />} />

      <Route path={fileBrowseRoutes.index()} element={<FileIndex />} />
    </Routes>
  )
}

export default AppRouter
