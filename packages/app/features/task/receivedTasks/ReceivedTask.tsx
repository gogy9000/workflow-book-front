import React, { memo } from 'react'
import { Layout } from 'app/layouts/Layout'
import { useFindTaskByIdQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { createParam } from 'solito'
import { Spinner } from 'native-base'
import { useRouter } from 'solito/router'
import { useCreateReportMutation } from 'app/api/services/report/endpoints/report.api'
import { ReportAndTaskView } from 'app/design/ui/reportAndTaskView/ReportAndTaskView'


const { useParam } = createParam()

export const ReceivedTask: React.FC = memo(() => {
  const {push}=useRouter()
  const [id] = useParam('id')
  const { data, isLoading } = useFindTaskByIdQuery({ id: id as string }, { skip: !id })
  const [create]=useCreateReportMutation()

  const onNavigateToReport =async()=>{
    if(!id) return;
    if(data && data.report && data.report.taskId){
      push(`/read-report/${data.report.id}`)
      return;
    }
    if(data && data.report && data.report.id){
      push(`/write-report/${data.report.id}`)
      return;
    }
    const res= await create({taskId:+id})
    if ('data' in res){
      push(`/write-report/${res.data.id}`)
    }
  }

  if (isLoading) {
    return <Spinner size={'lg'} />
  }

  return (
    <Layout isLoading={isLoading} className={'bg-gray-200'} isHasPadding>
      {
        data ? (
          <ReportAndTaskView
            buttonTitle={"Отчет"}
            manager={data.manager.email}
            heading={'Задание'}
            title={data.title}
            location={data.location}
            description={data.description}
            onNavigate={onNavigateToReport}
            updatedAt={data.updatedAt}
            createdAt={data.createdAt}
          />
        ) : null
      }

    </Layout>
  )
})