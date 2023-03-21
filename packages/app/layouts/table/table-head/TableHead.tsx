import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'

import { RowType } from 'app/layouts/table/table.types'
import { TableRow } from '../table-row/TableRow'
import { View } from 'app/design/layout'



interface ITableHeadProps {
	tableHeadData?: RowType
	ClassNameTableHeadRow?: ClassValue
	ClassNameTableHeadCell?: ClassValue
	classNameHeadCellText?: ClassValue
}

export const TableHead: React.FC<ITableHeadProps> = memo(
	({
		classNameHeadCellText,
		tableHeadData,
		ClassNameTableHeadCell,
		ClassNameTableHeadRow
	}) => {
		const classNameRow = useMemo(
			() => cn('bg-indigo-300', ClassNameTableHeadRow),
			[ClassNameTableHeadRow]
		)
		return (
			<View className={'py-3.5'}>
				<TableRow
					tableRowData={tableHeadData}
					classNameCellText={classNameHeadCellText}
					classNameCell={ClassNameTableHeadCell}
					classNameRow={classNameRow}
				/>
			</View>
		)
	}
)
