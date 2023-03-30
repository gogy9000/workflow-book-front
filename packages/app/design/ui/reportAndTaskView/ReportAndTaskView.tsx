import React, { memo } from 'react'
import { Box, Button, Center, HStack, VStack, Text } from 'app/design/layout'
import { Divider } from 'native-base'

interface IReportAndTaskViewProps {
  title: string
  location: string
  description: string
  createdAt: string
  updatedAt: string
  manager?: string
  onNavigate: () => void
  heading: string
  buttonTitle: string
}

export const ReportAndTaskView: React.FC<IReportAndTaskViewProps> = memo(({
                                                                            heading,
                                                                            title,
                                                                            location,
                                                                            description,
                                                                            updatedAt,
                                                                            createdAt,
                                                                            manager,
                                                                            onNavigate,
                                                                            buttonTitle
                                                                          }) => {

  return (
    <Box>
      <Center>
        <VStack w={'full'} className={'bg-gray-50  py-3 px-3 space-y-1 rounded-xl shadow'}>
          <Text className={'text-xl font-semibold self-start text-gray-500'}>{heading}</Text>
          <Divider />
          <HStack className={'space-x-1 border border-transparent border-b-gray-300'}>
            <Text className={'font-semibold text-gray-500'}>Название:</Text>
            <Text className={'font-semibold'}>{title}</Text>
          </HStack>

          <HStack className={'space-x-1 border border-transparent border-b-gray-300'}>
            <Text className={'font-semibold text-gray-500'}>Локация:</Text>
            <Text className={'font-semibold'}> {location}</Text>
          </HStack>

          <VStack>
            <Text className={'font-semibold text-gray-500'}>{heading}:</Text>
            <Box className={'border  border-gray-300 rounded py-1 px-1 h-20 '}>
              <Text className={'font-semibold '}> {description}</Text>
            </Box>
          </VStack>
          <VStack>
            <Text className={'font-semibold text-gray-500'}>Создано:</Text>
            <HStack className={'space-x-0.5'}>
              {/*<Text className={'font-semibold text-gray-500'}>время</Text>*/}
              <Text className={'font-semibold'}>
                {new Date(createdAt).toLocaleTimeString('ru')}
              </Text>
              {/*<Text className={'font-semibold text-gray-500'}>дата</Text>*/}
              <Text className={'font-semibold'}>
                {new Date(createdAt).toLocaleDateString('ru')}
              </Text>
            </HStack>
          </VStack>
          <VStack>
            <Text className={'font-semibold text-gray-500'}>Обновлено:</Text>
            <HStack className={'space-x-0.5'}>
              {/*<Text className={'font-semibold text-gray-500'}>время</Text>*/}
              <Text className={'font-semibold'}>
                {new Date(updatedAt).toLocaleTimeString('ru')}
              </Text>
              {/*<Text className={'font-semibold text-gray-500'}>дата</Text>*/}
              <Text className={'font-semibold'}>
                {new Date(updatedAt).toLocaleDateString('ru')}
              </Text>
            </HStack>
          </VStack>
          {manager ?
            (<VStack>
              <Text className={'font-semibold text-gray-500'}>Выдал:</Text>
              <Text className={'font-semibold'}>{manager}</Text>
            </VStack>)
            : null}
          <Divider />
          <Button
            onPress={onNavigate}
            _web={{
              w: '1/4',
              alignSelf: 'end'
            }}>
            {buttonTitle}
          </Button>
        </VStack>
      </Center>
    </Box>
  )
})