import React, { memo, useEffect } from 'react'
import { createParam } from 'solito'
import { useFindTaskByIdQuery, useUpdateTaskMutation } from 'app/api/services/tasks/endpoints/tasks.api'
import { Layout } from 'app/layouts/Layout'
import { useForm } from 'react-hook-form'
import { setForms } from 'app/utils/typedEntries'
import { useRouter } from 'solito/router'
import { useNavigation } from 'solito/build/router/use-navigation'
import { InputForm } from 'app/design/ui/InputForm/InputForm'
import { TEditInput } from 'app/types/editInput.types'


const { useParam } = createParam()
export const IssuedTask: React.FC = memo(() => {

  const { push } = useRouter()

  const [id] = useParam('id')
  const { control, setValue, handleSubmit } = useForm<TEditInput>()

  const { data, inputData, isSuccess } = useFindTaskByIdQuery({ id: id as string }, {
    skip: !id,
    selectFromResult: ({ data, ...rest }) => {
      const inputData = data ? {
        title: data.title,
        userList: data.userList.map(({ id }) => id),
        location: data.location,
        description: data.description
      } as TEditInput : undefined

      return ({
        options: data ? data.userList.map(({ email, id }) => ({
          label: email,
          value: id
        })) : [],
        data,
        inputData,
        ...rest
      })
    }
  })
  const navigation = useNavigation()
  const isFocused = navigation?.isFocused()

  useEffect(() => {
    if (isSuccess) {
      inputData && setForms<TEditInput>(inputData, setValue)
      // inputData && setUserList(inputData.userList)
    }
  }, [isSuccess, inputData])

  useEffect(() => {
    if (isFocused) {
      inputData && setForms<TEditInput>(inputData, setValue)
      // inputData && setUserList(inputData.userList)
    }
  }, [isFocused])

  const [update] = useUpdateTaskMutation()

  const onSubmit = handleSubmit(async ({ description, location, title }) => {
    const res = await update({ id: id as string, data: { description, location, title, phase: 'ready' } })
    if ('data' in res) {
      push(`/`)
    }
  })
  const onNavigateAndSubmit = handleSubmit(async ({ description, location, title }) => {
    const res = await update({ id: id as string, data: { description, location, title } })
    if ('data' in res) {
      push(`/user-list/${id}/`)
    }
  })


  return (
    <Layout  isHasPadding>
      <InputForm
        control={control}
        inputData={inputData}
        onNavigate={onNavigateAndSubmit}
        onSubmit={onSubmit}
        createdAt={data?.createdAt}
        updatedAt={data?.updatedAt}
        buttonTitle={'Отправить'}
        heading={'Задание'}
      />
    </Layout>
  )
})