import { Dripsy } from './dripsy'
import { NativeBase } from 'app/provider/NativeBase'
import { ReduxProvider } from 'app/provider/ReduxProvider'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <NativeBase>
        <Dripsy>
          {children}
        </Dripsy>
      </NativeBase>
    </ReduxProvider>
  )
}
