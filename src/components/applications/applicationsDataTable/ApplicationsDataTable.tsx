import { Chip, Link, Tooltip } from '@mui/material'
import { FC, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import googlePlayImage from '../../../assets/google-play.png'
import { applicationBrowseRoutes, developerBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useApplications } from '../../../core/hooks/application'
import { Application } from '../../../core/models'
import { ParsingStatus } from '../../../core/types/application'
import { getParsingStatusText } from '../../../core/utils/application'
import { DataTableActions, DataTableHeaderColumnProps } from '../../common/dataTable/data-table.interfaces'
import DataTable from '../../common/dataTable/DataTable'

export const columns: DataTableHeaderColumnProps[] = [
  { field: 'id', fieldType: 'input', headerName: 'ID', numeric: false, width: '100px' },
  {
    field: 'thumb',
    fieldType: 'input',
    headerName: 'Thumb',
    numeric: false,
    width: '100px',
    render: (data: Application) => (
      <Tooltip title={data.title} placement="top">
        <img width={50} style={{ display: 'block', borderRadius: '5px' }} src={data.thumb} alt={data.title} />
      </Tooltip>
    ),
  },
  { field: 'title', fieldType: 'input', headerName: 'Название', numeric: false, width: 'auto' },
  {
    field: 'developer',
    fieldType: 'autocomplete',
    headerName: 'Разработчик',
    numeric: false,
    width: '150px',
    render: (data: Application) => (
      <>
        {data?.developer && (
          <Tooltip title={data.developer.name} placement="top">
            <Link
              sx={{ whiteSpace: 'nowrap' }}
              variant="body2"
              component={RouterLink}
              to={developerBrowseRoutes.view(data.developer.id)}
            >
              {`${data.developer.name.split('').slice(0, 10).join('')}...`}
            </Link>
          </Tooltip>
        )}
      </>
    ),
  },
  {
    field: 'googlePlayUrl',
    fieldType: 'input',
    headerName: 'Google Play',
    numeric: false,
    width: '150px',
    render: (data) => {
      return (
        <a href={data.googlePlayUrl} rel="noreferrer" target="_blank">
          <img width={30} src={googlePlayImage} alt="" />
        </a>
      )
    },
  },
  {
    field: 'parsingStatus',
    fieldType: 'select',
    headerName: 'Статус',
    numeric: false,
    width: '150px',
    render: (data: Application) => {
      const text = getParsingStatusText(data.parsingStatus)
      switch (data.parsingStatus) {
        case ParsingStatus.COMPLETED: {
          return <Chip size="small" label={text} color="success" />
        }
        case ParsingStatus.UNCOMPLETED: {
          return <Chip size="small" label={text} color="primary" />
        }
        case ParsingStatus.PROCESS: {
          return <Chip size="small" label={text} color="warning" />
        }
      }
    },
  },
]

export const actions: DataTableActions = {
  view: {
    field: 'id',
    url: applicationBrowseRoutes.view(''),
  },
  edit: {
    field: 'id',
    url: applicationBrowseRoutes.edit(''),
  },
  canDelete: true,
}

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
