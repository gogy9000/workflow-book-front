import React from 'react'
import { AuthLayout } from 'app/layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'



export const Login: React.FC = () => {
  const {control,handleSubmit}=useForm<TAuthPayload>()
  const {push}=useRouter()

  const onLink = () => {
    push('/registration')
  }
  const onSendButton = handleSubmit( (data)=>{
    console.log(data)
  })
  return (
    <AuthLayout control={control}
                onLink={onLink}
                onSendButton={onSendButton} />
  )
}