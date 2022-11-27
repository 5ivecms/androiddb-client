import { Grid, LinearProgress } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'

import FileHeader from './FileHeader'

interface SingleFileUploadWithProgressProps {
  file: File
  onDelete: (file: File) => void
  progress: number
}

const SingleFileUploadWithProgress: FC<SingleFileUploadWithProgressProps> = ({
  file,
  onDelete,
  progress
}) => {
  return (
    <Grid sx={{ mb: 1 }} xs={12} item>
      <FileHeader file={file} onDelete={onDelete} />
      <LinearProgress
        sx={{ height: 10 }}
        value={progress}
        variant="determinate"
      />
    </Grid>
  )
}

export default memo(SingleFileUploadWithProgress)
