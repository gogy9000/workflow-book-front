import React, { memo } from 'react'
import { Text, View } from 'react-native'
import { Button, Center, HStack, VStack } from 'app/design/layout'
import { Field } from 'app/design/ui/form-elements/field/Field'
import { TTaskInput } from 'app/types/task.types'
import { Control } from 'react-hook-form'
import { TEditInput } from 'app/types/editInput.types'

interface IInputFormProps {
  control: Control<TEditInput>
  inputData?: TEditInput
  onSubmit: () => void
  updatedAt?: string
  createdAt?: string
  onNavigate: () => void
}

export const InputForm: React.FC<IInputFormProps> = memo(({
                                                            control,
                                                            onNavigate,
                                                            updatedAt='',
                                                            createdAt='',
                                                            onSubmit,
                                                            inputData
                                                          }) => {

  return (
    <Center>
      {inputData ?
        <VStack w={'sm'} space={'xs'} className={'py-3 px-3 items-stretch  shadow-black-600 rounded-lg  bg-gray-200'}>
          <Field<TEditInput> className={'font-semibold py-0 text-lg text-gray-500'} variant={'filled'}
                             control={control} name={'title'} />
          <Field<TEditInput> className={'font-semibold py-1 text-lg text-gray-500'} variant={'filled'}
                             control={control} name={'location'} />
          <Field<TEditInput> multiline numberOfLines={3} className={'font-semibold py-1 text-lg text-gray-500'}
                             variant={'filled'}
                             control={control} name={'description'} />
          <HStack className={'justify-end space-x-1'}>
            <HStack>
              {inputData ? inputData.userList.map((id) => <Text key={id}>{id}</Text>) : null}
            </HStack>
            {/*<UncontrolledSelector*/}
            {/*  options={options}*/}
            {/*  isMulti={true}*/}
            {/*  value={userList}*/}
            {/*  setValue={setUserList}*/}
            {/*  style={{ flex: 1 }}*/}
            {/*/>*/}
            {/*<Selector<TTaskInput> control={control} name={'userList'} style={{ flex: 1 }} isMulti={true}*/}
            {/*                         options={options} />*/}
            <Button onPress={onNavigate} my={'1'} rounded={'lg'}>Назначить</Button>
          </HStack>
          <Button className={'self-stretch'} onPress={onSubmit} colorScheme={'indigo'}>Отправить</Button>

          <HStack className={'self-stretch justify-between'}>
            <Text>
              Обн.
              {new Date(updatedAt).toLocaleDateString('ru')}
            </Text>
            <Text>
              Созд.
              {new Date(createdAt).toLocaleDateString('ru')}
            </Text>
          </HStack>

        </VStack> : null}
    </Center>
  )
})