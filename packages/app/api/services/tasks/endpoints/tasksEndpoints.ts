import { api } from 'app/api/services/api'
import { TTaskPayload, TTaskResponse } from 'app/types/task.types'

const tasksEndpoints=api.injectEndpoints({
  endpoints:(build)=>({
    getTasks:build.query<TTaskResponse[],void>({
      query:()=>({method:'get',url:'/task'})
    }),
    findById:build.query<TTaskResponse, { id:string }>({
      query:({id})=>({method:'get',url:`/task/${id}`}),
      providesTags:['updateTask']
    }),
    update:build.mutation<TTaskResponse,{id:string ,data:TTaskPayload}>({
      query:({id,data})=>({
        method:'put',
        url:`/task/${id}`,
        data
      }),
      invalidatesTags:['updateTask']
    })

  }),
  overrideExisting:true
})
export const {useGetTasksQuery,useFindByIdQuery,useUpdateMutation}=tasksEndpoints