import { Autocomplete, AutocompletePropsSizeOverrides, CircularProgress, TextField } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDebounce } from '../../../core/hooks/useDebounce'

interface Props {
  label: string
  name: string
  size?: OverridableStringUnion<'small' | 'medium', AutocompletePropsSizeOverrides>
  loadOptions: (term: string) => Promise<any>
  onChange: (_: any, value: any) => void
}

const AsyncAutocomplete: FC<Props> = ({ name, label, size, loadOptions, onChange }) => {
  const [query, setQuery] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<any[]>([])
  const debouncedQuery = useDebounce(query, 500)

  const ref = useRef<any>(null)

  const handleInputChange = async (e: any, value: any) => {
    setQuery(value)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  const fetchData = useCallback(async () => {
    const { data } = await loadOptions(debouncedQuery)
    setOptions(data.items)
  }, [debouncedQuery, loadOptions])

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
      onChange={(_, value) => {
        if (ref.current) {
          onChange(ref.current.getAttribute('name'), value)
        }
      }}
      onInputChange={handleInputChange}
      options={options}
      loading={false}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={ref}
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
