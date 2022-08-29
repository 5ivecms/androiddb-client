import type { FC } from 'react'

import { useDevelopers } from '../../../core/hooks/developer'

const DeveloperDataTable: FC = () => {
  const { data } = useDevelopers()

  console.info(data)

  return <></>
}

export default DeveloperDataTable
