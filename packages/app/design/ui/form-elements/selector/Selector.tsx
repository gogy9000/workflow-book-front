import React, { memo, useState } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { ViewStyle } from 'react-native'

import DropDownPicker, { ItemType } from 'react-native-dropdown-picker'
import { View ,Text} from 'app/design/layout'

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
			<View className='flex-1 items-start'   style={style}>
				<DropDownPicker
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					onChangeValue={(value: any) => {
						if (value) field.onChange(value)
					}}
					multiple={isMulti}
					mode={'BADGE'}
					// activityIndicatorColor='#BF3335'
					style={{
						// backgroundColor: '#9f9c9c',
						borderColor: error ? 'red' : 'transparent',
						flex:1,
						alignSelf:'flex-end',
						paddingHorizontal: 12,
						marginVertical: 3
					}}
					textStyle={{
						fontSize: 16,
						fontWeight:'400'
					}}
					// placeholderStyle={{
					// 	color: '#5A595D'
					// }}
					// dropDownContainerStyle={{
					// 	backgroundColor: '#d05555'
					// }}
					// showBadgeDot={true}
				/>
				{error ? <Text className='text-red'>{error.message}</Text> : null}
			</View>
		)
	}
)
