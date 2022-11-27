import {
  Box,
  Button,
  FormControl,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ScreenshotsManager } from '../../../components/screenshots'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useApplicationEdit } from '../../../core/hooks/application'
import type { ApplicationUpdateDto } from '../../../core/models'
import { AdminLayout } from '../../../layouts'

const REQUIRED_FIELD_ERROR = 'Поле не может быть пустым'

const ApplicationEdit: FC = () => {
  const [showScreenshotManager, setShowScreenshotManager] =
    useState<boolean>(false)

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<ApplicationUpdateDto>()

  const { onSubmit, data, isLoading, isFetching } = useApplicationEdit(setValue)

  const onCloseScreenshotsManager = (): void => {
    setShowScreenshotManager(false)
  }

  return (
    <AdminLayout>
      {!isLoading && !isFetching && data && (
        <>
          <PageHeader left={<PageTitle title={data.title} />} showBackButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={{ p: 3 }}>
              <Grid spacing={2} container>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('title', {
                        required: REQUIRED_FIELD_ERROR
                      })}
                      error={!!errors.title}
                      helperText={!!errors.title && errors?.title?.message}
                      label="Имя тега"
                      placeholder="Имя тега"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('pdalifeUrl', {
                        required: REQUIRED_FIELD_ERROR
                      })}
                      error={errors.pdalifeUrl !== undefined}
                      helperText={
                        errors.pdalifeUrl !== undefined &&
                        errors.pdalifeUrl.message
                      }
                      label="Ссылка на pdflife"
                      placeholder="Ссылка на pdflife"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('thumb', {
                        required: REQUIRED_FIELD_ERROR
                      })}
                      error={errors.thumb !== undefined}
                      helperText={
                        errors.thumb !== undefined && errors.thumb.message
                      }
                      label="Миниатюра"
                      placeholder="Миниатюра"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('googlePlayUrl', {
                        required: REQUIRED_FIELD_ERROR
                      })}
                      error={errors.googlePlayUrl !== undefined}
                      helperText={
                        errors.googlePlayUrl !== undefined &&
                        errors.googlePlayUrl.message
                      }
                      label="Google Play"
                      placeholder="Google Play"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth />
                </Grid>
                <Grid xs={6} item>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('lang')}
                      error={errors.lang !== undefined}
                      helperText={
                        errors.lang !== undefined && errors.lang.message
                      }
                      label="Язык"
                      placeholder="Язык"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} item>
                  <FormControl sx={{ mb: 3 }} fullWidth />
                </Grid>
                <Grid xs={12} item>
                  <FormControl sx={{ mb: 3 }} fullWidth />
                </Grid>

                <Box
                  sx={{
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
                    width: '100%'
                  }}
                >
                  <Typography variant="h4">Скриншоты</Typography>
                  <Button
                    onClick={() => setShowScreenshotManager(true)}
                    variant="contained"
                  >
                    Добавить
                  </Button>
                </Box>

                <ImageList cols={3} sx={{ width: '100%' }}>
                  {data?.screenshots !== undefined &&
                    data.screenshots.map((screenshot) => (
                      <ImageListItem key={screenshot.url}>
                        <img
                          alt=""
                          loading="lazy"
                          src={`${screenshot.url}?w=164&h=164&fit=crop&auto=format`}
                          srcSet={`${screenshot.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
              </Grid>

              <Grid xs={12} item />

              <Button type="submit" variant="contained">
                Сохранить
              </Button>
            </Paper>
          </form>
        </>
      )}

      <ScreenshotsManager
        onClose={onCloseScreenshotsManager}
        show={showScreenshotManager}
      />
    </AdminLayout>
  )
}

export default ApplicationEdit
