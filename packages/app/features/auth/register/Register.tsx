import React from 'react'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'
import { AuthLayout } from 'app/layouts/AuthLayout'



export const Register: React.FC = () => {
  const {control,handleSubmit}=useForm<TAuthPayload>()
  const {push}=useRouter()

  const onLink = () => {
    push('/login')
  }
  const onSendButton = handleSubmit( (data)=>{
    console.log(data)
  })
  return (
    <AuthLayout control={control}
                onLink={onLink}
                onSendButton={onSendButton}
                linkTitle={'Авторизация'}
                buttonTitle={'Отправить'}
                title={'Регистрация'}
    />
  )
}