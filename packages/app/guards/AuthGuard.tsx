import React, { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelect, isInitializedSelect } from 'app/guards/slice/slice'
import { useRouter } from 'solito/router'
import { useTypedDispatch } from 'app/layouts/table/hooks/store/useTypedDispatch'

import { setIsInitialized } from 'app/guards/slice/actions'


export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useSelector(isAuthSelect)
  const isInitialized = useSelector(isInitializedSelect)
  const dispatch = useTypedDispatch()
  const { replace } = useRouter()


  useEffect(() => {
    dispatch(setIsInitialized())
  }, [])

  useEffect(() => {
    if (!isAuth && isInitialized) {
      replace('/login')
    }
  })

  return (
    <>
      {children}
    </>
  )
}