import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { Layout } from 'app/layouts/Layout'
import { VStack } from 'app/design/layout'
import { InputForm } from 'app/design/ui/InputForm/InputForm'
import { useRouter } from 'solito/router'
import { useForm } from 'react-hook-form'
import { TEditInput } from 'app/types/editInput.types'
import { createParam } from 'solito'


const { useParam } = createParam()

export const ReportEdit: React.FC = memo(() => {

  const { push } = useRouter()

  const [id] = useParam('id')
  const { control, setValue, handleSubmit } = useForm<TEditInput>()

  return (
    <Layout isHasPadding>
      {/*<InputForm*/}
      {/*  control={control}*/}
      {/*  inputData={inputData}*/}
      {/*  onNavigate={onNavigateAndSubmit}*/}
      {/*  onSubmit={onSubmit}*/}
      {/*  createdAt={data?.createdAt}*/}
      {/*  updatedAt={data?.updatedAt}*/}
      {/*/>*/}
    </Layout>
  )
})