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
    <HStack className={'py-3 px-2 justify-between items-center w-full  bg-black'}>
      {mappedMenuItems}
    </HStack>
  )
})