import React, { memo } from 'react'
import { ReportAndTaskInputForm } from 'app/design/ui/InputForm/ReportAndTaskInputForm'
import { useEditableReport } from 'app/features/report/editableReport/useEditableReport'

const defaultValue:any[]=[]
export const EditableReport: React.FC = memo(() => {
  const {control,onSubmit,options,createdAt,updatedAt}=useEditableReport()
  return (
      <ReportAndTaskInputForm
        mode={'report'}
        control={control}
        onSubmit={onSubmit}
        createdAt={createdAt}
        updatedAt={updatedAt}
        buttonTitle={'Отправить'}
        heading={'Отчет'}
        defaultValue={defaultValue}
        options={options}
      />
  )
})