import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const overTagsTypes = new Set([

]);
export const api=createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),

  tagTypes: [...overTagsTypes],
  endpoints: () => ({}),
})