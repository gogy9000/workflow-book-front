import React, { memo, useMemo } from 'react'
import { ReportAndTaskView } from 'app/design/ui/reportAndTaskView/ReportAndTaskView'
import { useFindReportByIdQuery } from 'app/api/services/report/endpoints/report.api'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'

interface IReadableReportProps {

}

const { useParam } = createParam()

export const ReadableReport: React.FC<IReadableReportProps> = memo(({}) => {
  const [id] = useParam('id')
  const { push } = useRouter()
  const { data } = useFindReportByIdQuery({ id: id as string }, { skip: !id })

  const employees = useMemo(() => {
   if (!data) return
    return data.userList.map(({email})=>email)
  }, [data])


  const onNavigate = () => {
    if (!data) {
      return
    }
    push(`/received-task/${data.taskId}`)
  }
  return (
    <>
      {
        data ? (
          <ReportAndTaskView
            reportOfficer={data.author?.email}
            employees={employees}
            heading={'Отчет'}
            buttonTitle={'Задание'}
            title={data.title}
            location={data.location}
            description={data.description}
            onNavigate={onNavigate}
            updatedAt={data.updatedAt}
            createdAt={data.createdAt}
          />
        ) : null
      }

    </>
  )
})