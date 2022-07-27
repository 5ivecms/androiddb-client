import { FC } from 'react'
import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const TagCreate: FC = () => {
  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title="Добавить тэг" />} showBackButton />
    </AdminLayout>
  )
}

export default TagCreate
