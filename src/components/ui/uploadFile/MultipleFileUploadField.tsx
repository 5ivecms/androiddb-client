import { Box, Button } from '@mui/material'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import type { FileError } from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

import { FileService } from '../../../core/services/file.service'
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress'
import { dropzoneContainer, formControlSx } from './style.sx'

const uploadFile = async (
  file: File,
  onProgress: (percentage: number) => void
): Promise<string> => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await FileService.upload(formData, onProgress)
  return response.data
}

export interface UploadableFile {
  errors: FileError[]
  file: File
  progress?: number
  url?: string
}

const MultipleFileUploadField: FC = () => {
  const [files, setFiles] = useState<UploadableFile[]>([])

  const onDrop = useCallback((acceptedFiles: File[]): void => {
    const mappedAccepted = acceptedFiles.map((file) => ({ errors: [], file }))
    setFiles((currentFiles) => {
      console.info('ssss')
      return [...currentFiles, ...mappedAccepted]
    })
  }, [])

  const onDelete = useCallback((file: File): void => {
    setFiles((current) =>
      current.filter((fileWrapper) => fileWrapper.file !== file)
    )
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const handleUpload = async (): Promise<void> => {
    await Promise.all(files.map((file) => {}))
  }

  return (
    <Box>
      <Box {...getRootProps()} sx={dropzoneContainer}>
        <input {...getInputProps()} />
        <p>Drop the files here ...</p>
      </Box>

      {files.map((fileWrapper, index) => (
        <SingleFileUploadWithProgress
          // eslint-disable-next-line react/no-array-index-key
          key={`file-${index}`}
          file={fileWrapper.file}
          onDelete={onDelete}
          progress={0}
        />
      ))}

      <Box sx={formControlSx}>
        <Button onClick={handleUpload} variant="contained">
          Загрузить
        </Button>
      </Box>
    </Box>
  )
}

export default MultipleFileUploadField
