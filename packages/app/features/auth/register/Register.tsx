import React from 'react'
import { useForm } from 'react-hook-form'
import { TAuthPayload } from 'app/types/auth.types'
import { useRouter } from 'solito/router'
import { AuthLayout } from 'app/layouts/AuthLayout'
import { useRegisterMutation } from 'app/api/services/auth/endpoints'
import { setIsAuth } from 'app/guards/slice/actions'
import { useTypedDispatch } from 'app/layouts/table/hooks/store/useTypedDispatch'



export const Register: React.FC = () => {
  const {control,handleSubmit,reset}=useForm<TAuthPayload>()
  const {push,replace}=useRouter()
  const [register]=useRegisterMutation()
  const dispatch=useTypedDispatch()

  const onLink = () => {
    push('/login')
  }
  const onSendButton = handleSubmit( async (data)=>{
   const res= await register(data)
    if ('data'in res){
      dispatch(setIsAuth(true))
      reset()
      replace('/')
    }
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