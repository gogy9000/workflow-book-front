import { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { View } from 'react-native'
import { usePulsarOpacity } from 'app/layouts/table/hooks/usePulsarOpacity'
import { TableRow } from 'app/layouts/table/table-row/TableRow'





interface ITableBodySkeletonProps {
	isLoading?: boolean
	classNameRow?: ClassValue
	classNameCell?: ClassValue
	classNameCellText?: ClassValue
}
const defaultCells = ['', '', '']
const defaultRows = [defaultCells, defaultCells, defaultCells]

export const TableBodySkeleton: React.FC<ITableBodySkeletonProps> = memo(
	({ isLoading, classNameCellText, classNameCell, classNameRow }) => {
		const { animatedBackground } = usePulsarOpacity({
			isLoading,
			ms: 500,
			opacity: 0.5
		})
		const mappedRows = useMemo(
			() =>
				defaultRows.map((item, index) => (
					<TableRow
						key={index + Date.now()}
						animatedStyle={animatedBackground}
						tableRowData={item}
						classNameRow={classNameRow}
						classNameCell={classNameCell}
						classNameCellText={classNameCellText}
					/>
				)),
			[isLoading, animatedBackground]
		)
		return <View>{mappedRows}</View>
	}
)
