import { Add } from '@mui/icons-material'
import { Button, Chip, Tooltip } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import googlePlayImage from '../../../assets/google-play.png'
import type {
  DataTableActions,
  DataTableColumn
} from '../../../components/common/dataTable/data-table.interfaces'
import DataTable from '../../../components/common/dataTable/DataTable'
import { PageHeader, PageTitle } from '../../../components/ui'
import { applicationBrowseRoutes } from '../../../core/config/browse-routes.config'
import { useApplications } from '../../../core/hooks/application'
import type { Application } from '../../../core/models'
import { DeveloperService } from '../../../core/services'
import { ParsingStatus } from '../../../core/types/application'
import { getParsingStatusText } from '../../../core/utils/application'
import { AdminLayout } from '../../../layouts'

export const columns: DataTableColumn[] = [
  {
    field: 'id',
    fieldType: 'input',
    headerName: 'ID',
    numeric: false,
    width: '100px'
  },
  {
    field: 'thumb',
    fieldType: 'input',
    headerName: 'Thumb',
    numeric: false,
    render: (data: Application) => (
      <Tooltip placement="top" title={data.title}>
        <img
          alt={data.title}
          src={data.thumb}
          style={{ borderRadius: '5px', display: 'block' }}
          width={50}
        />
      </Tooltip>
    ),
    width: '100px'
  },
  {
    field: 'title',
    fieldType: 'input',
    headerName: 'Название',
    numeric: false,
    width: 'auto'
  },
  {
    field: 'relation.developer.id',
    fieldType: 'autocomplete',
    headerName: 'Разработчик',
    loadOptions: (term: string) =>
      DeveloperService.search({ search: { name: term } }),
    numeric: false,
    render: () => (
      <>
        {/* {data?.developer && (
          <Tooltip placement="top" title={data.developer.name}>
            <Link
              component={RouterLink}
              sx={{ whiteSpace: 'nowrap' }}
              to={developerBrowseRoutes.view(data.developer.id)}
            >
              {`${[...data.developer.name].slice(0, 10).join('')}...`}
            </Link>
          </Tooltip>
        )} */}
      </>
    ),
    width: '200px'
  },
  {
    field: 'googlePlayUrl',
    fieldType: 'input',
    headerName: 'Google Play',
    numeric: false,
    render: (data: Application): ReactElement => {
      return (
        <a href={data.googlePlayUrl} rel="noreferrer" target="_blank">
          <img alt="" src={googlePlayImage} width={30} />
        </a>
      )
    },
    width: '150px'
  },
  {
    field: 'parsingStatus',
    fieldType: 'select',
    headerName: 'Статус',
    numeric: false,
    render: (data: Application): ReactElement => {
      const text = getParsingStatusText(data.parsingStatus)
      switch (data.parsingStatus) {
        case ParsingStatus.COMPLETED: {
          return <Chip color="success" label={text} size="small" />
        }
        case ParsingStatus.UNCOMPLETED: {
          return <Chip color="primary" label={text} size="small" />
        }
        case ParsingStatus.PROCESS: {
          return <Chip color="warning" label={text} size="small" />
        }
        default:
          return <Chip color="warning" label={text} size="small" />
      }
    },
    width: '150px'
  }
]

const actions: DataTableActions = {
  canDelete: true,
  edit: {
    field: 'id',
    url: applicationBrowseRoutes.edit('')
  },
  view: {
    field: 'id',
    url: applicationBrowseRoutes.view('')
  }
}

const ApplicationIndex: FC = (): ReactElement => {
  const { data, order, setOrder, orderBy, setOrderBy, setPage } =
    useApplications()

  const rows = data?.items ?? []
  const limit = data?.limit ?? 10
  const page = data?.page ?? 1
  const total = data?.total ?? 0

  return (
    <AdminLayout>
      <PageHeader
        left={<PageTitle title="Приложения" />}
        right={
          <Button
            component={RouterLink}
            endIcon={<Add />}
            to={applicationBrowseRoutes.create()}
            variant="contained"
          >
            Добавить
          </Button>
        }
      />
      <DataTable
        actions={actions}
        columns={columns}
        limit={limit}
        order={order}
        orderBy={orderBy}
        page={page}
        rows={rows}
        setOrder={setOrder}
        setOrderBy={setOrderBy}
        setPage={setPage}
        total={total}
      />
    </AdminLayout>
  )
}

export default ApplicationIndex
