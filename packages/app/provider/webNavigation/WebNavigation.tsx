import React, { memo, PropsWithChildren } from 'react'
import { Box, HStack, Text, VStack } from 'app/design/layout'
import { WebNavigationContainer } from 'app/design/ui/webNavigationContainer/WebNavigationContainer'
import { Layout } from 'app/layouts/Layout'




export const WebNavigation: React.FC<PropsWithChildren> = memo(({children}) => {

  return (
    <HStack className={'flex-1'}>
      <WebNavigationContainer/>
      <Layout
        // className={'bg-gray-200'}
        isHasPadding>
        {children}
      </Layout>

    </HStack>
  )
})