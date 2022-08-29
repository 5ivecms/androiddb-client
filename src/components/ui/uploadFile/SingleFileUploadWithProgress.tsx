import type { FC } from 'react'
import { useEffect, useState } from 'react'

interface Props {
  file: File
}

const uploadFile = (
  file: File,
  onProgress: (percentage: number) => void
): Promise<unknown> => {
  const url = '...'

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.addEventListener('load', () => {
      res('Сохранено')
    })

    xhr.addEventListener('onerror', (evt) => {
      rej(evt)
    })

    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100
        onProgress(Math.round(percentage))
      }
    })

    const formData = new FormData()
    formData.append('file', file)

    xhr.send(formData)
  })
}

const SingleFileUploadWithProgress: FC<Props> = ({ file }) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const upload = async (): Promise<void> => {
      const url = await uploadFile(file, setProgress)
      console.info(url)
    }
    upload()
  }, [file])

  return <div>SFU - {progress}</div>
}

export default SingleFileUploadWithProgress
