import React, { memo, useEffect, useMemo } from 'react'
import { createParam } from 'solito'
import { useFindTaskByIdQuery, useUpdateTaskMutation } from 'app/api/services/tasks/endpoints/tasks.api'
import { Layout } from 'app/layouts/Layout'
import { useForm } from 'react-hook-form'
import { setForms } from 'app/utils/typedEntries'
import { useRouter } from 'solito/router'
import { useNavigation } from 'solito/build/router/use-navigation'
import { ReportAndTaskInputForm } from 'app/design/ui/InputForm/ReportAndTaskInputForm'
import { TEditInput } from 'app/types/editInput.types'
import { useGetAllUsersQuery } from 'app/api/services/users/users.api'
import { ItemType } from 'react-native-dropdown-picker'
import { TTaskInput } from 'app/types/task.types'


const { useParam } = createParam()
export const IssuedTask: React.FC = memo(() => {

  const { push } = useRouter()

  const [id] = useParam('id')
  const { control, setValue, handleSubmit } = useForm<TEditInput>()
  const { data: users } = useGetAllUsersQuery('')

  const options = useMemo<ItemType<any>[]>(() => {
    if (!users) {
      return []
    }
    return users.map(({ email, id }) => (
      { label: email, value: id }))
  }, [users])

  const { data, isSuccess } = useFindTaskByIdQuery({ id: id as string }, {
    skip: !id
  })

  const inputData = useMemo(() => {
    if (!data) return
    const res: TEditInput = {
      title: data.title,
      userList: data.userList.map(({ id }) => id),
      location: data.location,
      description: data.description,
      reportOfficerId: data.reportOfficerId
    }
    return res
  }, [data])

  const defaultSelectValue = inputData?.userList || []

  const navigation = useNavigation()
  const isFocused = navigation?.isFocused()

  useEffect(() => {
    if (isSuccess) {
      inputData && setForms<TEditInput>(inputData, setValue)
    }
  }, [isSuccess, inputData])

  useEffect(() => {
    if (isFocused) {
      inputData && setForms<TEditInput>(inputData, setValue)
    }
  }, [isFocused])

  const [update] = useUpdateTaskMutation()

  const onSubmit = handleSubmit(async (data) => {
    const res = await update({
      id: id as string,
      data: { ...data, phase: 'ready' }
    })
    if ('data' in res) {
      push(`/`)
    }
  })

  return (
    <Layout className={'bg-gray-300'} isHasPadding>
      <ReportAndTaskInputForm
        mode={'task'}
        control={control}
        onSubmit={onSubmit}
        createdAt={data?.createdAt}
        updatedAt={data?.updatedAt}
        buttonTitle={'Отправить'}
        heading={'Задание'}
        options={options}
        defaultValue={defaultSelectValue}
      />
    </Layout>
  )
})