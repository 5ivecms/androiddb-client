import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  DataTableActions,
  DataTableHeaderColumnProps,
} from '../../../components/common/dataTable/data-table.interfaces'
import DataTable from '../../../components/common/dataTable/DataTable'
import { PageHeader, PageTitle } from '../../../components/ui'
import { tagBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useTags } from '../../../core/hooks/tag'
import { AdminLayout } from '../../../layouts'

export const columns: DataTableHeaderColumnProps[] = [
  { field: 'id', fieldType: 'input', headerName: 'ID', numeric: false, width: '150px' },
  { field: 'title', fieldType: 'input', headerName: 'Название', numeric: false, width: '100%' },
]

export const actions: DataTableActions = {
  view: {
    field: 'id',
    url: tagBrowseRoutes.view(''),
  },
  edit: {
    field: 'id',
    url: tagBrowseRoutes.edit(''),
  },
  canDelete: true,
}

const TagIndex: FC = () => {
  const {
    data,
    isLoading,
    isFetching,
    page,
    setPage,
    order,
    orderBy,
    setOrder,
    setOrderBy,
    search,
    setSearch,
    refetch,
  } = useTags()

  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Тэги" />}
        right={
          <Button variant="contained" component={Link} to={tagBrowseRoutes.create()} endIcon={<Add />}>
            Добавить
          </Button>
        }
      />
      <DataTable
        loading={isLoading}
        fetching={isFetching}
        rows={data?.items || []}
        total={data?.total || 0}
        limit={data?.limit || 10}
        columns={columns}
        page={Number(page)}
        setPage={setPage}
        order={order}
        setOrder={setOrder}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        search={search as { [key: string]: any }}
        setSearch={setSearch}
        actions={actions}
        onRefresh={refetch}
        onDelete={() => console.log('удаляем')}
        onDeleteMany={() => console.log('Удаляем несколько')}
      />
    </AdminLayout>
  )
}

export default TagIndex
