import React, { memo, useEffect, useState } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { Platform, ViewStyle } from 'react-native'

import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { View, Text } from 'app/design/layout'

interface IDropDownProps {
  options?: ItemType<any>[]
  isMulti?: boolean
  value: any[]
  onChange: (...args: any[]) => void
  error?: FieldError
  style?: ViewStyle
}

DropDownPicker.setTheme('LIGHT')
DropDownPicker.setListMode('SCROLLVIEW')

export const Selector: React.FC<IDropDownProps> =
  ({ error, style, options = [], value = [], isMulti, onChange }) => {
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState<number[] | null>(null)
    const [items, setItems] = useState<ItemType<number>[]>(options)


    useEffect(() => {
      if (!currentValue && value.length) {
        setCurrentValue(value)
      }
    }, [value])


    const onChangeValue = async (value) => {
      value && onChange(value)
    }

    useEffect(() => {
      const filteredOptions = options.filter(({ value }) => !currentValue?.includes(value))
      setItems(filteredOptions)
      if (!filteredOptions.length) {
        setOpen(false)
      }
    }, [currentValue])

    return (
      <View _web={{ mb: 0 }}
            mb={'10'} style={style}>
        <DropDownPicker
          // zIndex={3000}
          // zIndexInverse={1000}
          open={open}
          value={currentValue}
          items={items}
          setOpen={setOpen}
          setValue={setCurrentValue}
          setItems={setItems}
          onChangeValue={onChangeValue}
          modalAnimationType='fade'
          containerStyle={{
            zIndex: 10
          }}
          multiple={!!isMulti}
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
  }

