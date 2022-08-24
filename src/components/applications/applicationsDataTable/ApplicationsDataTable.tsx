import { FC, useCallback } from 'react'
import { useApplications } from '../../../core/hooks/application'
import DataTable from '../../common/dataTable/DataTable'
import { actions, columns } from './applications-data-table-columns'

const ApplicationsDataTable: FC = () => {
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
  } = useApplications()

  console.log(data?.items)

  const handleDelete = useCallback(() => {
    console.log('удаляем')
  }, [])

  const handleDeleteMany = useCallback(() => {
    console.log('Удаляем несколько')
  }, [])

  return (
    <DataTable
      loading={isLoading}
      fetching={isFetching}
      rows={data?.items || []}
      total={data?.total || 0}
      limit={data?.limit || 0}
      columns={columns}
      page={Number(page)}
      setPage={setPage}
      order={order}
      setOrder={setOrder}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      search={search}
      setSearch={setSearch}
      actions={actions}
      onRefresh={refetch}
      onDelete={handleDelete}
      onDeleteMany={handleDeleteMany}
    />
  )
}

export default ApplicationsDataTable
