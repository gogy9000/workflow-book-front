import React from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'
import { Selector } from 'app/design/ui/form-elements/selector/Selector'
import { ItemType } from 'react-native-dropdown-picker'


interface IControlledSelectorProps<T extends FieldValues> {
  control: Control<T>
  rules?: Omit<RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'disabled'>
  name: FieldPath<T>
  isMulti: boolean
  options:ItemType<any>[]
}

export const ControlledSelector = <T extends Record<string, any>>
({ control, rules, name, isMulti,options }: IControlledSelectorProps<T>) => {

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Selector
          field={field}
          options={options}
          isMulti={isMulti}
          error={error}
          // style={{
          //   zIndex: 11
          // }}
        />
      )}

    />
  )
}