import type { ReactElement } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const ApplicationCreate = (): ReactElement => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Добавить приложение" />}
        showBackButton
      />
    </AdminLayout>
  )
}

export default ApplicationCreate
