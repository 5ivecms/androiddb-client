import type { SxProps } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

export const dropzoneContainer: SxProps = {
  border: `3px dashed ${blue[200]}`,
  borderRadius: '15px',
  color: grey[400],
  cursor: 'pointer',
  mb: 3,
  p: 3,
  textAlign: 'center',
  width: '100%'
}

export const formControlSx: SxProps = {
  display: 'flex',
  justifyContent: 'flex-end',
  mt: 4,
  width: '100%'
}
