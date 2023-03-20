import React, { useEffect } from 'react'
import { AuthLayout } from 'app/layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'
import { useLoginMutation } from 'app/api/services/auth/endpoints'

export const Login: React.FC = () => {
  const {control,handleSubmit,reset}=useForm<TAuthPayload>()
  const {replace}=useRouter()
  const [login,{isLoading}]=useLoginMutation()

  const onLink = () => {
    replace('/registration')
  }
  const onSendButton = handleSubmit( async (data)=>{
  const res= await login(data)
    if ('data' in res){
      reset()
      replace('/')

    }
  })
  return (
    <AuthLayout control={control}
                onLink={onLink}
                onSendButton={onSendButton}
                isLoading={isLoading}/>
  )
}