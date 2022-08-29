import { createContext } from 'react'

import type { DataTableContextState } from './data-table.interfaces'

const defaultState: DataTableContextState = {
  actions: {},
  columns: [],
  fields: {}
}

export const DataTableContext =
  createContext<DataTableContextState>(defaultState)
