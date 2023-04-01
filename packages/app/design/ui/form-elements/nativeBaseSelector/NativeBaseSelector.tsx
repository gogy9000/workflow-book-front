import React, { memo } from 'react'
import {CheckIcon, Select } from 'native-base'
import { Box, Center } from 'app/design/layout'



interface INativeBaseSelectorProps {

}

export const NativeBaseSelector: React.FC<INativeBaseSelectorProps> = memo(({}) => {
  const [service, setService] = React.useState('ux');

  const onValueChange = itemValue => {

    setService(itemValue)
  }
  return (
        <Select   selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1}  onValueChange={onValueChange}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
  )
})