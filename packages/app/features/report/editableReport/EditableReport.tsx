import React, { memo } from 'react'
import { Layout } from 'app/layouts/Layout'
import { InputForm } from 'app/design/ui/InputForm/InputForm'
import { useEditableReport } from 'app/features/report/editableReport/useEditableReport'


export const EditableReport: React.FC = memo(() => {
  const {control,onSubmit,inputData,createdAt,updatedAt}=useEditableReport()

  return (
    <Layout isHasPadding>
      <InputForm
        control={control}
        inputData={inputData}
        onNavigate={()=>{}}
        onSubmit={onSubmit}
        createdAt={createdAt}
        updatedAt={updatedAt}
        buttonTitle={'Отправить'}
        heading={'Отчет'}
      />
    </Layout>
  )
})