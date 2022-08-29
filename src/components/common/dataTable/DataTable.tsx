import { Box, Paper, Table, TableBody, TableContainer } from '@mui/material'
import type { FC, MouseEvent, ReactElement } from 'react'
import { useCallback, useState } from 'react'

import type { DataTableProps } from './data-table.interfaces'
import DataTableHead from './DataTableHead'
import DataTablePagination from './DataTablePagination'
import DataTableProvider from './DataTableProvider'
import DataTableRow from './DataTableRow'

const DataTable: FC<DataTableProps> = ({
  actions,
  rows,
  columns,
  order,
  orderBy,
  setOrder,
  setOrderBy,
  limit,
  page,
  total,
  setPage
}): ReactElement => {
  const [selected, setSelected] = useState<number[]>([])
  const [deleteItemId, setDeleteItemId] = useState<number | undefined>()

  const isSelected = useCallback(
    (id: number) => selected.includes(id),
    [selected]
  )

  const onSelect = useCallback(
    (id: number) => (_: MouseEvent<HTMLButtonElement>) => {
      setSelected((prevState) => {
        if (!prevState.includes(id)) {
          return [...prevState, id]
        }
        return prevState.filter((item) => item !== id)
      })
    },
    []
  )

  const handleDelete = useCallback((id: number) => {
    setDeleteItemId(id)
  }, [])

  const handleRequestSort = useCallback(
    (_: MouseEvent<unknown>, property: number | string | symbol) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(String(property))
    },
    [setOrder, setOrderBy, order, orderBy]
  )

  const handlePageChange = useCallback(
    (_: unknown, newPage: number) => {
      console.info(newPage)
      setPage(Number(newPage))
    },
    [setPage]
  )

  console.info(deleteItemId)

  return (
    <DataTableProvider actions={actions} columns={columns}>
      <Box>
        <Paper>
          <TableContainer>
            <Table>
              <DataTableHead
                onRequestSort={handleRequestSort}
                order={order}
                orderBy={orderBy}
              />
              <TableBody>
                {rows.map((row) => (
                  <DataTableRow
                    key={row.id}
                    onDelete={handleDelete}
                    onSelect={onSelect}
                    row={row}
                    selected={isSelected(row.id)}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <DataTablePagination
            limit={limit}
            onPageChange={handlePageChange}
            page={page}
            total={total}
          />
        </Paper>
      </Box>
    </DataTableProvider>
  )
}

export default DataTable
