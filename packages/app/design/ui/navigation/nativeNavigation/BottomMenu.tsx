import React, { memo, useMemo } from 'react'
import { HStack } from 'app/design/layout'
import { navigationData } from 'app/design/ui/navigation/navigation.data'
import { BottomMenuItem } from 'app/design/ui/navigation/nativeNavigation/BottomMenuItem'

interface IBottomMenuProps {

}

export const BottomMenu: React.FC<IBottomMenuProps> = memo(({}) => {

  const mappedMenuItems=useMemo(()=>{
    return navigationData.map((item)=><BottomMenuItem key={item.link} item={item}/>)
  },[])

  return (
    <HStack className={' justify-between items-stretch w-full bg-gray-200  border-t border-gray-300'}>
      {mappedMenuItems}
    </HStack>
  )
})