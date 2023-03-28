import { api } from 'app/api/services/api'
import { TReport, TReportPayload } from 'app/types/report.types'

const reportApi=api.injectEndpoints({
  endpoints:({query,mutation})=>({
    getAllReports:query<TReport[],void>({
      query:()=>({
        method:'get',
        url:'/reports'
      })
    }),
    createReport:mutation<TReport,void>({
      query:()=>({
        method: 'post',
        url: '/reports',
        data:{}
      })
    }),
    updateReport:mutation<TReport, {id:number, data:TReportPayload }>({
      query:({ id, data })=>({
        method: 'post',
        url: `/reports/${id}`,
        data
      })
    })
  }),
})

export const {useGetAllReportsQuery}=reportApi