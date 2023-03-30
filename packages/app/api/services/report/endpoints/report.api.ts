import { api } from 'app/api/services/api'
import { TReport, TReportPayload } from 'app/types/report.types'

const reportApi=api.injectEndpoints({
  endpoints:({query,mutation})=>({
    getAllReports:query<TReport[],void>({
      query:()=>({
        method:'get',
        url:'/reports'
      }),
      providesTags:['updateReport']
    }),
    findReportById:query<TReport,{id:string}>({
      query:({id})=>({
        method:'get',
        url:`/reports/${id}`
      }),
      providesTags:['updateReport']
    }),
    createReport:mutation<TReport,{taskId:number}>({
      query:({taskId})=>({
        method: 'post',
        url: '/reports',
        data:{taskId}
      })
    }),
    updateReport:mutation<TReport, {id:string, data:TReportPayload }>({
      query:({ id, data })=>({
        method: 'put',
        url: `/reports/${id}`,
        data
      }),
      invalidatesTags:['updateReport']
    })
  }),
})

export const {useGetAllReportsQuery,useFindReportByIdQuery,useCreateReportMutation,useUpdateReportMutation}=reportApi