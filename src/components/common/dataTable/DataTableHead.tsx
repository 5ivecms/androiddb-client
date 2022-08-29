import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { visuallyHidden } from '@mui/utils'
import type { FC, MouseEvent, ReactElement } from 'react'
import { memo, useContext } from 'react'

import type { DataTableHeadProps } from './data-table.interfaces'
import { DataTableContext } from './DataTableContext'

const DataTableHead: FC<DataTableHeadProps> = ({
  onRequestSort,
  order,
  orderBy
}): ReactElement => {
  const { columns } = useContext(DataTableContext)

  const sortHandler =
    (property: number | string | symbol) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: grey[100] }}>
        <TableCell />
        {columns.map((column) => (
          <TableCell
            key={String(column.field)}
            align={column.numeric ? 'right' : 'left'}
            sortDirection={orderBy === column.field ? order : false}
            sx={{
              boxSizing: 'border-box',
              width: column?.width ?? '100%'
            }}
            width={`${column?.width ?? '100%'}`}
          >
            <TableSortLabel
              active={orderBy === column.field}
              direction={orderBy === column.field ? order : 'asc'}
              onClick={sortHandler(column.field)}
              sx={{ fontWeight: 'bold' }}
            >
              {column.headerName}
              {orderBy === column.field ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : (
                <></>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell width={120} />
      </TableRow>
    </TableHead>
  )
}

export default memo(DataTableHead)
