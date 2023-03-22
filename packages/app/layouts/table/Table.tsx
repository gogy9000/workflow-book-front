import { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { ScrollView, View, ViewStyle } from 'react-native'
import { BodyType, CellType, RowType } from 'app/layouts/table/table.types'
import { TableBodySkeleton } from 'app/layouts/table/table-body/TableBodySceleton'
import { TableBody } from './table-body/TableBody'
import { TableHead } from 'app/layouts/table/table-head/TableHead'



interface ITableProps {
	headData?: RowType
	bodyData?: BodyType
	classNameHeadCell?: ClassValue
	classNameHeadCellText?: ClassValue
	classNameHeadRow?: ClassValue
	classNameBodyRow?: ClassValue
	classNameBodyCell?: ClassValue
	classNameBodyCellText?: ClassValue
	isLoading?: boolean
	style?:ViewStyle,
	className?:string
}
const defaultCell: CellType = ''
const defaultRow: RowType = [defaultCell, defaultCell, defaultCell]
const defaultBody: BodyType = [defaultRow, defaultRow, defaultRow]

export const Table: React.FC<ITableProps> = memo(
	({
		classNameHeadCell,
		classNameHeadCellText,
		classNameBodyCell,
		classNameBodyCellText,
		classNameBodyRow,
		classNameHeadRow,
		headData = defaultRow,
		bodyData = defaultBody,
		isLoading,
		 style,
		 className
	}) => {
		const tableBody = useMemo(
			() =>
				isLoading ? (
					<TableBodySkeleton
						classNameCellText={classNameBodyCellText}
						classNameCell={classNameBodyCell}
						classNameRow={classNameBodyRow}
						isLoading={isLoading}
					/>
				) : (
					<TableBody
						classNameRow={classNameBodyRow}
						classNameCell={classNameBodyCell}
						classNameCellText={classNameBodyCellText}
						bodyData={bodyData}
					/>
				),
			[isLoading, bodyData]
		)

		return (
			<ScrollView
				horizontal
				scrollEventThrottle={16}
				// showsHorizontalScrollIndicator={false}
			>
				<View style={style}>
					<TableHead
						classNameHeadCellText={classNameHeadCellText}
						ClassNameTableHeadRow={classNameHeadRow}
						ClassNameTableHeadCell={classNameHeadCell}
						tableHeadData={headData}
					/>
					{tableBody}
				</View>
			</ScrollView>
		)
	}
)
