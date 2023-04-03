import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { BottomMenu } from 'app/design/ui/navigation/nativeNavigation/BottomMenu'
import { Layout } from 'app/layouts/Layout'


export default function Root() {
  return (
    <Provider>
      <Layout isHasPadding className={'bg-gray-200'}>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' } }} />
      </Layout>
      <BottomMenu />
    </Provider>
  )
}
