import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useCategoryEdit } from '../../../core/hooks/category'
import { CategoryUpdateDto } from '../../../core/models'
import { AdminLayout } from '../../../layouts'

const CategoryEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CategoryUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, isFetching, onSubmit } = useCategoryEdit(setValue)

  return (
    <AdminLayout>
      {!isLoading && !isFetching && (
        <>
          <PageHeader left={<PageTitle title={`${data?.title}`} />} showBackButton />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('title', { required: 'Поле не может быть пустым' })}
                      label="Имя категории"
                      placeholder="Имя категории"
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

export default CategoryEdit
