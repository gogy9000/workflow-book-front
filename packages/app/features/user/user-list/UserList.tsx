import React, { memo, useEffect } from 'react'
import { Layout } from 'app/layouts/Layout'
import { Button, Heading } from 'app/design/layout'
import { createParam } from 'solito'
import { Table } from 'app/layouts/table/Table'
import { useGetAllUsersQuery } from 'app/api/services/users/users.api'
import { Checkbox } from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import { entries } from 'app/utils/typedEntries'
import { useUpdateMutation } from 'app/api/services/tasks/endpoints/tasksEndpoints'
import { useRouter } from 'solito/router'

const { useParam } = createParam<{ id: string }>()


export const UserList: React.FC = memo(() => {
  const { push } = useRouter()
  const [id] = useParam('id')
  const { control, handleSubmit, setValue } = useForm<{[k:string]:boolean}>()
  const [update] = useUpdateMutation()

  const { usersData,data } = useGetAllUsersQuery
  ('', {
    selectFromResult: ({ data, ...rest }) => ({
      usersData: data ? data.map(user => [
        <Controller
          key={user.email}
          control={control}
          name={String(user.id)}
          render={({ field: { onChange, value } }) =>
            <Checkbox accessibilityLabel={'checkbox'} onChange={onChange} isChecked={value||false} value={String(user.email||'')} />
          }
        />
        ,
        user.email, String(user.banned), String(user.banReason)]) : [],
      data,
      ...rest
    }),
    refetchOnMountOrArgChange:true

  })


  useEffect(()=>{
    if (data){
      data.forEach(({tasks,id:userId})=>{
       const task= tasks.find((task)=>String(task.id)===id)
        if(String(task?.id)===id){
          setValue(String(userId),true)
        }
      })
    }
  },[data])


  const onSubmit = handleSubmit(async (data) => {

    if (!id) return
    const userList = entries(data).reduce((acc: number[], [key, value]) => {
      return value ? [...acc, +key] : acc
    }, [])

    const res = await update({ id, data: { userList } })
    if ('data' in res) {
      push(`/task/${id}`)
    }

  })
  return (
    <Layout>
      <Heading>Users</Heading>
      <Table

        headData={['назначить', 'почта', 'бан', 'причина бана']}
        bodyData={usersData}
      />
      <Button onPress={onSubmit}>OK</Button>
    </Layout>
  )
})