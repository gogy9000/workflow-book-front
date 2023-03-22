import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppRootStateType } from 'app/store'
import { setIsAuth, setIsInitialized } from 'app/guards/slice/actions'

const authSlice=createSlice({
  name:'authSlice',
  initialState:{isAuth:false,isInitialized:false},
  reducers:{
  },
  extraReducers:(build)=>{
    build
      .addCase(setIsAuth.fulfilled,(state,action:PayloadAction<boolean> )=>{
      state.isAuth=action.payload
    })
      .addCase(setIsInitialized.fulfilled,(state,action:PayloadAction<boolean>)=>{
        state.isInitialized=action.payload
      })
  }
})
export const isAuthSelect=(state:AppRootStateType)=>state.authReducer.isAuth
export const isInitializedSelect=(state:AppRootStateType)=>state.authReducer.isInitialized

export const authReducer=authSlice.reducer