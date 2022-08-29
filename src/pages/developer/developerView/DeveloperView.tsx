import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useDeveloper } from '../../../core/hooks/developer'
import { AdminLayout } from '../../../layouts'

const DeveloperView: FC = () => {
  useDeveloper()
  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title="Разработчик" />} showBackButton />
      <div>DeveloperView</div>
    </AdminLayout>
  )
}

export default DeveloperView
