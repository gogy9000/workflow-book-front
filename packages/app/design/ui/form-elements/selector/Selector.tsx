import React, { memo, useState } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { Platform, ViewStyle } from 'react-native'

import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { View, Text } from 'app/design/layout'

interface IDropDownProps {
  options?: ItemType<any>[]
  isMulti?: boolean
  field: ControllerRenderProps<any, any>
  error?: FieldError
  style?: ViewStyle
}

DropDownPicker.setTheme('LIGHT')
DropDownPicker.setListMode('SCROLLVIEW')

export const Selector: React.FC<IDropDownProps> = memo(
  ({ error, style, options = [], field, isMulti }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string[] | null>(field.value)
    const [items, setItems] = useState(options)
    return (
      <View _web={{ mb: 0 }}
            mb={'10'}>
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
            zIndex:10
          }}
          onChangeValue={(value: any) => {
            if (value) field.onChange(value)
          }}
          multiple={isMulti}
          mode={'BADGE'}
          // activityIndicatorColor='#BF3335'
          style={[{
            // backgroundColor: '#9f9c9c',
            borderColor: error ? 'red' : 'transparent',
            flex: 1,
            alignSelf: 'flex-end',
            paddingHorizontal: 12,
            marginVertical: 3
          }, style]}
          textStyle={{
            fontSize: 16,
            fontWeight: '600',
            color:'rgb(129,128,128)'
          }}

          // placeholderStyle={{
          // 	color: '#5A595D'
          // }}
          dropDownContainerStyle={{
            zIndex:1000,
            bottom:Platform.OS!='web'?12:55,
            borderWidth:0

          }}
          dropDownDirection={'TOP'}
          // bottomOffset={200}
          // showBadgeDot={true}
        />
        {error ? <Text className='text-red'>{error.message}</Text> : null}
      </View>
    )
  }
)
