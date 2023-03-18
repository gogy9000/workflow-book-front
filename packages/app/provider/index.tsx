import { Dripsy } from './dripsy'
import { NativeBase } from 'app/provider/NativeBase'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NativeBase>
      <Dripsy>
        {children}
      </Dripsy>
    </NativeBase>
  )
}
