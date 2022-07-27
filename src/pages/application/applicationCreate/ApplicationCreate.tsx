import { PageHeader, PageTitle } from '../../../components/ui'
import { AdminLayout } from '../../../layouts'

const ApplicationCreate = () => {
  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title="Добавить приложение" />} showBackButton />
    </AdminLayout>
  )
}

export default ApplicationCreate
