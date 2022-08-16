import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DeveloperDataTable } from '../../../components/developers'
import { PageHeader, PageTitle } from '../../../components/ui'
import { developerBrowseRoutes } from '../../../core/config/browse-routes.config'
import { AdminLayout } from '../../../layouts'

const DeveloperIndex: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Разработчики" />}
        right={
          <Button variant="contained" component={Link} to={developerBrowseRoutes.create()} endIcon={<Add />}>
            Добавить
          </Button>
        }
      />
      <DeveloperDataTable />
    </AdminLayout>
  )
}

export default DeveloperIndex
