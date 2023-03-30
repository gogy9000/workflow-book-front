import React, { memo } from 'react'
import { Layout } from 'app/layouts/Layout'
import { Box, Button, Center, Heading, HStack, Text, VStack } from 'app/design/layout'
import { useFindTaskByIdQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { createParam } from 'solito'
import { Divider, Spinner } from 'native-base'
import { useRouter } from 'solito/router'
import { useCreateReportMutation } from 'app/api/services/report/endpoints/report.api'


const { useParam } = createParam()

export const ReceivedTask: React.FC = memo(() => {
  const {push}=useRouter()
  const [id] = useParam('id')
  const { data, isLoading } = useFindTaskByIdQuery({ id: id as string }, { skip: !id })
  const [create]=useCreateReportMutation()

  const onNavigateToReport =async()=>{
    if(!id) return;
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
          <Box>
            <Center>
              <VStack  w={'full'} className={'bg-gray-50  py-3 px-3 space-y-1 rounded-xl shadow'}>
                <Text className={'text-xl font-semibold self-start text-gray-500'}>Задание</Text>
                <Divider />
                <HStack className={'space-x-1 border border-transparent border-b-gray-300'}>
                  <Text className={'font-semibold text-gray-500'}>Название:</Text>
                  <Text className={'font-semibold'}>{data.title}</Text>
                </HStack>

                <HStack className={'space-x-1 border border-transparent border-b-gray-300'}>
                  <Text className={'font-semibold text-gray-500'}>Локация:</Text>
                  <Text className={'font-semibold'}> {data.location}</Text>
                </HStack>

                <VStack>
                  <Text className={'font-semibold text-gray-500'}>Задание:</Text>
                  <Box className={'border  border-gray-300 rounded py-1 px-1 h-20 '}>
                    <Text className={'font-semibold '}> {data.description}</Text>
                  </Box>

                </VStack>
                <VStack>
                  <Text className={'font-semibold text-gray-500'}>Создано:</Text>
                  <HStack className={'space-x-0.5'}>
                    {/*<Text className={'font-semibold text-gray-500'}>время</Text>*/}
                    <Text className={'font-semibold'}>
                      {new Date(data.createdAt).toLocaleTimeString('ru')}
                    </Text>
                    {/*<Text className={'font-semibold text-gray-500'}>дата</Text>*/}
                    <Text className={'font-semibold'}>
                      {new Date(data.createdAt).toLocaleDateString('ru')}
                    </Text>
                  </HStack>
                </VStack>
                <VStack>
                  <Text className={'font-semibold text-gray-500'}>Обновлено:</Text>
                  <HStack className={'space-x-0.5'}>
                    {/*<Text className={'font-semibold text-gray-500'}>время</Text>*/}
                    <Text className={'font-semibold'}>
                      {new Date(data.updatedAt).toLocaleTimeString('ru')}
                    </Text>
                    {/*<Text className={'font-semibold text-gray-500'}>дата</Text>*/}
                    <Text className={'font-semibold'}>
                      {new Date(data.updatedAt).toLocaleDateString('ru')}
                    </Text>
                  </HStack>
                </VStack>
                <VStack>
                  <Text className={'font-semibold text-gray-500'}>Выдал:</Text>
                  <Text className={'font-semibold'}>{data.manager.email}</Text>
                </VStack>
                <Divider/>
                <Button
                  onPress={onNavigateToReport}
                  _web={{
                  w:'1/4',
                  alignSelf:'end'
                }}>
                  Отчет
                </Button>
              </VStack>
            </Center>
          </Box>
        ) : null
      }

    </Layout>
  )
})