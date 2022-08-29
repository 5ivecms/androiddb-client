import { Button, FormControl, Grid, Paper, TextField } from '@mui/material'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { PageHeader, PageTitle } from '../../../components/ui'
import { useTagEdit } from '../../../core/hooks/tag'
import type { TagUpdateDto } from '../../../core/models/tag.model'
import { AdminLayout } from '../../../layouts'

const TagEdit: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<TagUpdateDto>({ mode: 'onChange' })

  const { data, isLoading, onSubmit } = useTagEdit(setValue)

  return (
    <AdminLayout>
      {!isLoading && data && (
        <>
          <PageHeader
            left={<PageTitle title={`Тэг: ${String(data?.title)}`} />}
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
                      error={!(errors.title === undefined)}
                      helperText={
                        !(errors.title === undefined) && errors.title.message
                      }
                      label="Имя тега"
                      placeholder="Имя тега"
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

export default TagEdit
