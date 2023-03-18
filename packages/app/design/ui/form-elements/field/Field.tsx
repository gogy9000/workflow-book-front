import React from 'react'
import { Controller } from 'react-hook-form'

import { IFieldProps } from 'app/design/ui/form-elements/field/types'
import { Input } from 'app/design/layout'
import { FormControl } from 'native-base'


export const Field = <T extends Record<string, any>>({
                                                       control,
                                                       rules,
                                                       name,
                                                       viewClassName,
                                                       label,
                                                       ...rest
                                                     }: IFieldProps<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
                 field: { value, onChange, onBlur },
                 fieldState: { error }
               }) => (
        <FormControl>
          {label ? <FormControl.Label>{label}</FormControl.Label> : null}
          <Input
            autoCapitalize={'none'}
            onChangeText={(val) => onChange(val)}
            onBlur={onBlur}
            value={(value || '').toString()}
            variant={'outline'}
            {...rest}
          />
          {error ? <FormControl.ErrorMessage className={'text-red'}>{error.message}</FormControl.ErrorMessage> : null}
        </FormControl>
      )}
    />
  )
}