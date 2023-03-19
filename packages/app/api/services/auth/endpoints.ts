import { api } from 'app/api/services/api'

const authEndpoints=api.injectEndpoints({
  endpoints:(build)=>({
    login:build.mutation({
      query:(data)=>({url:'/auth/login',method:'post',data}),

    }),
    register:build.mutation({
      query:(data)=>({url:'/auth/register',method:'post',data})
    }),
  })
})
export const {useLoginMutation,useRegisterMutation}=authEndpoints