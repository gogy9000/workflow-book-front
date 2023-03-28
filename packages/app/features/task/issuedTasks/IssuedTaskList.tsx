import React, { memo } from 'react'
import { useCreateTaskMutation, useGetAllTasksQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { BodyType } from 'app/layouts/table/table.types'
import { TableActions } from 'app/layouts/table/table-actions/TableActions'
import {  Button, Heading, HStack } from 'app/design/layout'
import { Table } from 'app/layouts/table/Table'
import { useRouter } from 'solito/router'


export const IssuedTaskList: React.FC = memo(({}) => {
  const {push}=useRouter()
  const { data, isLoading } = useGetAllTasksQuery({ category:'issued' })
  const bodyData: BodyType = data ? data.map(({ id, location, title, description, createdAt, updatedAt }) => [
    <TableActions href={`/issued-task/${id}`} key={id} />, title, location, description,
    new Date(createdAt).toLocaleDateString('ru'),
    new Date(updatedAt).toLocaleDateString('ru')
  ]) : []
  const [create,{isLoading:isLoadingCreate}]=useCreateTaskMutation()

  const onAddButton= async ()=>{
  const res= await create()
    if('data' in res ){
      push({
        pathname:`/issued-task/${res.data.id}`,
      })
    }
  }
  return (
    <>
      <HStack className={'justify-between'}>
        <Heading>Выданные задания</Heading>
        <Button isLoading={isLoadingCreate} onPress={onAddButton}>add</Button>
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
    </>
  )
})