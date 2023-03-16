import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { NativeWindStyleSheet } from 'nativewind'

// NativeWindStyleSheet.setOutput({
//   default: 'native',
// })
export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
