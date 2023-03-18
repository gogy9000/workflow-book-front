import { ClassValue } from 'clsx'
import { IInputProps } from 'native-base/lib/typescript/components/primitives/Input/types'
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions
} from 'react-hook-form'

export interface IFieldProps<T extends FieldValues>
  extends Omit<IInputProps, 'onChange' | 'onChangeText' | 'value'> {
  control: Control<T>
  name: FieldPath<T>
  rules?: Omit<RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'disabled'>
  viewClassName?: ClassValue
  label?: string
}