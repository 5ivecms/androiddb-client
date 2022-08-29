import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import Slider from 'react-slick'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useApplication } from '../../../core/hooks/application'
import { AdminLayout } from '../../../layouts'

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 4,
  speed: 500
}

const ApplicationView: FC = () => {
  const { data } = useApplication()

  if (!data) {
    return <></>
  }

  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title={data.title} />} showBackButton />

      <Typography component="h6" sx={{ mb: 1 }} variant="h5">
        Описание
      </Typography>

      <Box />

      <Typography component="h6" sx={{ mb: 1 }} variant="h5">
        Скриншоты
      </Typography>

      <Slider {...settings}>
        {data.screenshots !== undefined && (
          <>
            {data.screenshots.map((screenshot) => (
              <div key={`img${screenshot.id}`}>
                <img
                  alt="img1"
                  src={screenshot.url}
                  style={{ maxWidth: '100%' }}
                />
              </div>
            ))}
          </>
        )}
      </Slider>
    </AdminLayout>
  )
}

export default ApplicationView
