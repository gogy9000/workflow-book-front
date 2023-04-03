import React, { memo } from 'react'
import { Feather } from '@expo/vector-icons'
import { Pressable, Text } from 'app/design/layout'
import { TNavigationMenuItem } from 'app/design/ui/navigation/types'
import { usePathname } from 'expo-router'
import { useRouter } from 'solito/router'
import clsx from 'clsx'


interface IBottomMenuItemProps {
  item: TNavigationMenuItem
}

export const BottomMenuItem: React.FC<IBottomMenuItemProps> = memo(({ item }) => {
  const pathName = usePathname()
  const { replace } = useRouter()

  const onPress = () => {
    replace(item.link)
  }

  return (
    <Pressable
      className='items-center py-1 w-[25%]'
      onPress={onPress}
    >
      <Feather
        name={item.iconName}
        size={26}
        color={pathName === item.link ? 'rgb(75,74,74)' : 'rgb(189,186,186)'}
      />
      <Text className={clsx('text-[10px] text-gray-400', { 'text-gray-600': pathName === item.link})}>{item.title}</Text>
    </Pressable>
  )
})