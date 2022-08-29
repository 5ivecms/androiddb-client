import type { FC } from 'react'

import { useCategories } from '../../../core/hooks/category'

const CategoryDataTable: FC = () => {
  const { data } = useCategories()
  console.info(data)
  return <></>
}

export default CategoryDataTable
