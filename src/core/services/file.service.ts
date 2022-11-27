import type { AxiosResponse } from 'axios'

import { axiosPublic } from '../api/api.instances'
import { fileApiUrl } from '../config/api-routes.config'

export const FileService = {
  upload: (
    data: FormData,
    onProgress: (progress: number) => void
  ): Promise<AxiosResponse<string>> => {
    return axiosPublic.post<string>(fileApiUrl.upload(), data, {
      onUploadProgress: (
        progressEvent: ProgressEvent<XMLHttpRequestEventTarget>
      ) => {
        if (progressEvent.lengthComputable) {
          const percentage = (progressEvent.loaded / progressEvent.total) * 100
          onProgress(Math.round(percentage))
        }
      }
    })
  }
}
