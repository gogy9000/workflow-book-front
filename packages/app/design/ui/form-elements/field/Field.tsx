import cn from 'clsx'
import React from 'react'
import { Controller } from 'react-hook-form'

import { IFieldProps } from 'app/design/ui/form-elements/field/types'
import { View } from 'app/design/view'
// import { TextInput } from 'app/design/FormElements'
import { Text } from 'app/design/typography'
import { Platform, TextInput as Input } from 'react-native'
import { styled } from 'nativewind'
import { useSx } from 'dripsy'

const TextInput = styled(Input)


export const Field = <T extends Record<string, any>>({
                                                       control,
                                                       rules,
                                                       name,
                                                       viewClassName,
                                                       ...rest
                                                     }: IFieldProps<T>): JSX.Element => {
  const sx = useSx()
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
                 field: { value, onChange, onBlur },
                 fieldState: { error }
               }) => (
        <>
          <View
            className={'border rounded-lg focus:border-red-500'}
          >
            <TextInput
              autoCapitalize={'none'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={(value || '').toString()}
              inputMode={'none'}
              className={'web:outline-none'}
              // style={
              //   Platform.select({
              //     web: {
              //       outlineStyle: 'none',
              //     },
              //   })
              // }
              // className={'border-transparent web:focus:border-red-500 '}
              {...rest}
            />
          </View>
          {error ? <Text className={'text-red'}>{error.message}</Text> : null}
        </>
      )}
    />
  )
}