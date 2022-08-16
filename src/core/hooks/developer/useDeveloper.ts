import { useParams } from 'react-router-dom'

export const useDeveloper = () => {
  const params = useParams()
  const { developerId } = params
}
