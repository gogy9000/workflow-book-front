import React, { memo } from 'react'
import { Layout } from 'app/layouts/Layout'
import { Box, Center, Heading, Text, VStack } from 'app/design/layout'
import { useFindTaskByIdQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { createParam } from 'solito'
import { skipToken } from '@reduxjs/toolkit/query'
import { isFetchBaseQueryError } from 'app/utils/isApiError'
import { Spinner } from 'native-base'


const { useParam } = createParam()

export const ReceivedTask: React.FC = memo(() => {
  const [id] = useParam('id')
  const { data, isLoading, error } = useFindTaskByIdQuery({ id: id as string }, { skip: !id })
  console.log('received', data)
  if (isLoading) {
    return <Spinner size={'lg'} />
  }
  if (error) {
    return <Heading>{isFetchBaseQueryError(error) ? JSON.stringify(error.data) : 'some error'}</Heading>
  }
  return (
    <Layout isLoading={isLoading} isHasPadding>
      {
        data ? (
          <Box>
            <Heading size={'lg'}>Задание</Heading>
            <Center>
              <VStack>
                <Text className={'font-bold text-xl'}>Название: {data.title}</Text>
                <Text className={'font-bold'}>Локация: {data.location}</Text>
                <Text className={'font-bold'}>Задание: {data.description}</Text>
                <Text className={'font-bold'}>Дата выдачи: {new Date(data.createdAt).toLocaleDateString('ru')}</Text>
                <Text className={'font-bold'}>Дата обновления: {new Date(data.updatedAt).toLocaleDateString('ru')}</Text>
              </VStack>
            </Center>
          </Box>

        ) : null
      }

    </Layout>
  )
})