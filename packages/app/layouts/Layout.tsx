import cn from 'clsx'
import React, { PropsWithChildren, memo } from 'react'
import { Platform, ViewStyle } from 'react-native'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import {View,SafeAreaView} from '../design/layout'




interface ILayout {
  className?: string
  style?: ViewStyle
  isHasPadding?: boolean
  isLoading?: boolean
}

export const Layout: React.FC<PropsWithChildren<ILayout>> = memo(
  ({ className, style, isHasPadding, children }) => {
    const { top } = useSafeArea()
    return (
      <SafeAreaView className='flex-1'>
        <View
          className={cn('flex-1', className, {
            'px-6': isHasPadding
          })}
          style={[
            {
              paddingTop: Platform.OS === 'ios' ? top / 6 :Platform.OS==='android'? top * 0.3:10
            },
            style
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    )
  }
)