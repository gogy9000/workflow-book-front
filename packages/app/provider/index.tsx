import { Dripsy } from './dripsy'
import { NativeBase } from 'app/provider/NativeBase'
import { ReduxProvider } from 'app/provider/ReduxProvider'
import { SafeArea } from 'app/provider/safe-area'
import { AuthGuard } from 'app/guards/AuthGuard'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <AuthGuard>
        <NativeBase>
          <Dripsy>
            <SafeArea>
              {children}
            </SafeArea>
          </Dripsy>
        </NativeBase>
      </AuthGuard>
    </ReduxProvider>
  )
}
