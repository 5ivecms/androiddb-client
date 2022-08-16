import { FC } from 'react'
import { developerBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useDevelopers } from '../../../core/hooks/developer'
import { DataTableActions, DataTableHeaderColumnProps } from '../../common/dataTable/data-table.interfaces'
import DataTable from '../../common/dataTable/DataTable'

export const columns: DataTableHeaderColumnProps[] = [
  { field: 'id', fieldType: 'input', headerName: 'ID', numeric: false, width: '150px' },
  { field: 'name', fieldType: 'input', headerName: 'Разработчик', numeric: false, width: '100%' },
]

export const actions: DataTableActions = {
  view: {
    field: 'id',
    url: developerBrowseRoutes.view(''),
  },
  edit: {
    field: 'id',
    url: developerBrowseRoutes.edit(''),
  },
  canDelete: true,
}

const handleDelete = () => {}

const handleDeleteMany = () => {}

const DeveloperDataTable: FC = () => {
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
  } = useDevelopers()

  return (
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
      search={search as { [key: string]: string }}
      setSearch={setSearch}
      actions={actions}
      onRefresh={refetch}
      onDelete={() => console.log('удаляем')}
      onDeleteMany={() => console.log('Удаляем несколько')}
    />
  )
}

export default DeveloperDataTable
