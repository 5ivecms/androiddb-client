import { Autocomplete, AutocompletePropsSizeOverrides, CircularProgress, TextField } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useDebounce } from '../../../core/hooks/useDebounce'

interface Props {
  label: string
  name: string
  size?: OverridableStringUnion<'small' | 'medium', AutocompletePropsSizeOverrides>
  searchFunc: (term: string) => Promise<any>
}

const AsyncAutocomplete: FC<Props> = ({ name, label, size, searchFunc }) => {
  const [query, setQuery] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<any[]>([])
  const debouncedQuery = useDebounce(query, 500)

  const handleInputChange = async (_: any, value: any) => {
    setQuery(value)
  }

  const handleChange = (_: any, value: any) => {
    console.log(value)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const fetchData = useCallback(async () => {
    const { data } = await searchFunc(debouncedQuery)
    setOptions(data.items)
  }, [debouncedQuery, searchFunc])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      onInputChange={handleInputChange}
      options={options}
      loading={false}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {false ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default memo(AsyncAutocomplete)
