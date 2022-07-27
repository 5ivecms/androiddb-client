import { Typography } from '@mui/material'
import { FC } from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle: FC<PageTitleProps> = ({ title }) => (
  <Typography variant="h4" component="h1">
    {title}
  </Typography>
)

export default PageTitle
