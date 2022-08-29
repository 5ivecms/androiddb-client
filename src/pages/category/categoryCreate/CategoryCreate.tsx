import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const CategoryCreate: FC = () => {
  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Добавить категорию" />}
        showBackButton
      />
    </AdminLayout>
  )
}

export default CategoryCreate
