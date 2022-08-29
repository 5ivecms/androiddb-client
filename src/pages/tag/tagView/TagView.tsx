import type { FC } from 'react'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useTag } from '../../../core/hooks/tag'
import { AdminLayout } from '../../../layouts'

const TagView: FC = () => {
  const { data } = useTag()

  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title={data?.title || ''} />}
        showBackButton
      />
    </AdminLayout>
  )
}

export default TagView
