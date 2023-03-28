import React, { memo } from 'react'
import { Text, View } from 'react-native'

interface IReportListProps {

}

export const ReportList: React.FC<IReportListProps> = memo(({}) => {

  return (
    <View>
      <Text>
        ReportList
      </Text>
    </View>
  )
})