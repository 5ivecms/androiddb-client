import type { FC } from 'react'
import { useCallback, useState } from 'react'
import type { FileError } from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

import SingleFileUploadWithProgress from './SingleFileUploadWithProgress'

export interface UploadableFile {
  errors: FileError[]
  file: File
}

const MultipleFileUploadField: FC = () => {
  const [files, setFiles] = useState<UploadableFile[]>([])
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedAccepted = acceptedFiles.map((file) => ({ errors: [], file }))
    setFiles((currentFiles) => [...currentFiles, ...mappedAccepted])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop the files here ...</p>
      </div>
      {files.map((fileWrapper) => (
        <SingleFileUploadWithProgress
          key={`file-${fileWrapper.file.name}`}
          file={fileWrapper.file}
        />
      ))}
    </>
  )
}

export default MultipleFileUploadField
