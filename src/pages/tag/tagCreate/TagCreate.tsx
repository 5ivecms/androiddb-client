import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const TagCreate: FC = () => {
  console.info('TagCreate')
  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title="Добавить тэг" />} showBackButton />
    </AdminLayout>
  )
}

export default TagCreate
