import { createAsyncThunk } from '@reduxjs/toolkit'
import { storage } from 'app/storage/storage'

export const setIsAuth = createAsyncThunk<boolean, boolean>('authSlice/setIsAuth/thunk', async (isAuth) => {
  await storage.setItem('isAuth', isAuth)
  return isAuth
})

export const setIsInitialized = createAsyncThunk<boolean,void>
('authSlice/setIsInitialized/thunk',async (_,{dispatch})=>{
  const isAuth = await storage.getItem('isAuth')
  await dispatch(setIsAuth(isAuth))
  return  true
})
