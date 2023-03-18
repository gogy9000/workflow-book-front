import React, { memo } from 'react'
import { View } from 'app/design/view'
import { Text } from 'app/design/typography'
import { useForm } from 'react-hook-form'
import { Field } from 'app/design/ui/form-elements/field/Field'
import { Row } from 'app/design/layout'


interface IAuthLayoutProps {
  title?:string
  onLink?:()=>void
  onSendButton?:()=>void
}


export const AuthLayout: React.FC<IAuthLayoutProps> =memo(({onLink,title,onSendButton }) => {
    const {control}=useForm()
  return (
    <View className={'flex-1  items-center justify-center'}>
      <View className={'w-1/3 justify-between h-20 border border-gray-400 space-x-2'}>
             <Field control={control} name={'email'} />
             <Field control={control} name={'password'} />
      </View>
      <Text>
        AuthLayout
      </Text>
    </View>
  )
})