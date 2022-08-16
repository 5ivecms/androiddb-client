import React, { FC, useCallback, useState } from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import SingleFileUploadWithProgress from './SingleFileUploadWithProgress'

export interface UploadableFile {
  file: File
  errors: FileError[]
}

interface Props {}

const MultipleFileUploadField: FC<Props> = () => {
  const [files, setFiles] = useState<UploadableFile[]>([])
  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    const mappedAccepted = acceptedFiles.map((file) => ({ file, errors: [] }))
    setFiles((currentFiles) => [...currentFiles, ...mappedAccepted])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop the files here ...</p>
      </div>
      {files.map((fileWrapper) => (
        <SingleFileUploadWithProgress file={fileWrapper.file} />
      ))}
    </React.Fragment>
  )
}

export default MultipleFileUploadField
