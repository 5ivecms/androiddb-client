import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useCategoryEdit } from '../../../core/hooks/category'
import type { CategoryUpdateDto } from '../../../core/models'
import { AdminLayout } from '../../../layouts'

const CategoryEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<CategoryUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, isFetching, onSubmit } = useCategoryEdit(setValue)

  return (
    <AdminLayout>
      {data && !isLoading && !isFetching && (
        <>
          <PageHeader
            left={<PageTitle title={`${data.title}`} />}
            showBackButton
          />
          <Grid spacing={2} container>
            <Grid xs={4} item>
              <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('title', {
                        required: 'Поле не может быть пустым'
                      })}
                      error={!!errors.title}
                      helperText={!!errors.title && errors.title.message}
                      label="Имя категории"
                      placeholder="Имя категории"
                    />
                  </FormControl>
                  <Button type="submit" variant="contained">
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
