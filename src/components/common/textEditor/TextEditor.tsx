import { FC } from 'react'
import { useController } from 'react-hook-form'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

interface TextEditorProps {
  name: string
  control: any
  defaultValue: string
}

const TextEditor: FC<TextEditorProps> = ({ name, control, defaultValue, ...props }) => {
  const {
    field: { onChange, onBlur, name: InputName, value },
  } = useController({ name, control, rules: { required: true }, defaultValue: defaultValue || '' })

  return (
    <SunEditor
      {...props}
      onChange={onChange}
      onBlur={onBlur}
      name={InputName}
      lang="ru"
      defaultValue={value}
      setDefaultStyle={'font-family: "Roboto","Helvetica","Arial",sans-serif; font-size: 14px;'}
    />
  )
}

export default TextEditor
