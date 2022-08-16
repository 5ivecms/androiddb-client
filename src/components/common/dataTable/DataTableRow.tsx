import { Checkbox, TableCell, TableRow } from '@mui/material'
import { FC, memo } from 'react'
import ActionCell from './ActionCell'
import { DataTableRowProps } from './data-table.interfaces'

const DataTableRow: FC<DataTableRowProps> = ({ fields, row, onSelect, selected, onDelete, actions = {}, ...rest }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} aria-checked={selected} selected={selected} {...rest}>
      <TableCell padding="checkbox">
        <Checkbox color="primary" onClick={onSelect(row.id)} checked={selected} />
      </TableCell>
      {Object.keys(fields).map((field) => {
        if (fields[field].render) {
          return (
            <TableCell width={`${fields[field]}`} key={`row-${field}`}>
              {fields[field].render(row)}
            </TableCell>
          )
        }
        return (
          <TableCell width={`${fields[field]}`} key={`row-${field}`}>
            {row[field] ?? ''}
          </TableCell>
        )
      })}
      {Object.keys(actions) && (
        <TableCell width={120}>
          <ActionCell
            itemId={row.id}
            deleteAction={actions?.canDelete}
            viewUrl={actions?.view && `${actions?.view?.url}${row[actions?.view?.field]}`}
            editUrl={actions?.edit && `${actions?.edit?.url}${row[actions?.edit?.field]}`}
            onDelete={onDelete}
          />
        </TableCell>
      )}
    </TableRow>
  )
}

export default memo(DataTableRow)
