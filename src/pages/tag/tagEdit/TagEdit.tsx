import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useTagEdit } from '../../../core/hooks/tag'
import { TagUpdateDto } from '../../../core/models/tag.model'
import { AdminLayout } from '../../../layouts'

const TagEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<TagUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, onSubmit } = useTagEdit(setValue)

  return (
    <AdminLayout>
      {!isLoading && (
        <>
          <PageHeader left={<PageTitle title={`Тэг: ${data?.title}`} />} showBackButton />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('title', { required: 'Поле не может быть пустым' })}
                      label="Имя тега"
                      placeholder="Имя тега"
                      error={!!errors.title}
                      helperText={!!errors.title && errors.title.message}
                    />
                  </FormControl>
                  <Button variant="contained" type="submit">
                    Сохранить
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </AdminLayout>
  )
}

export default TagEdit
