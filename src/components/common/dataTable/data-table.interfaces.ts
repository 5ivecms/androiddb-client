import { SelectChangeEvent } from '@mui/material'
import { ChangeEvent, MouseEvent, ReactNode } from 'react'

export type Order = 'asc' | 'desc'

type InputType = 'input' | 'select' | 'autocomplete'

export interface DataTableHeaderColumnProps {
  field: string
  fieldType: InputType
  headerName: string
  numeric: boolean
  width?: string
  render?: (data: any) => ReactNode
}

export interface DataTableHeadProps {
  columns: DataTableHeaderColumnProps[]
  order: Order
  orderBy: string
  onRequestSort: (event: MouseEvent<unknown>, property: any) => void
  actions?: boolean
}

export interface DataTableFilterProps {
  columns: any[]
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (e: SelectChangeEvent) => void
  search: any
}

export interface DataTableRowProps {
  fields: {
    [key: string]: any
  }
  row: any
  actions?: DataTableActions
  selected: boolean
  onSelect: (id: number) => (_: MouseEvent<HTMLButtonElement>) => void
  onDelete: (id: number) => void
}

export interface DataTablePaginationProps {
  total: number
  limit: number
  page: number
  onPageChange: (event: unknown, newPage: number) => void
}

export interface DataTableProps {
  loading: boolean
  fetching: boolean
  columns: DataTableHeaderColumnProps[]
  rows: any[]
  order: Order
  orderBy: string
  setOrder: (order: Order) => void
  setOrderBy: (orderBy: string) => void
  limit: number
  total: number
  page: number
  setPage: (newPage: number) => void
  actions?: DataTableActions
  search: {
    [key: string]: string
  }
  setSearch: (data: { [key: string]: string }) => void
  onRefresh: () => void
  onDelete: (id: number) => void
  onDeleteMany: (ids: string) => void
}

export interface DataTableAction {
  field: string
  url: string
}

export interface DataTableActions {
  view?: DataTableAction
  edit?: DataTableAction
  canDelete?: true
}

export interface DataTableDeleteDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export interface DataTableDeleteManyDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}
