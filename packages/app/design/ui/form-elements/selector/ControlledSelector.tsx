import React from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'
import { Selector } from 'app/design/ui/form-elements/selector/Selector'
import { ItemType } from 'react-native-dropdown-picker'
import { ViewStyle } from 'react-native'



interface IControlledSelectorProps<T extends FieldValues> {
  control: Control<T>
  rules?: Omit<RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'disabled'>
  name: FieldPath<T>
  isMulti?: boolean
  options:ItemType<any>[]
  style?:ViewStyle
  defaultValue:any[]|any|null
  className?:string
}

export const ControlledSelector = <T extends Record<string, any>>
({ control, rules, name, isMulti,options,style,defaultValue,className }: IControlledSelectorProps<T>) => {

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field:{value,onChange}, fieldState: { error } }) => {
      return  (
          <Selector
            value={value}
            onChange={onChange}
            options={options}
            isMulti={isMulti}
            error={error}
            style={style}
            defaultValue={defaultValue}
            className={className}
          />
        )
      }}

    />
  )
}