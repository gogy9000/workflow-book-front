import { DripsyProvider, makeTheme } from 'dripsy'
import { useColorScheme } from 'react-native'
import { theme, themeLight } from 'app/design/theme'



export function Dripsy({ children }: { children: React.ReactNode }) {
  const colorMode = useColorScheme()

  return (
    <DripsyProvider
      theme={colorMode === 'dark' ? theme : themeLight}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
