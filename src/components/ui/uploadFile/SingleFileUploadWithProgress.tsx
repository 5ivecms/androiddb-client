import { FC, useEffect, useState } from 'react'

interface Props {
  file: File
}

const SingleFileUploadWithProgress: FC<Props> = ({ file }) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const upload = async () => {
      const url = await uploadFile(file, setProgress)
      console.log(url)
    }
    upload()
  }, [file])

  return <div>SFU - {progress}</div>
}

const uploadFile = (file: File, onProgress: (percentage: number) => void) => {
  const url = '...'

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.onload = () => {
      res('Сохранено')
    }

    xhr.onerror = (evt) => rej(evt)

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100
        onProgress(Math.round(percentage))
      }
    }

    const formData = new FormData()
    formData.append('file', file)

    xhr.send(formData)
  })
}

export default SingleFileUploadWithProgress
