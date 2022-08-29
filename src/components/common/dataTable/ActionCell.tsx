import { Delete, Edit, RemoveRedEye } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import type { FC } from 'react'
import { memo, useContext } from 'react'
import { Link } from 'react-router-dom'

import { DataTableContext } from './DataTableContext'

interface ActionCellProps {
  itemId: number
  onDelete: (id: number) => void
}

const ActionCell: FC<ActionCellProps> = ({ onDelete, itemId }) => {
  const { actions } = useContext(DataTableContext)

  const hasViewUrl = !!actions?.view?.url
  const hasEditUrl = !!actions?.edit?.url

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
    >
      {hasViewUrl && (
        <IconButton
          aria-label="view"
          color="primary"
          component={Link}
          to={`${String(actions?.view?.url)}${itemId}`}
        >
          <RemoveRedEye />
        </IconButton>
      )}

      {hasEditUrl && (
        <IconButton
          aria-label="edit"
          color="success"
          component={Link}
          to={`${String(actions?.edit?.url)}${itemId}`}
        >
          <Edit />
        </IconButton>
      )}

      {!!actions?.canDelete && (
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => onDelete(itemId)}
        >
          <Delete />
        </IconButton>
      )}
    </Box>
  )
}

export default memo(ActionCell)
