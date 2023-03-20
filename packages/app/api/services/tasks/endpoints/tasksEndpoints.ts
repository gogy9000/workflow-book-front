import { api } from 'app/api/services/api'
import { TTaskResponse } from 'app/types/task.types'

const tasksEndpoints=api.injectEndpoints({
  endpoints:(build)=>({
    getTasks:build.query<TTaskResponse[],void>({
      query:()=>({method:'get',url:'/task'})
    }),
    findById:build.query<TTaskResponse, { id:string }>({
      query:({id})=>({method:'get',url:`/task/${id}`})
    })
  }),
  overrideExisting:false
})
export const {useGetTasksQuery,useFindByIdQuery}=tasksEndpoints