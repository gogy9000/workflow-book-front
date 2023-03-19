
import { axiosRequestBaseQueryFn } from 'app/api/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/dist/query/react'

const overTagsTypes = new Set([

]);
export const api=createApi({
  reducerPath: 'api',
  baseQuery: axiosRequestBaseQueryFn({
    baseURL:'http://localhost:9000'
  }),

  tagTypes: [...overTagsTypes],
  endpoints: () => ({}),
})