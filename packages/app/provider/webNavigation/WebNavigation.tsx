import React, {  PropsWithChildren } from 'react'
import { HStack } from 'app/design/layout'
import { WebNavigationContainer } from 'app/design/ui/navigation/webNavigationContainer/WebNavigationContainer'
import { Layout } from 'app/layouts/Layout'


export const WebNavigation: React.FC<PropsWithChildren> =({ children }) => {

  return (
    <HStack className={'flex-1'}>
      <WebNavigationContainer />
      <Layout isHasPadding>
        {children}
      </Layout>
    </HStack>
  )
}