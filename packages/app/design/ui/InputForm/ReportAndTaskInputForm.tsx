import React, { memo } from 'react'
import { Button, Center, HStack, VStack, Text } from 'app/design/layout'
import { Field } from 'app/design/ui/form-elements/field/Field'
import { Control } from 'react-hook-form'
import { TEditInput } from 'app/types/editInput.types'
import { Divider } from 'native-base'
import { Selector } from 'app/design/ui/form-elements/selector'
import { NativeBaseSelector } from 'app/design/ui/form-elements/nativeBaseSelector/NativeBaseSelector'
import { ItemType } from 'react-native-dropdown-picker'

interface IInputFormProps {
  control: Control<TEditInput>
  onSubmit: () => void
  updatedAt?: string
  createdAt?: string
  buttonTitle: string
  heading: string
  options: ItemType<any>[]
  defaultValue: any
}

export const ReportAndTaskInputForm: React.FC<IInputFormProps> = memo(({
                                                            control,
                                                            updatedAt = '',
                                                            createdAt = '',
                                                            onSubmit,
                                                            buttonTitle,
                                                            heading,
                                                            options,
                                                            defaultValue
                                                          }) => {

  return (

    <Center>
      <VStack w={'full'} className={'bg-gray-50  py-3 px-3 space-y-1 rounded-xl shadow'}>
        <Text className={'text-xl font-semibold self-start text-gray-500'}>{heading}</Text>
        <Divider />
        <VStack className={'items-start'}>
          <Text className={'font-semibold text-gray-500'}>Название:</Text>
          <Field<TEditInput> fontWeight={'semibold'} size={'md'} variant={'outline'} control={control} name={'title'} />
        </VStack>

        <VStack className={'items-start'}>
          <Text className={'font-semibold text-gray-500'}>Локация:</Text>
          <Field<TEditInput> fontWeight={'semibold'} size={'md'} variant={'outline'} control={control}
                             name={'location'} />
        </VStack>

        <VStack>
          <Text className={'font-semibold text-gray-500'}>{heading}:</Text>
          <Field<TEditInput>
            fontWeight={'semibold'}
            size={'md'}
            variant={'outline'}
            multiline numberOfLines={5}
            control={control}
            name={'description'} />
        </VStack>
        <VStack className={'items-start'}>
          <Text className={'font-semibold text-gray-500'}>{'Выполняющие задание'}:</Text>
          <Selector<TEditInput>
            control={control}
            name={'userList'}
            isMulti={true}
            options={options}
            className={'w-full'}
            defaultValue={defaultValue}
          />
        </VStack>

        <VStack className={'items-start'}>
          <Text className={'font-semibold text-gray-500'}>{'Ответственный за выполнение'}:</Text>
          <Selector<TEditInput>
            control={control}
            name={'reportOfficerId'}
            isMulti={false}
            options={options}
            className={'w-full'}
            defaultValue={defaultValue}
          />
        </VStack>

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
        {/*{manager ?*/}
        {/*  (<VStack>*/}
        {/*    <Text className={'font-semibold text-gray-500'}>Выдал:</Text>*/}
        {/*    <Text className={'font-semibold'}>{manager}</Text>*/}
        {/*  </VStack>)*/}
        {/*  : null}*/}
        <Divider />
        <Button
          onPress={onSubmit}
          _web={{
            w: '1/4',
            alignSelf: 'end'
          }}>
          {buttonTitle}
        </Button>
      </VStack>
    </Center>
  )
})

// <Center>
//   {inputData ?
//     <VStack w={'sm'} space={'xs'} className={'py-3 px-3 items-stretch  shadow-black-600 rounded-lg  bg-gray-200'}>
//       <Field<TEditInput> className={'font-semibold py-0 text-lg text-gray-500'} variant={'filled'}
//                          control={control} name={'title'} />
//       <Field<TEditInput> className={'font-semibold py-1 text-lg text-gray-500'} variant={'filled'}
//                          control={control} name={'location'} />
//       <Field<TEditInput> multiline numberOfLines={3} className={'font-semibold py-1 text-lg text-gray-500'}
//                          variant={'filled'}
//                          control={control} name={'description'} />
//       <HStack className={'justify-end space-x-1'}>
//         <HStack>
//           {inputData ? inputData.userList.map((id) => <Text key={id}>{id}</Text>) : null}
//         </HStack>
//         {/*<UncontrolledSelector*/}
//         {/*  options={options}*/}
//         {/*  isMulti={true}*/}
//         {/*  value={userList}*/}
//         {/*  setValue={setUserList}*/}
//         {/*  style={{ flex: 1 }}*/}
//         {/*/>*/}
//         {/*<Selector<TTaskInput> control={control} name={'userList'} style={{ flex: 1 }} isMulti={true}*/}
//         {/*                         options={options} />*/}
{/*        <Button onPress={onNavigate} my={'1'} rounded={'lg'}>Назначить</Button>*/
}
{/*      </HStack>*/
}
{/*      <Button className={'self-stretch'} onPress={onSubmit} colorScheme={'indigo'}>Отправить</Button>*/
}

{/*      <HStack className={'self-stretch justify-between'}>*/
}
{/*        <Text>*/
}
{/*          Обн.*/
}
{/*          {new Date(updatedAt).toLocaleDateString('ru')}*/
}
{/*        </Text>*/
}
{/*        <Text>*/
}
{/*          Созд.*/
}
{/*          {new Date(createdAt).toLocaleDateString('ru')}*/
}
{/*        </Text>*/
}
{/*      </HStack>*/
}

{/*    </VStack> : null}*/
}
{/*</Center>*/
}