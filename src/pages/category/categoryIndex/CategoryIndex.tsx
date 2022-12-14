import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader, PageTitle } from '../../../components/ui'
import { categoryBrowseRoutes } from '../../../core/config/browse-routes.config'
import { AdminLayout } from '../../../layouts'

const CategoryIndex: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Категории" />}
        right={
          <Button
            component={Link}
            endIcon={<Add />}
            to={categoryBrowseRoutes.create()}
            variant="contained"
          >
            Добавить
          </Button>
        }
      />
    </AdminLayout>
  )
}

export default CategoryIndex
