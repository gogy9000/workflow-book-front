import React, { Dispatch, memo, useEffect, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { Platform, ViewStyle } from 'react-native'

import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { View, Text } from 'app/design/layout'

interface IUncontrolledSelectorProps {
  options?: ItemType<any>[]
  isMulti?: boolean
  value: any[] | null
  onChange?: (...args: any[]) => void
  error?: FieldError
  style?: ViewStyle
  defaultValue?: any[]
  setValue: Dispatch<any>
}

export const UncontrolledSelector: React.FC<IUncontrolledSelectorProps> = memo(({
                                                                                  value,
                                                                                  options = [],
                                                                                  style,
                                                                                  error,
                                                                                  isMulti,
                                                                                  setValue
                                                                                }) => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<ItemType<any>[]>(options)

  useEffect(() => {
    const filteredOptions = options.filter((option) => !value?.includes(option.value))
    setItems(filteredOptions)
    if (!filteredOptions.length) {
      setOpen(false)
    }
  }, [value])

  return (
    <View _web={{ mb: 0 }}
          mb={'10'} style={style}>
      <DropDownPicker
        // zIndex={3000}
        // zIndexInverse={1000}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        modalAnimationType='fade'
        containerStyle={{
          zIndex: 10
        }}
        multiple={isMulti}
        mode={'BADGE'}
        // activityIndicatorColor='#BF3335'
        style={{
          // backgroundColor: '#9f9c9c',
          borderColor: error ? 'red' : 'transparent',
          flex: 1,
          alignSelf: 'flex-end',
          paddingHorizontal: 12,
          marginVertical: 3
        }}
        textStyle={{
          fontSize: 16,
          fontWeight: '600',
          color: 'rgb(129,128,128)'
        }}

        // placeholderStyle={{
        // 	color: '#5A595D'
        // }}
        dropDownContainerStyle={{
          zIndex: 1000,
          bottom: Platform.OS != 'web' ? 12 : 55,
          borderWidth: 0

        }}
        dropDownDirection={'TOP'}
        // bottomOffset={200}
        showBadgeDot={false}
      />
      {error ? <Text className='text-red'>{error.message}</Text> : null}
    </View>
  )
})