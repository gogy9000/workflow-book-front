import { ClassValue } from 'clsx'
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions
} from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface IFieldProps<T extends FieldValues>
  extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  control: Control<T>
  name: FieldPath<T>
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'disabled'
    >
  viewClassName?: ClassValue
}