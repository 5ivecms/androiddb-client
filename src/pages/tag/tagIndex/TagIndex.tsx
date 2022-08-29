import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader, PageTitle } from '../../../components/ui'
import { tagBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useTags } from '../../../core/hooks/tag'
import { AdminLayout } from '../../../layouts'

const TagIndex: FC = () => {
  const { data } = useTags()

  console.info(data)
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Тэги" />}
        right={
          <Button
            component={Link}
            endIcon={<Add />}
            to={tagBrowseRoutes.create()}
            variant="contained"
          >
            Добавить
          </Button>
        }
      />
    </AdminLayout>
  )
}

export default TagIndex
