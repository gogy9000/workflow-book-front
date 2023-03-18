import React, { memo } from 'react'
import { Control } from 'react-hook-form'
import { Field } from 'app/design/ui/form-elements/field/Field'
import { VStack, Text, Box, Button, Center, Heading, Pressable } from 'app/design/layout'
import { TAuthPayload } from 'app/types/auth.types'


interface IAuthLayoutProps {
  control: Control<TAuthPayload>
  title?: string
  onLink: () => void
  onSendButton: () => void
  buttonTitle?: string
  linkTitle?: string
}

export const AuthLayout: React.FC<IAuthLayoutProps> = memo(({
                                                              onLink,
                                                              control,
                                                              title = 'Авторизация',
                                                              onSendButton,
                                                              buttonTitle = 'Войти',
                                                              linkTitle = 'Регистрация'
                                                            }) => {

  return (
    <Center w='100%'>
      <Box safeArea p='2' py='8' w='90%' maxW='290'>
        <Heading size='lg' fontWeight='600' color='coolGray.800' _dark={{
          color: 'warmGray.50'
        }}>
          Добро пожаловать
        </Heading>
        <Heading mt='1' _dark={{
          color: 'warmGray.200'
        }} color='coolGray.600' fontWeight='medium' size='xs'>
          Войдите в систему!
        </Heading>
        <Heading mt='6' _dark={{
          color: 'warmGray.200'
        }} color='coolGray.600' fontWeight='medium' size='md' alignSelf={'center'}>
          {title}
        </Heading>
        <VStack space={3} mt='5'>
          <Field<TAuthPayload>
            label={'Почта'} name={'email'} control={control} />
          <Field<TAuthPayload>
            label={'Пароль'} name={'password'} control={control} type={'password'} />
          <Pressable onPress={onLink} className={'self-end'}>
            <Text
              color={'indigo.500'}
              underline
            >
              {linkTitle}
            </Text>
          </Pressable>
          <Button onPress={onSendButton} mt='2' colorScheme='indigo'>
            {buttonTitle}
          </Button>
        </VStack>
      </Box>
    </Center>
  )
})