import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { TextEditor } from '../../../components/common'

import AsyncAutocomplete from '../../../components/common/asyncAutocomplete/AsyncAutocomplete'
import { MultipleFileUploadField, PageHeader, PageTitle } from '../../../components/ui'
import { useApplicationEdit } from '../../../core/hooks/application'
import { ApplicationUpdateDto } from '../../../core/models'
import { DeveloperService } from '../../../core/services'
import { AdminLayout } from '../../../layouts'

const ApplicationEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm<ApplicationUpdateDto>({ mode: 'onChange' })

  const { onSubmit, data, isLoading, isFetching } = useApplicationEdit(setValue)

  console.log(data)

  return (
    <AdminLayout>
      {!isLoading && !isFetching && data && (
        <>
          <PageHeader left={<PageTitle title={data.title} />} showBackButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('title', { required: 'Поле не может быть пустым' })}
                      label="Имя тега"
                      placeholder="Имя тега"
                      error={!!errors.title}
                      helperText={!!errors.title && errors.title.message}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('pdalifeUrl', { required: 'Поле не может быть пустым' })}
                      label="Ссылка на pdflife"
                      placeholder="Ссылка на pdflife"
                      error={!!errors.pdalifeUrl}
                      helperText={!!errors.pdalifeUrl && errors.pdalifeUrl.message}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('thumb', { required: 'Поле не может быть пустым' })}
                      label="Миниатюра"
                      placeholder="Миниатюра"
                      error={!!errors.thumb}
                      helperText={!!errors.thumb && errors.thumb.message}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('googlePlayUrl', { required: 'Поле не может быть пустым' })}
                      label="Google Play"
                      placeholder="Google Play"
                      error={!!errors.googlePlayUrl}
                      helperText={!!errors.googlePlayUrl && errors.googlePlayUrl.message}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <AsyncAutocomplete
                      name="developerId"
                      label="Разработчик"
                      size="medium"
                      loadOptions={(term) => DeveloperService.search({ search: { name: term } })}
                      onChange={() => console.log()}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('lang')}
                      label="Язык"
                      placeholder="Язык"
                      error={!!errors.lang}
                      helperText={!!errors.lang && errors.lang.message}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextEditor control={control} name="description" defaultValue={data.description} />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextEditor control={control} name="shortDescription" defaultValue={data.shortDescription} />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <MultipleFileUploadField />
                </Grid>
              </Grid>

              <Grid item xs={12}></Grid>

              <Button variant="contained" type="submit">
                Сохранить
              </Button>
            </Paper>
          </form>
        </>
      )}
    </AdminLayout>
  )
}

export default ApplicationEdit
