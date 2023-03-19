import React from 'react'
import { AuthLayout } from 'app/layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'
import { useLoginMutation } from 'app/api/services/auth/endpoints'



export const Login: React.FC = () => {
  const {control,handleSubmit}=useForm<TAuthPayload>()
  const {push}=useRouter()
  const [login,{data}]=useLoginMutation()
  console.log(data)

  const onLink = () => {
    push('/registration')
  }
  const onSendButton = handleSubmit( (data)=>{
    login(data)
  })
  return (
    <AuthLayout control={control}
                onLink={onLink}
                onSendButton={onSendButton} />
  )
}