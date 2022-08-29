import type { MouseEvent, ReactNode } from 'react'

import type { Order } from '../../../core/types/search-options'

type InputType = 'autocomplete' | 'input' | 'select'

export interface DataTableRow {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  id: number
}

export interface DataTableColumn {
  field: string
  fieldType: InputType
  headerName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadOptions?: (term: string) => Promise<any>
  numeric: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any) => ReactNode
  width?: string
}

export interface DataTableAction {
  field: string
  url: string
}

export interface DataTableActions {
  canDelete?: true
  edit?: DataTableAction
  view?: DataTableAction
}

export interface DataTableHeadProps {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: number | string | symbol
  ) => void
  order: Order
  orderBy: string
}

export interface DataTableRowProps {
  onDelete: (id: number) => void
  onSelect: (id: number) => (_: MouseEvent<HTMLButtonElement>) => void
  row: DataTableRow
  selected: boolean
}

export interface DataTableProps {
  actions: DataTableActions
  columns: DataTableColumn[]
  limit: number
  order: Order
  orderBy: string
  page: number
  rows: DataTableRow[]
  setOrder: (order: Order) => void
  setOrderBy: (orderBy: string) => void
  setPage: (page: number) => void
  total: number
}

export interface DataTablePaginationProps {
  limit: number
  onPageChange: (event: unknown, page: number) => void
  page: number
  total: number
}

export interface DataTableContextState {
  actions?: DataTableActions | undefined
  columns: DataTableColumn[]
  fields: Record<string, DataTableColumn>
}

export interface DataTableProviderProps {
  actions?: DataTableActions | undefined
  children: ReactNode
  columns: DataTableColumn[]
}
