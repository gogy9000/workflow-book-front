import { axiosRequestBaseQueryFn } from 'app/api/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/dist/query/react'

export const api=createApi({
  reducerPath: 'api',
  baseQuery: axiosRequestBaseQueryFn({
    baseURL:'http://192.168.78.103:9000/api'
  }),

  tagTypes: [],
  endpoints: () => ({}),
})