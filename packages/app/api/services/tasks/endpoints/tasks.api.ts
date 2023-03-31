import { api } from 'app/api/services/api'
import { TTaskPayload, TTaskResponse } from 'app/types/task.types'

const getTaskUrl=(param?:string)=>param?`/tasks/${param}`:'/tasks'

const tasksApi=api.injectEndpoints({
  endpoints:(build)=>({
    getAllTasks:build.query<TTaskResponse[], { category?: 'issued' | 'received' }>({
      query:({ category })=>({method:'get',url:getTaskUrl(category)}),
      providesTags:['updateTask','createTask','updateReport']
    }),
    findTaskById:build.query<TTaskResponse, { id:string }>({
      query:({id})=>({method:'get',url:`/tasks/task/${id}`}),
      providesTags:['updateTask','createTask','updateReport']
    }),
    createTask:build.mutation<TTaskResponse,void>({
      query:()=>({
        url:'/tasks',
        method:'post',
        data:{}
      }),
      invalidatesTags:['createTask']
    }),
    updateTask:build.mutation<TTaskResponse,{id:string ,data:TTaskPayload}>({
      query:({id,data})=>({
        method:'put',
        url:`/tasks/${id}`,
        data
      }),
      invalidatesTags:['updateTask']
    })

  }),
  overrideExisting:true
})
export const {useGetAllTasksQuery,useFindTaskByIdQuery,useUpdateTaskMutation,useCreateTaskMutation}=tasksApi