import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const DeveloperCreate: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Добавить разработчика" />}
        showBackButton
      />
    </AdminLayout>
  )
}

export default DeveloperCreate
