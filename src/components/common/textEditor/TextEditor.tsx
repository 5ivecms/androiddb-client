import 'suneditor/dist/css/suneditor.min.css'

import type { FC } from 'react'
import type { Control, FieldValues } from 'react-hook-form'
import { useController } from 'react-hook-form'
import SunEditor from 'suneditor-react'

interface TextEditorProps {
  control: Control<FieldValues, string>
  defaultValue: string
  name: string
}

const TextEditor: FC<TextEditorProps> = ({
  name,
  control,
  defaultValue,
  ...props
}) => {
  const { field } = useController({
    control,
    defaultValue: defaultValue || '',
    name
  })

  return (
    <SunEditor
      {...field}
      {...props}
      defaultValue={defaultValue}
      lang="ru"
      setDefaultStyle={
        'font-family: "Roboto","Helvetica","Arial",sans-serif; font-size: 14px;'
      }
    />
  )
}

export default TextEditor
