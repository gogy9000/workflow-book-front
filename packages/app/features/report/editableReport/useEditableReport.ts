import { useRouter } from 'solito/router'
import { useForm } from 'react-hook-form'
import { TEditInput } from 'app/types/editInput.types'
import { useFindReportByIdQuery, useUpdateReportMutation } from 'app/api/services/report/endpoints/report.api'
import { createParam } from 'solito'
import { useEffect, useMemo } from 'react'
import { setForms } from 'app/utils/typedEntries'
import { TReportPayload } from 'app/types/report.types'

const { useParam } = createParam()
export const useEditableReport = () => {
  const { back } = useRouter()

  const [id] = useParam('id')

  const { control, setValue, handleSubmit } = useForm<TEditInput>()

  const { data: report } = useFindReportByIdQuery({ id: id as string }, { skip: !id })

  const inputData = useMemo<TEditInput | undefined>(() => {
    if (!report) return;
    const { id, title, location, description, userList } = report
    return { id, title, location, description, userList: userList.map(({ id }) => id) }
  }, [report])

  useEffect(()=>{
    if(inputData){
       setForms<TEditInput>(inputData, setValue)
    }
  },[inputData])

  const [update]=useUpdateReportMutation()

  const onSubmit = handleSubmit(async (data) => {
    if (id && report){
      const {title,userList,location,description}=data
      const payload:TReportPayload={title,userList,location,description,taskId:report.taskId,phase:'ready'}
      const res=await update({id, data:payload})
      if ('data' in res){
        back()
      }
    }

  })
  return { control, onSubmit, inputData, createdAt: report?.createdAt, updatedAt: report?.updatedAt }
}