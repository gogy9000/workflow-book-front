import { configureStore } from '@reduxjs/toolkit'
import { api } from 'app/api/services/api'

export const store=configureStore({
  reducer:{
    [api.reducerPath]:api.reducer
  },

  middleware:getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch