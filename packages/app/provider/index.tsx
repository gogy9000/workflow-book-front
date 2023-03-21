import { Dripsy } from './dripsy'
import { NativeBase } from 'app/provider/NativeBase'
import { ReduxProvider } from 'app/provider/ReduxProvider'
import { SafeArea } from 'app/provider/safe-area'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <NativeBase>
        <Dripsy>
          <SafeArea>
            {children}
          </SafeArea>
        </Dripsy>
      </NativeBase>
    </ReduxProvider>
  )
}
