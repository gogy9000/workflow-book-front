import React from 'react'
import { AuthLayout } from 'app/layouts/AuthLayout'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'
import { useLoginMutation } from 'app/api/services/auth/endpoints'
import { useTypedDispatch } from 'app/layouts/table/hooks/store/useTypedDispatch'
import { setIsAuth } from 'app/guards/slice/actions'

export const Login: React.FC = () => {
  const {control,handleSubmit,reset}=useForm<TAuthPayload>()
  const {replace,push}=useRouter()
  const [login,{isLoading}]=useLoginMutation()
  const dispatch=useTypedDispatch()
  const onLink = () => {
    push('/registration')
  }
  const onSendButton = handleSubmit( async (data)=>{
  const res= await login(data)
    if ('data' in res){
      dispatch(setIsAuth(true))
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