import { Checkbox, TableCell, TableRow } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { memo, useContext } from 'react'

import { getKeys } from '../../../core/utils/object/get-keys'
import ActionCell from './ActionCell'
import type { DataTableRowProps } from './data-table.interfaces'
import { DataTableContext } from './DataTableContext'

const DataTableRow: FC<DataTableRowProps> = ({
  row,
  selected,
  onSelect,
  onDelete
}): ReactElement => {
  const { fields } = useContext(DataTableContext)

  return (
    <TableRow
      aria-checked={selected}
      role="checkbox"
      selected={selected}
      tabIndex={-1}
      hover
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          color="primary"
          onClick={onSelect(row.id)}
        />
      </TableCell>

      {getKeys(fields).map((field) => {
        if (fields[field]?.render) {
          const renderFunc = fields[field].render
          return (
            <TableCell
              key={`row-${field}`}
              width={`${fields[field]?.width ?? `100%`}`}
            >
              {renderFunc && renderFunc(row)}
            </TableCell>
          )
        }
        return (
          <TableCell
            key={`row-${field}`}
            width={`${fields[field]?.width ?? `100%`}`}
          >
            {row[field] ?? ''}
          </TableCell>
        )
      })}
      <TableCell width={120}>
        <ActionCell itemId={row.id} onDelete={onDelete} />
      </TableCell>
    </TableRow>
  )
}

export default memo(DataTableRow)
