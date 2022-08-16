import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ApplicationsDataTable } from '../../../components/applications'
import { PageHeader, PageTitle } from '../../../components/ui'
import { applicationBrowseRoutes } from '../../../core/config/browse-routes.config'
import { AdminLayout } from '../../../layouts'

const ApplicationIndex: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Приложения" />}
        right={
          <Button variant="contained" component={Link} to={applicationBrowseRoutes.create()} endIcon={<Add />}>
            Добавить
          </Button>
        }
      />
      <ApplicationsDataTable />
    </AdminLayout>
  )
}

export default ApplicationIndex
