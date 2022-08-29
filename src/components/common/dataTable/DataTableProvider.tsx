import type { FC, ReactElement } from 'react'
import { useMemo } from 'react'

import type {
  DataTableColumn,
  DataTableProviderProps
} from './data-table.interfaces'
import { DataTableContext } from './DataTableContext'

const DataTableProvider: FC<DataTableProviderProps> = ({
  children,
  columns,
  actions
}): ReactElement => {
  const fields: Record<string, DataTableColumn> = useMemo(
    () =>
      columns.reduce((acc, column) => ({ ...acc, [column.field]: column }), {}),
    [columns]
  )

  const contextValue = useMemo(
    () => ({ actions, columns, fields }),
    [columns, fields, actions]
  )

  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  )
}

export default DataTableProvider
