import React, { memo } from 'react'
import { Heading, HStack, VStack } from 'app/design/layout'
import { Table } from 'app/layouts/table/Table'
import { useGetAllTasksQuery } from 'app/api/services/tasks/endpoints/tasks.api'
import { BodyType } from 'app/layouts/table/table.types'
import { TableActions } from 'app/layouts/table/table-actions/TableActions'


export const OfficerTaskList: React.FC = memo(() => {

  const { data, isLoading } = useGetAllTasksQuery({ category: 'responsible' })
  const bodyData: BodyType = data ? data.map(({ id, location, title, description, createdAt, updatedAt }) => [
    <TableActions href={`/responsible-task/${id}`} key={id} />,
    title,
    location,
    description,
    new Date(createdAt).toLocaleDateString('ru'),
    new Date(updatedAt).toLocaleDateString('ru')
  ]) : []

  return (
    <VStack>
      <HStack className={'justify-between'}>
        <Heading>Ответственные задания</Heading>
      </HStack>
      <Table
        isLoading={isLoading}
        classNameHeadCell={'w-40'}
        classNameBodyCell={'w-40'}
        headData={[
          'Действие',
          'Название',
          'Место',
          'Задание',
          'дата создания',
          'Дата изменения'

        ]}
        bodyData={bodyData}
      />
    </VStack>
  )
})