import React, { memo } from 'react'
import { HStack,Text } from 'app/design/layout'

interface INativeNavigationProps {

}

export const NativeNavigation: React.FC<INativeNavigationProps> = memo(({}) => {

  return (
    <HStack bgColor={'primary.600'} className={'h-10 '}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
    </HStack>
  )
})