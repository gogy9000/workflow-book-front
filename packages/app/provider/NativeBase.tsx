import React, { memo, PropsWithChildren } from 'react'

import { NativeBaseProvider } from "native-base";


export const NativeBase: React.FC<PropsWithChildren> = memo(({children}) => {

  return (
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  )
})