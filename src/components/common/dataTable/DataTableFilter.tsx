import { MenuItem, Select, SxProps, TableCell, TextField } from '@mui/material'
import { FC, memo } from 'react'
import AsyncAutocomplete from '../asyncAutocomplete/AsyncAutocomplete'
import { DataTableFilterProps } from './data-table.interfaces'

const DataTableFilter: FC<DataTableFilterProps> = ({
  columns,
  search,
  onInputChange,
  onSelectChange,
  onAutocompleteChange,
}) => {
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
            {column.fieldType === 'autocomplete' && (
              <AsyncAutocomplete
                label={column.headerName}
                size="small"
                name={column.field}
                loadOptions={column.loadOptions}
                onChange={onAutocompleteChange}
              />
            )}
          </TableCell>
        )
      })}
    </>
  )
}

const fieldCell: SxProps = { p: 1 }
const field: SxProps = { width: '100%' }

export default memo(DataTableFilter)
