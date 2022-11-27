import { Button, Grid } from '@mui/material'
import type { FC } from 'react'

export interface FileHeaderProps {
  file: File
  onDelete: (file: File) => void
}

const FileHeader: FC<FileHeaderProps> = ({ file, onDelete }) => {
  return (
    <Grid
      alignContent="center"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      container
    >
      <Grid item>{file.name}</Grid>
      <Grid item>
        <Button onClick={() => onDelete(file)} size="small">
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

export default FileHeader
