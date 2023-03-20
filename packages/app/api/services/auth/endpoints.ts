import { api } from 'app/api/services/api'
import { TAuthPayload, TAuthResponse } from 'app/types/auth.types'

const authEndpoints = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TAuthResponse, TAuthPayload>({
      query: (data) => ({
        url: '/auth/login',
        method: 'post',
        data,
      })

    }),
    register: build.mutation<TAuthResponse, TAuthPayload>({
      query: (data) => ({
        url: '/auth/register',
        method: 'post',
        data,
      })
    })
  }),
  overrideExisting: true
})
export const { useLoginMutation, useRegisterMutation } = authEndpoints