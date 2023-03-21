import cn, { ClassValue } from 'clsx'
import React, { memo, useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { View } from 'app/design/layout'
import Animated from 'react-native-reanimated'
import { TableCell } from '../table-cell/TableCell'
import { RowType } from '../table.types'
import { styled } from 'nativewind'
import { Factory } from 'native-base'

const AnimatedView = styled(Factory(Animated.View))

interface ITableHeadProps {
  tableRowData?: RowType
  classNameRow?: ClassValue
  classNameCell?: ClassValue
  classNameCellText?: ClassValue
  animatedStyle?: ViewStyle
}

export const TableRow: React.FC<ITableHeadProps> = memo(
  ({
     tableRowData = ['some data', 'some data', 'some data'],
     classNameRow,
     classNameCell,
     classNameCellText,
     animatedStyle
   }) => {
    const mappedCells = useMemo(
      () =>
        tableRowData.map((cellData, index) => (
          <TableCell
            classNameCellText={classNameCellText}
            classNameCell={classNameCell}
            key={index + Date.now()}
            cellData={cellData}
          />
        )),
      [
        tableRowData,
        classNameRow,
        classNameCell,
        classNameCellText,
        animatedStyle
      ]
    )

    return (

      <AnimatedView
        className={cn('flex-row bg-gray-300  h-12 rounded-xl mb-2', classNameRow)}
        bgColor={'gray.300'}
        style={animatedStyle}>
          {mappedCells}
      </AnimatedView>

    )
  }
)
