import React, { memo } from 'react'
import { Text, Divider, View } from 'app/design/layout'
import { TNavigationMenuItem } from 'app/design/ui/webNavigationContainer/types'
import { useRouter } from 'next/router'
import { MotiLink } from 'solito/moti'
import clsx from 'clsx'
import AnimatedView from 'react-native-reanimated/lib/types/lib/reanimated2/component/View'


interface INavigationItemProps {
  item: TNavigationMenuItem
}

export const NavigationItem: React.FC<INavigationItemProps> = memo(({ item }) => {
  const { pathname } = useRouter()

  return (
      <View className={'self-stretch border-transparent border border-b-blue-100'}>
      <MotiLink
        href={item.link}
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            opacity: pressed ? 0.6 : hovered ? 0.6 : 1,

          }
        }}
      >
        <Text
          className={
            clsx('font-semibold text-lg text-gray-100',
              pathname === item.link ? 'opacity-50' : null
            )}
        >{item.title}</Text>
      </MotiLink>
      </View>
  )
})