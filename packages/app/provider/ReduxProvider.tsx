import React, { memo, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from 'app/store'




export const ReduxProvider: React.FC<PropsWithChildren> = memo(({children}) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
})