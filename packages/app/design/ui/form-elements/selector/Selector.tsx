import React, { SetStateAction, useEffect, useState } from 'react'
import { FieldError } from 'react-hook-form'
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
  defaultValue?: number[]|number|null
  className?:string
}

DropDownPicker.setTheme('LIGHT')
DropDownPicker.setListMode('SCROLLVIEW')

export const Selector: React.FC<IDropDownProps> =
  ({ error, options=[] , isMulti, onChange, defaultValue }) => {
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState<any[] |any| null>(null)
    const [items, setItems] = useState(options)

    useEffect(()=>{
       setItems(options)
    },[options])

    useEffect(() => {
      setCurrentValue(defaultValue)
    }, [defaultValue])

    const onChangeValue = (value: any) => {
     if (isMulti){
       if (value !== null) {
         onChange(value)
       }
     }else {
       if(value && !(value instanceof Array)){
         onChange(value)
       }
     }
    }

    useEffect(() => {
      if(currentValue && currentValue instanceof Array){
        const filteredOptions = options.filter(({ value }) => !currentValue?.includes(value))
        setItems(filteredOptions)
        if (!filteredOptions.length) {
          setOpen(false)
        }
      }
    }, [currentValue])

    const setValue = (callback: SetStateAction<number[] | null>) => {
      setCurrentValue(callback)
    }
    return (
      // @ts-ignore
        <DropDownPicker
          placeholder={'Выберите тигров'}
          onChangeValue={onChangeValue}
          zIndex={3000}
          zIndexInverse={1000}
          open={open}
          value={currentValue}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          modalAnimationType='fade'
          extendableBadgeContainer
          multiple={isMulti}
          mode={'BADGE'}
          badgeStyle={{
          }}
          style={{
            borderColor: error ? 'red' : '#cfd3d9',
          }}
          textStyle={{
            fontSize: 16,
            fontWeight: '600',
            color: 'rgb(129,128,128)'
          }}
          dropDownContainerStyle={{ borderColor: error ? 'red' : '#cfd3d9'}}
          dropDownDirection={'TOP'}
          showBadgeDot={false}
        />
    )
  }

