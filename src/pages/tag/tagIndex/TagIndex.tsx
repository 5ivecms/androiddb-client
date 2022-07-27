import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, PageTitle } from '../../../components/ui'
import { tagBrowseRoutes } from '../../../core/config/browse-routes.config'
import { AdminLayout } from '../../../layouts'

const TagIndex: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Тэги" />}
        right={
          <Button variant="contained" component={Link} to={tagBrowseRoutes.create()} endIcon={<Add />}>
            Добавить
          </Button>
        }
      />
    </AdminLayout>
  )
}

export default TagIndex
