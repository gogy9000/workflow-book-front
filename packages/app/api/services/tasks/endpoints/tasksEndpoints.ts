import { api } from 'app/api/services/api'
import { TTaskResponse } from 'app/types/task.types'

const tasksEndpoints=api.injectEndpoints({
  endpoints:(build)=>({
    getTasks:build.query<TTaskResponse,void>({
      query:()=>({method:'get',url:'/task'})
    })
  }),
  overrideExisting:false
})
export const {useGetTasksQuery}=tasksEndpoints