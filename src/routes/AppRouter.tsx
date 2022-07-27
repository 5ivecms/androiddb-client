import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  applicationBrowseRoutes,
  baseBrowseRoutes,
  categoryBrowseRoutes,
  developerBrowseRoutes,
  tagBrowseRoutes,
} from '../core/config/browse-routes.config'
import { ApplicationIndex, CategoryIndex, DeveloperIndex, HomePage, NotFoundPage, TagIndex } from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={baseBrowseRoutes.home()} element={<HomePage />} />

      <Route path={baseBrowseRoutes.notFound()} element={<NotFoundPage />} />

      <Route path={applicationBrowseRoutes.index()} element={<ApplicationIndex />} />

      <Route path={categoryBrowseRoutes.index()} element={<CategoryIndex />} />

      <Route path={tagBrowseRoutes.index()} element={<TagIndex />} />

      <Route path={developerBrowseRoutes.index()} element={<DeveloperIndex />} />
    </Routes>
  )
}

export default AppRouter
