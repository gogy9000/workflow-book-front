import React, { memo } from 'react'
import { Feather } from '@expo/vector-icons'
import { Pressable } from 'app/design/layout'
import { TNavigationMenuItem } from 'app/design/ui/navigation/types'
import { usePathname } from 'expo-router'
import { useRouter } from 'solito/router'


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
      className='items-center w-[25%]'
      onPress={onPress}
    >
      <Feather
        name={item.iconName}
        size={26}
        color={pathName === item.link ? 'rgb(133,130,130)' : 'rgb(239,234,234)'}
      />
    </Pressable>
  )
})