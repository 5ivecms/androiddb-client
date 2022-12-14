import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { FC } from 'react'
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
          <Button
            component={Link}
            endIcon={<Add />}
            to={developerBrowseRoutes.create()}
            variant="contained"
          >
            Добавить
          </Button>
        }
      />
      <DeveloperDataTable />
    </AdminLayout>
  )
}

export default DeveloperIndex
