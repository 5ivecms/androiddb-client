import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import CategoryDataTable from '../../../components/categories/categoryDataTable/CategoryDataTable'
import { PageHeader, PageTitle } from '../../../components/ui'
import { categoryBrowseRoutes } from '../../../core/config/browse-routes.config'
import { AdminLayout } from '../../../layouts'

const CategoryIndex: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Категории" />}
        right={
          <Button variant="contained" component={Link} to={categoryBrowseRoutes.create()} endIcon={<Add />}>
            Добавить
          </Button>
        }
      />
      <CategoryDataTable />
    </AdminLayout>
  )
}

export default CategoryIndex
