import React, { memo } from 'react'
import {Text,View} from 'app/design/layout'
import { createParam } from 'solito'
import { useFindByIdQuery } from 'app/api/services/tasks/endpoints/tasksEndpoints'

const { useParam } = createParam()
export const TaskEdit: React.FC = memo(() => {
  const [id]=useParam('id')
  const {data}=useFindByIdQuery({id:id as string},{skip:!id})

  console.log(data)
  return (
    <View>
      <Text>
        TaskEdit
      </Text>
    </View>
  )
})