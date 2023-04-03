import React, { memo, useMemo } from 'react'
import { useFindTaskByIdQuery } from 'app/api/services/tasks/endpoints/tasks.api'
import { createParam } from 'solito'
import { Spinner } from 'native-base'
import { useRouter } from 'solito/router'
import { useCreateReportMutation } from 'app/api/services/report/endpoints/report.api'
import { ReportAndTaskView } from 'app/design/ui/reportAndTaskView/ReportAndTaskView'


const { useParam } = createParam()

export const ReceivedTask: React.FC = memo(() => {
  const { push } = useRouter()
  const [id] = useParam('id')
  const { data, isLoading } = useFindTaskByIdQuery({ id: id as string }, { skip: !id })
  const [create] = useCreateReportMutation()

  const employees=useMemo(()=>{
    if (!data) return
    return data.userList.map(({email})=>email)
  },[data])

  const onNavigateToReport = async () => {
    if (!id) return;
    if (data && data.phase === 'creation') {
      console.log('задание не подписано')
      return
    }
    if (data && data.report && data.report.phase === 'ready') {
      push(`/read-report/${data.report.id}`)
      return
    }

    if (data && data.report && data.report.id) {
      push(`/write-report/${data.report.id}`)
      return
    }
    const res = await create({ taskId: +id })
    if ('data' in res) {
      push(`/write-report/${res.data.id}`)
    }
  }

  if (isLoading) {
    return <Spinner size={'lg'} />
  }
  return (
    <>
      {
        data ? (
          <ReportAndTaskView
            reportOfficer={data.reportOfficer?.email}
            buttonTitle={'Отчет'}
            author={data.author?.email}
            heading={'Задание'}
            title={data.title}
            location={data.location}
            description={data.description}
            onNavigate={onNavigateToReport}
            updatedAt={data.updatedAt}
            createdAt={data.createdAt}
            employees={employees}
          />
        ) : null
      }
    </>
  )
})