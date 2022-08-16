import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { PageHeader, PageTitle } from '../../../components/ui'
import { useDeveloperEdit } from '../../../core/hooks/developer'
import { DeveloperUpdateDto } from '../../../core/models/developer.model'
import { AdminLayout } from '../../../layouts'

const DeveloperEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<DeveloperUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, onSubmit } = useDeveloperEdit(setValue)

  return (
    <AdminLayout>
      {!isLoading && (
        <>
          <PageHeader left={<PageTitle title={`${data?.name}`} />} showBackButton />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                      {...register('name', { required: 'Поле не может быть пустым' })}
                      label="Разработчик"
                      placeholder="Разработчик"
                      error={!!errors.name}
                      helperText={!!errors.name && errors.name.message}
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

export default DeveloperEdit
