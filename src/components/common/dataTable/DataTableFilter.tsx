import { MenuItem, Select, SxProps, TableCell, TextField } from '@mui/material'
import { FC, memo } from 'react'
import { DataTableFilterProps } from './data-table.interfaces'

const DataTableFilter: FC<DataTableFilterProps> = ({ columns, search, onInputChange, onSelectChange }) => {
  return (
    <>
      {columns.map((column, index) => {
        return (
          <TableCell sx={fieldCell} key={`filter-table-cell-${index}`}>
            {column.fieldType === 'input' && (
              <TextField
                id={`field-${column.field}`}
                onChange={onInputChange}
                name={column.field}
                sx={field}
                label={column.headerName}
                color="primary"
                size="small"
                value={search[column.field] || ''}
              />
            )}
            {column.fieldType === 'select' && (
              <Select
                name={column.field}
                size="small"
                value={search[column.field] || ''}
                onChange={onSelectChange}
                fullWidth
              >
                <MenuItem value={``}>Все</MenuItem>
                <MenuItem value={`1`}>Новый</MenuItem>
                <MenuItem value={`2`}>В процессе</MenuItem>
                <MenuItem value={`3`}>Завершен</MenuItem>
              </Select>
            )}
            {/* {column.fieldType === 'autocomplete' && <AsyncAutocomplete />} */}
          </TableCell>
        )
      })}
    </>
  )
}

const fieldCell: SxProps = { p: 1 }
const field: SxProps = { width: '100%' }

export default memo(DataTableFilter)
