import React, { memo, useMemo } from 'react'
import { VStack, Text } from 'app/design/layout'
import { navigationData } from 'app/design/ui/webNavigationContainer/navigation.data'
import { NavigationItem } from 'app/design/ui/webNavigationContainer/NavigationItem'

interface IWebNavigationContainerProps {

}

export const WebNavigationContainer: React.FC<IWebNavigationContainerProps> = memo(({}) => {

  const mappedMenuItems = useMemo(() => {
    return navigationData.map((item) => <NavigationItem key={item.link} item={item} />)
  }, [navigationData])

  return (
    <VStack bg={'primary.600'} className={'px-3 items-start space-y-3 shadow-black shadow-xl'}>
      <Text className={'font-bold text-lg text-gray-50'}>Здесь будет лого</Text>
      {mappedMenuItems}
    </VStack>
  )
})