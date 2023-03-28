import React, { memo } from 'react'
import { View } from 'react-native'
import { MotiLink } from 'solito/moti'
import { Text } from 'app/design/layout'


interface ITableActionsProps {

  href: string
}

export const TableActions: React.FC<ITableActionsProps> = memo(
  ({ href }) => {
    return (

      <MotiLink
        href={href}
        animate={({ hovered, pressed }) => {
          'worklet'
          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1
            // rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg'
          }
        }}
        from={{
          scale: 0,
          rotateZ: '0deg'
        }}
        transition={{
          type: 'timing',
          duration: 150
        }} style={undefined} onLayout={undefined}>
        <Text className={'text-gray-600  text-base font-semibold '}>Перейти</Text>
      </MotiLink>
    )
  }
)
