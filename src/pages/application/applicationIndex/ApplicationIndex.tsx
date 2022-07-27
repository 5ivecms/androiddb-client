import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, PageTitle } from '../../../components/ui'
import { applicationBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useApplications } from '../../../core/hooks'
import { AdminLayout } from '../../../layouts'

const ApplicationIndex: FC = () => {
  const { data } = useApplications()
  console.log(data)
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
    </AdminLayout>
  )
}

export default ApplicationIndex
