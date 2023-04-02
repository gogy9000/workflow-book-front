import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { BottomMenu } from 'app/design/ui/navigation/nativeNavigation/BottomMenu'


export default function Root() {
  return (
    <Provider>
      <Stack screenOptions={{headerShown:false}}/>
      <BottomMenu/>
    </Provider>
  )
}
