import { api } from 'app/api/services/api'
import * as url from 'url'
import { TUser } from 'app/types/user.types'

const UsersApi=api.injectEndpoints({
  endpoints:(build)=>({
    getAllUsers:build.query<TUser[],string>({
      query:()=>({
        url:'/users',
        method:'get',
      })
    })
  })
})
export const {useGetAllUsersQuery}=UsersApi