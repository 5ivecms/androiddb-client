import { useParams } from 'react-router-dom'

export const useDeveloper = (): void => {
  const params = useParams()
  const { developerId } = params
  console.info(developerId)
}
