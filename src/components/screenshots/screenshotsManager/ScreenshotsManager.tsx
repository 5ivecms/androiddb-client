import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material'
import type { FC, ReactElement } from 'react'

import { MultipleFileUploadField } from '../../ui'

interface ScreenshotsManagerProps {
  onClose: () => void
  show: boolean
}

const ScreenshotsManager: FC<ScreenshotsManagerProps> = ({
  show,
  onClose
}): ReactElement => {
  return (
    <Dialog
      maxWidth="lg"
      onClose={onClose}
      open={show}
      sx={{ width: '100%' }}
      fullWidth
    >
      <DialogTitle>Менеджер скриншотов</DialogTitle>
      <DialogContent>
        <Box>
          <MultipleFileUploadField />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ScreenshotsManager
