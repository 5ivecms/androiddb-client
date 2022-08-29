import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useDeveloperEdit } from '../../../core/hooks/developer'
import type { DeveloperUpdateDto } from '../../../core/models/developer.model'
import { AdminLayout } from '../../../layouts'

const DeveloperEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<DeveloperUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, onSubmit } = useDeveloperEdit(setValue)

  return (
    <AdminLayout>
      {!isLoading && data && (
        <>
          <PageHeader
            left={<PageTitle title={`${data?.name}`} />}
            showBackButton
          />
          <Grid spacing={2} container>
            <Grid xs={4} item>
              <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl sx={{ mb: 3 }} fullWidth>
                    <TextField
                      {...register('name', {
                        required: 'Поле не может быть пустым'
                      })}
                      error={!!errors.name}
                      helperText={!!errors.name && errors.name.message}
                      label="Разработчик"
                      placeholder="Разработчик"
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

export default DeveloperEdit
