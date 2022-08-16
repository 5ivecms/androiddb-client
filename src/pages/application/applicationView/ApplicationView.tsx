import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useApplication } from '../../../core/hooks/application'
import { AdminLayout } from '../../../layouts'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
}

const ApplicationView: FC = () => {
  const { data } = useApplication()
  if (!data) {
    return null
  }

  return (
    <AdminLayout>
      <PageHeader left={<PageTitle title={data.title} />} showBackButton />

      <Typography component="h6" variant="h5" sx={{ mb: 1 }}>
        Описание
      </Typography>

      <Box>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </Box>

      <Typography component="h6" variant="h5" sx={{ mb: 1 }}>
        Скриншоты
      </Typography>

      <Slider {...settings}>
        {data.screenshots &&
          data.screenshots.map((screenshot) => (
            <div key={`img${screenshot.id}`}>
              <img style={{ maxWidth: '100%' }} src={screenshot.url} alt="img1" />
            </div>
          ))}
      </Slider>
    </AdminLayout>
  )
}

export default ApplicationView
