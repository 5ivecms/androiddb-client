import { FC } from 'react'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useCategory } from '../../../core/hooks/category'
import { AdminLayout } from '../../../layouts'

const CategoryView: FC = () => {
  const { data } = useCategory()

  if (!data) {
    return null
  }

  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title={data.title} />} showBackButton />
    </AdminLayout>
  )
}

export default CategoryView
