import React, { memo, useMemo } from 'react'
import { Box, Button, Center, HStack, VStack, Text } from 'app/design/layout'
import { Divider } from 'native-base'

interface IReportAndTaskViewProps {
  title: string
  location: string
  description: string
  createdAt: string
  updatedAt: string
  author?: string
  onNavigate: () => void
  heading: string
  buttonTitle: string
  reportOfficer?: string
  employees?: string[]
}

export const ReportAndTaskView: React.FC<IReportAndTaskViewProps> = memo(({
                                                                            heading,
                                                                            title,
                                                                            location,
                                                                            description,
                                                                            updatedAt,
                                                                            createdAt,
                                                                            author,
                                                                            onNavigate,
                                                                            buttonTitle,
                                                                            reportOfficer,
                                                                            employees
                                                                          }) => {
  const mappedEmployees = useMemo(() => {
    if (!employees) return
    return employees.map((employee) => (<Text key={employee} className={'font-semibold'}>{employee}</Text>))
  }, [employees])
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
          {mappedEmployees ?
            (<VStack>
              <Text className={'font-semibold text-gray-500'}>Ответственные за работу:</Text>
              {mappedEmployees}
            </VStack>)
            : null}
          <VStack>
            <Text className={'font-semibold text-gray-500'}>Создано:</Text>
            <HStack className={'space-x-0.5'}>
              <Text className={'font-semibold'}>
                {new Date(createdAt).toLocaleTimeString('ru')}
              </Text>
              <Text className={'font-semibold'}>
                {new Date(createdAt).toLocaleDateString('ru')}
              </Text>
            </HStack>
          </VStack>
          <VStack>
            <Text className={'font-semibold text-gray-500'}>Обновлено:</Text>
            <HStack className={'space-x-0.5'}>
              <Text className={'font-semibold'}>
                {new Date(updatedAt).toLocaleTimeString('ru')}
              </Text>
              <Text className={'font-semibold'}>
                {new Date(updatedAt).toLocaleDateString('ru')}
              </Text>
            </HStack>
          </VStack>
          {author ?
            (<VStack>
              <Text className={'font-semibold text-gray-500'}>Выдал:</Text>
              <Text className={'font-semibold'}>{author}</Text>
            </VStack>)
            : null}
          {reportOfficer ?
            (<VStack>
              <Text className={'font-semibold text-gray-500'}>Ответственный за выполнение:</Text>
              <Text className={'font-semibold'}>{reportOfficer}</Text>
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