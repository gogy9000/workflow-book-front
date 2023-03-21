import React, { memo, useEffect } from 'react'
import { Center, VStack, Text, HStack } from 'app/design/layout'
import { createParam } from 'solito'
import { useFindByIdQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { Layout } from 'app/layouts/Layout'
import { useForm } from 'react-hook-form'
import { Field } from 'app/design/ui/form-elements/field/Field'
import { setForms } from 'app/utils/typedEntries'
import { TTaskResponse } from 'app/types/task.types'

const { useParam } = createParam()
export const TaskEdit: React.FC = memo(() => {
  const [id] = useParam('id')
  const { data } = useFindByIdQuery({ id: id as string }, { skip: !id })
  const { control, setValue } = useForm<TTaskResponse>()
  useEffect(() => {
    setForms<TTaskResponse>(data, setValue)
  }, [data])

  return (
    <Layout isHasPadding>
      <Center>
        {data ? <VStack w={'sm'} space={'xs'} className={'py-3 px-3 items-center  shadow-black-600 rounded-lg  bg-gray-200'}>
          <Field<TTaskResponse> className={'font-semibold py-0 text-lg text-gray-500'} variant={'filled'}
                                control={control} name={'title'} />
          <Field<TTaskResponse> className={'font-semibold py-1 text-lg text-gray-500'} variant={'filled'}
                                control={control} name={'location'} />
          <Field<TTaskResponse> multiline numberOfLines={3} className={'font-semibold py-1 text-lg text-gray-500'}
                                variant={'filled'}
                                control={control} name={'description'} />
          <HStack className={'self-stretch justify-between'}>
            <Text>
              Обн.
              {new Date(data.updatedAt).toLocaleDateString('ru')}
            </Text>
            <Text>
              Созд.
              {new Date(data.updatedAt).toLocaleDateString('ru')}
            </Text>
          </HStack>

        </VStack> : null}
      </Center>
    </Layout>
  )
})