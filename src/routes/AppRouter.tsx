import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  applicationBrowseRoutes,
  categoryBrowseRoutes,
  developerBrowseRoutes,
  tagBrowseRoutes,
} from '../core/config/browse-routes.config'
import { ApplicationIndex, CategoryIndex, DeveloperIndex, NotFoundPage, TagIndex } from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path={applicationBrowseRoutes.index()} element={<ApplicationIndex />} />

      <Route path={categoryBrowseRoutes.index()} element={<CategoryIndex />} />

      <Route path={tagBrowseRoutes.index()} element={<TagIndex />} />

      <Route path={developerBrowseRoutes.index()} element={<DeveloperIndex />} />
    </Routes>
  )
}

export default AppRouter
