import { configureStore } from '@reduxjs/toolkit'
import { api } from 'app/api/services/api'
import { authReducer } from 'app/guards/slice/slice'


export const store=configureStore({
  reducer:{
    authReducer,
    [api.reducerPath]:api.reducer
  },
  middleware:getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch